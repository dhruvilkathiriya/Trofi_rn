import {WIDTH} from '@helpers/Dimensions';
import {updateLogoutPrompt} from '@store/action/app-action';
import {logout, unsetMpin} from '@store/action/auth-action';
import {getLogoutPrompt} from '@store/selector/app-selector';
import {Box, Text} from '@utils/Theme';
import React from 'react';
import {Modal} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonPrimary from './ButtonPrimary';

export default () => {
  const prompt = useSelector(getLogoutPrompt);
  const dispatch = useDispatch();
  return (
    <Modal visible={!!prompt?.enabled} transparent animationType="fade">
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
          borderRadius="xxl">
          <Text variant="title2" marginTop="l" color="textPrimary">
            {prompt?.title}
          </Text>
          <Text variant="content3" textAlign="center" marginTop="l">
            {prompt?.description}
          </Text>
          <Box flexDirection="row" paddingVertical="m">
            <Box flex={1} padding="m">
              <ButtonPrimary
                secondary
                label="No"
                onPress={() => dispatch(updateLogoutPrompt(false))}
              />
            </Box>
            <Box flex={1} padding="m">
              <ButtonPrimary
                label="Yes"
                onPress={() => {
                  dispatch(updateLogoutPrompt(false));
                  dispatch(logout());
                  dispatch(unsetMpin());
                }}
              />
            </Box>
          </Box>
          <Box
            position="absolute"
            bottom={0}
            height={8}
            width={WIDTH / 2}
            borderRadius="m"
            alignSelf="center"
            backgroundColor="primary"
          />
        </Box>
      </Box>
    </Modal>
  );
};
