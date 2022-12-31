import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

export default () => (
  <Box
    borderTopWidth={0.4}
    borderBottomWidth={0.4}
    borderColor="gray2"
    padding="xl">
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="m">
      <Text variant="label3" fontSize={14} color="black">
        Exchange Rate
      </Text>
      <Box flexDirection="row" alignItems="center">
        <Text variant="label4" color="black" marginRight="m">
          1BTC
        </Text>
        <IconBold name="doubleArrow" size={18} />
        <Text variant="label4" color="black" marginLeft="m">
          43,032.43 USDC
        </Text>
        <Box
          height={18}
          width={18}
          borderRadius="l"
          alignItems="center"
          justifyContent="center"
          borderWidth={0.5}
          borderColor="green"
          marginLeft="m">
          <Text variant="content4" color="green">
            4s
          </Text>
        </Box>
      </Box>
    </Box>
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop="l">
      <Text variant="label3" fontSize={14} color="black">
        Free
      </Text>
      <Text variant="label4" color="black">
        Zero
      </Text>
    </Box>
  </Box>
);
