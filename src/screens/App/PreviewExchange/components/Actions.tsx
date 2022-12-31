import {useNavigation} from '@react-navigation/native';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';

export default () => {
  const {goBack} = useNavigation();
  return (
    <Box position="absolute" bottom={0} right={0} left={0} padding="xxxl">
      <TouchableBox
        height={44}
        width="100%"
        borderRadius="l"
        alignItems="center"
        justifyContent="center"
        backgroundColor="primary"
        flexDirection="row"
        marginVertical="m">
        <Text variant="button1" marginRight="m">
          EXCHANGE USD
        </Text>
        <IconBold name="arrowRight" size={20} />
        <Text variant="button1" marginLeft="m">
          ETH
        </Text>
      </TouchableBox>
      <TouchableBox
        height={44}
        width="100%"
        borderRadius="l"
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        borderColor="primary"
        marginVertical="m"
        onPress={() => goBack()}>
        <Text variant="button1" color="primary" marginRight="m">
          CANCEL
        </Text>
      </TouchableBox>
    </Box>
  );
};
