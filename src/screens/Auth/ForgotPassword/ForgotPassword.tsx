import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {images} from '@helpers/images';
import {forgotPwdAction} from '@store/action/auth-action';
import {Logo} from '@utils/iconRegular';
import {Box, Image, Text, TouchableBox} from '@utils/Theme';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import ForgotBox from './components/ForgotBox';

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
      <Box
        flex={1}
        alignItems="center"
        justifyContent="flex-start"
        paddingVertical="x5l"
        padding="xl">
        <Logo width={170} height={40} color="secondary" />
        <ForgotBox
          loader={loader}
          onSubmit={email => {
            setLoader(true);
            dispatch(
              forgotPwdAction(email, success => {
                setLoader(false);
                success && navigate(ROUTE.LOGIN, {email});
              }),
            );
          }}
        />
        <TouchableBox onPress={() => navigate(ROUTE.LOGIN)}>
          <Text variant="label2" textAlign="center" paddingBottom="l">
            Back to Login
          </Text>
        </TouchableBox>
      </Box>
    </>
  );
};
