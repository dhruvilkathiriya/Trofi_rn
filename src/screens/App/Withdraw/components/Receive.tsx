import ButtonPrimary from '@components/ButtonPrimary';
import {Box, Text} from '@utils/Theme';
import React from 'react';

export default () => (
  <Box height={140} width="100%" padding="l" marginBottom="l">
    <Box
      flex={1}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between">
      <Text variant="title3" color="black">
        Receive Amount
      </Text>
      <Text variant="title3">9,000 USDC</Text>
    </Box>
    <ButtonPrimary label="WITHDRAW" onPress={() => {}} />
  </Box>
);
