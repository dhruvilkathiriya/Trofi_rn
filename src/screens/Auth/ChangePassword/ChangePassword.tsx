import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {images} from '@helpers/images';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {changePwdAction} from '@store/action/auth-action';
import {AuthStackParamList} from '@typings/Navigation';
import {Logo} from '@utils/iconRegular';
import {Box, Image, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch} from 'react-redux';
import ChangeBox from './components/ChangeBox';

const flex = {flex: 1};
export default ({
  route,
}: NativeStackScreenProps<AuthStackParamList, ROUTE.CHANGEPWD>) => {
  const {
    params: {email},
  } = route;
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
              <ChangeBox
                onSubmit={input =>
                  dispatch(
                    changePwdAction(
                      {...input, email},
                      success => success && navigate(ROUTE.LOGIN),
                    ),
                  )
                }
              />
              <TouchableBox onPress={() => navigate(ROUTE.LOGIN)}>
                <Text variant="label2" textAlign="center" paddingBottom="l">
                  Back to Login?
                </Text>
              </TouchableBox>
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};
