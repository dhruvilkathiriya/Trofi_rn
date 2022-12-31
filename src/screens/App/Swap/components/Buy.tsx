import Currency from '@components/Currency';
import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';
import Input from './Input';

export default () => (
  <>
    <Text variant="button1" color="textPrimary" marginBottom="m">
      Buy
    </Text>
    <Currency />
    <Input />
    <Box flexDirection="row" alignItems="center">
      <Text variant="label4" marginRight="l">
        1BTC
      </Text>
      <IconBold name="doubleArrow" size={16} />
      <Text variant="label4" marginLeft="l">
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
  </>
);
