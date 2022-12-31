import {images} from '@helpers/images';
import {useNavigation} from '@react-navigation/native';
import {updatePwdAction} from '@store/action/auth-action';
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
export default () => {
  const {goBack} = useNavigation();
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
              paddingBottom="x5l"
              padding="xl">
              <ChangeBox
                onSubmit={input =>
                  dispatch(
                    updatePwdAction(input, success => success && goBack()),
                  )
                }
              />
              <TouchableBox onPress={() => goBack()}>
                <Text variant="label2" textAlign="center" paddingBottom="l">
                  Go Back?
                </Text>
              </TouchableBox>
            </Box>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </>
  );
};
