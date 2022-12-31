import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

const margin = {marginHorizontal: 14};
export default () => (
  <Box
    flexDirection="row"
    height={52}
    backgroundColor="yellowLight"
    alignItems="center"
    width="100%"
    paddingRight="m"
    marginBottom="xl">
    <Box height="100%" width={5} backgroundColor="yellowDark" />
    <IconBold name="warning" size={20} style={margin} />
    <Box flex={1}>
      <Text variant="label2" fontSize={12} color="black">
        Send only <Text fontFamily="Poppins-Medium">Bitcoin (BTC)</Text> to this
        deposit address via the Bitcoin network.
      </Text>
    </Box>
  </Box>
);
