import {WIDTH} from '@helpers/Dimensions';
import {resetAlert} from '@store/action/app-action';
import {getAppAlert} from '@store/selector/app-selector';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default () => {
  const alert = useSelector(getAppAlert);
  const dispatch = useDispatch();
  const error = alert?.success === false;
  const status = alert?.success === false || alert?.success === true;
  return (
    <Modal visible={!!alert} transparent animationType="fade">
      <Box
        flex={1}
        backgroundColor="blackTrans"
        alignItems="center"
        justifyContent="center"
        padding="xxl">
        <Box
          width="100%"
          margin="m"
          alignItems="center"
          backgroundColor="secondary"
          padding="xxxl"
          paddingVertical="x4l"
          borderRadius="xxl">
          <IconBold name={error ? 'error' : 'success'} size={45} />
          {status && alert.title && (
            <Text
              variant="title2"
              marginTop="l"
              color={error ? 'red' : 'textPrimary'}>
              {alert.title}
            </Text>
          )}
          <Text variant="content3" textAlign="center" marginTop="l">
            {alert?.message}
          </Text>
          <Box
            position="absolute"
            bottom={0}
            height={8}
            width={WIDTH / 2}
            borderRadius="m"
            alignSelf="center"
            backgroundColor={error ? 'red' : 'primary'}
          />
          <TouchableBox
            position="absolute"
            top={-10}
            right={0}
            onPress={() => dispatch(resetAlert())}>
            <IconBold name="close" size={38} />
          </TouchableBox>
        </Box>
      </Box>
    </Modal>
  );
};
