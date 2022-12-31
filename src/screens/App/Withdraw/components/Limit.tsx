import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

const margin = {marginHorizontal: 14};
export default () => (
  <Box
    height={47}
    width="100%"
    flexDirection="row"
    alignItems="center"
    backgroundColor="skyBlue"
    marginVertical="xl">
    <Box height="100%" width={4} backgroundColor="skyBlue2" />
    <IconBold name="insertCard" size={17} style={margin} />
    <Box>
      <Text variant="content4" color="black">
        24h Withdrawal limit : $ 500,000
      </Text>
      <Text variant="content4" color="black">
        Withdrawal limit used : $0
      </Text>
    </Box>
  </Box>
);
