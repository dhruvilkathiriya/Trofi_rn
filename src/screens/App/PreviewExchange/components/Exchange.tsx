import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

interface exchangeProps {
  label: string;
}

export default ({label}: exchangeProps) => (
  <>
    <Text variant="label4" fontSize={16} marginVertical="s">
      {label}
    </Text>
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginBottom="xxxl"
      marginTop="s">
      <Box flexDirection="row" alignItems="center">
        <IconBold name="doller" size={28} />
        <Text variant="title2" marginLeft="l">
          USD
        </Text>
      </Box>
      <Text variant="title2" fontFamily="Poppins-Regular">
        1.000000 ETH
      </Text>
    </Box>
  </>
);
