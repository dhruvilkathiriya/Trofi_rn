import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {images} from '@helpers/images';
import {signinAction, verifyEmailAction} from '@store/action/auth-action';
import {SigninParamProps} from '@typings/AuthState';
import {Logo} from '@utils/iconRegular';
import {Box, Image, Text, TouchableBox} from '@utils/Theme';
import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import SigninBox from './components/SigninBox';

export default () => {
  const [loader, setLoader] = useState(false);
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
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}>
            <Box
              flex={1}
              alignItems="center"
              justifyContent="flex-start"
              paddingVertical="x4l"
              padding="xl">
              <Logo width={170} height={40} color="secondary" />
              <SigninBox
                loader={loader}
                onVerifyEmail={(
                  input: SigninParamProps,
                  callback: (success: boolean) => void,
                ) =>
                  dispatch(
                    verifyEmailAction(input, success => callback(success)),
                  )
                }
                onSignin={input => {
                  setLoader(true);
                  dispatch(
                    signinAction(input, success => {
                      setLoader(false);
                      success && navigate(ROUTE.LOGIN);
                    }),
                  );
                }}
              />
              <TouchableBox onPress={() => navigate(ROUTE.LOGIN)}>
                <Text variant="label2" textAlign="center" paddingBottom="l">
                  Already have an account? Sign In
                </Text>
              </TouchableBox>
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};
