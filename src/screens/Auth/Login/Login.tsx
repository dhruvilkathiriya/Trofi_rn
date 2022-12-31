import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {images} from '@helpers/images';
import {loginAction, removeTempToken} from '@store/action/auth-action';
import {Logo} from '@utils/iconRegular';
import {Box, Image, Text, TouchableBox} from '@utils/Theme';
import React, {useState} from 'react';
import OTPInput from '@components/OTPInput';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import LoginBox from './components/LoginBox';
import {useSelector} from 'react-redux';
import {getTwoFAToken} from '@store/selector/auth-selector';
import {
  resendOTPAction,
  verifyTwoFactorOTP,
} from '@store/action/auth-action/auth-action';

const flex = {flex: 1};
export default () => {
  const [loader, setLoader] = useState(false);
  const twoFAToken = useSelector(getTwoFAToken);
  const [otpLoader, setOtpLoader] = useState(false);
  const [submitLoading, setSubmitLoader] = useState(false);
  const [isOTPWrong, setWrontOTP] = useState(false);
  const [resendOTPFail, setResendOTPFail] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Image
        height="100%"
        width="100%"
        style={StyleSheet.absoluteFillObject}
        source={images.background.source}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={flex}>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}>
            <Box
              flex={1}
              alignItems="center"
              justifyContent="flex-start"
              paddingVertical="x5l"
              padding="xl">
              <Logo width={170} height={40} color="secondary" />
              <Text
                variant="content4"
                textAlign="center"
                paddingHorizontal="xxxl"
                marginVertical="m">
                YOUR GATEWAY TO CRYPTO WEALTH MANAGEMENT PRODUCTS & SERVICES
              </Text>
              <LoginBox
                loader={loader}
                onLogin={input => {
                  setLoader(true);
                  dispatch(
                    loginAction(input, (success, userdata) => {
                      if (success && userdata?.is2faEnabled) {
                        setShowOTPModal(true);
                      } else {
                        setShowOTPModal(false);
                      }
                      setLoader(false);
                    }),
                  );
                }}
              />
              <TouchableBox onPress={() => navigate(ROUTE.SIGNIN)}>
                <Text variant="label2" textAlign="center" paddingBottom="l">
                  Don't have an account yet? Sign Up
                </Text>
              </TouchableBox>
            </Box>
            {showOTPModal && (
              <OTPInput
                resendOTPFail={resendOTPFail}
                showModal={showOTPModal}
                submitLoader={submitLoading}
                isWrongOTP={isOTPWrong}
                loader={otpLoader}
                title="Enter the one-time passcode (OTP) sent to your email"
                otpLength={6}
                onSubmit={(otpValue, callBack) => {
                  setSubmitLoader(true);
                  setWrontOTP(false);
                  twoFAToken?.accessToken &&
                    dispatch(
                      verifyTwoFactorOTP(
                        {
                          otp: otpValue,
                          token: twoFAToken.accessToken,
                        },
                        success => {
                          if (!success) {
                            setWrontOTP(true);
                            setSubmitLoader(false);
                          } else {
                            setShowOTPModal(false);
                          }
                          callBack();
                        },
                      ),
                    );
                }}
                onClose={() => {
                  setSubmitLoader(false);
                  setWrontOTP(false);
                  setShowOTPModal(false);
                  dispatch(removeTempToken());
                }}
                onResendOTP={() => {
                  setOtpLoader(true);
                  dispatch(
                    resendOTPAction(
                      {token: twoFAToken?.accessToken},
                      success => {
                        if (!success) {
                          setResendOTPFail(true);
                        } else {
                          setResendOTPFail(false);
                        }
                        setOtpLoader(false);
                      },
                    ),
                  );
                }}
              />
            )}
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};
