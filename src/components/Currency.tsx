import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

export default () => (
  <Box flexDirection="row" alignItems="center">
    <Box
      height={42}
      width={42}
      borderRadius="xxl"
      alignItems="center"
      justifyContent="center"
      backgroundColor="gray1">
      <IconBold name="dollerCircle" size={27} />
    </Box>
    <Text variant="title2" fontSize={20} marginHorizontal="l">
      USDC
    </Text>
    <IconBold name="down" size={10} />
  </Box>
);
