import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';
import {Box, Text, TouchableBox} from '@utils/Theme';
import OTPBox from './OTPBox';
import ButtonPrimary from './ButtonPrimary';
import React, {useEffect, useState} from 'react';
import validator from '@helpers/validator';
import BackgroundTimer from 'react-native-background-timer';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface otpInputProps {
  resendOTPFail: boolean;
  showModal: boolean;
  isWrongOTP: boolean;
  submitLoader: boolean;
  loader: boolean;
  otpLength: number;
  title: string;
  onClose(): void;
  onSubmit(otp: string, callBack: () => void): void;
  onResendOTP(): void;
}

const CELL_COUNT = 6;
const OTP_TIME = 60;
const flex = {flex: 1};
const alignCenter = {alignSelf: 'center'} as const;
export default ({
  resendOTPFail,
  showModal,
  isWrongOTP,
  submitLoader,
  loader,
  title,
  onClose,
  onSubmit,
  onResendOTP,
}: otpInputProps) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const [isValidOTP, setIsOTPValid] = useState(true);

  const [remainingTimer, setOTPTime] = useState(OTP_TIME);

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true);
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false);
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    let intervalId: any;
    if (remainingTimer > 0 && !loader) {
      intervalId = BackgroundTimer.setInterval(() => {
        setOTPTime(prevTime => {
          prevTime <= 1 && BackgroundTimer.clearInterval(intervalId);
          return prevTime - 1;
        });
      }, 1000);
    } else if (remainingTimer === 0 && loader) {
      setOTPTime(OTP_TIME);
    }
    return () => BackgroundTimer.clearInterval(intervalId);
  }, [remainingTimer, loader, resendOTPFail]);

  return (
    <Modal
      visible={showModal}
      transparent={true}
      onRequestClose={onClose}
      onTouchCancel={onClose}
      onDismiss={onClose}
      onMagicTap={onClose}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={flex}>
        <Box flex={1} backgroundColor={'blackTrans1'} justifyContent="flex-end">
          <Box
            width={'100%'}
            backgroundColor={'white1'}
            paddingVertical="xxl"
            padding="m">
            <Text variant="title4" textAlign="center" paddingHorizontal="xxxl">
              {title}
            </Text>
            <Box
              backgroundColor={'white1'}
              paddingTop="xxl"
              paddingHorizontal="xl"
              justifyContent="center">
              <CodeField
                ref={ref}
                {...props}
                value={value}
                caretHidden={false}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({index, symbol, isFocused}) => (
                  <Box key={index} height={48} width={50}>
                    <OTPBox
                      onLayout={getCellOnLayoutHandler(index)}
                      height={48}
                      width={50}>
                      {symbol}{' '}
                    </OTPBox>
                    <Box
                      style={StyleSheet.absoluteFillObject}
                      alignItems="center"
                      justifyContent="center">
                      <Text
                        textAlign="center"
                        variant="input1"
                        marginLeft={symbol?.length ? 'l' : undefined}>
                        {((index === 5 &&
                          !isFocused &&
                          isKeyboardVisible &&
                          symbol?.length) ||
                          isFocused) && <Cursor />}
                      </Text>
                    </Box>
                  </Box>
                )}
              />
              {(!isValidOTP || isWrongOTP) && (
                <Text
                  variant="input1"
                  color="red"
                  textAlign="left"
                  paddingHorizontal="s">
                  The OTP you inputted is incorrect
                </Text>
              )}
              <Box
                backgroundColor={'white1'}
                flexDirection={'row'}
                justifyContent="space-between">
                <Box backgroundColor={'white1'} width={'45%'}>
                  <ButtonPrimary
                    label="CANCEL"
                    secondary
                    marginVertical="l"
                    onPress={onClose}
                  />
                </Box>
                <Box backgroundColor={'white1'} width={'45%'}>
                  <ButtonPrimary
                    loading={submitLoader}
                    label="SUBMIT"
                    marginVertical="l"
                    onPress={() => {
                      const isValid = validator.otpValidation(value);
                      setIsOTPValid(isValid);
                      if (isValid) {
                        onSubmit(value, () => setValue(''));
                      }
                    }}
                  />
                </Box>
              </Box>
            </Box>
            <TouchableBox
              height={40}
              backgroundColor={'white1'}
              flexDirection={'row'}
              justifyContent={'center'}
              alignItems={'center'}
              disabled={loader}>
              {!loader && resendOTPFail && (
                <Text
                  variant="label4"
                  textAlign="center"
                  color={'black'}
                  onPress={() => {
                    if (!loader) {
                      onResendOTP();
                    }
                  }}>
                  Resend Code
                </Text>
              )}

              {!loader && !resendOTPFail && (
                <Text
                  variant="label4"
                  textAlign="center"
                  color={'black'}
                  onPress={() => {
                    if (remainingTimer === 0 && !loader) {
                      onResendOTP();
                    }
                  }}>
                  {loader
                    ? 'Resend Code '
                    : remainingTimer > 0
                    ? `Resend code in ${remainingTimer} s `
                    : 'Resend Code '}
                </Text>
              )}
              {loader && (
                <ActivityIndicator
                  color={'black'}
                  size="small"
                  style={alignCenter}
                />
              )}
            </TouchableBox>
          </Box>
        </Box>
      </KeyboardAvoidingView>
    </Modal>
  );
};
