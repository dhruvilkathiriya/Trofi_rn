import TextBox from '@components/TextBox';
import {WIDTH} from '@helpers/Dimensions';
import {Box, Text, useTheme} from '@utils/Theme';
import React from 'react';

export default () => {
  const {spacing} = useTheme();
  return (
    <>
      <Text variant="label1">Amount</Text>
      <Box height={44} marginVertical="l">
        <TextBox
          height={44}
          width={WIDTH - spacing.xl * 2}
          placeholder="Enter withdraw amount"
        />
        <Box
          position="absolute"
          top={12}
          right={0}
          bottom={12}
          width={53}
          alignItems="center"
          justifyContent="center"
          borderLeftWidth={1}
          borderColor="gray2">
          <Text variant="label1" fontSize={10}>
            Max
          </Text>
        </Box>
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Text variant="label2" color="gray3" fontSize={12}>
          Available 1.03105112 USD
        </Text>
        <Box
          height={13}
          width={13}
          borderRadius="m"
          alignItems="center"
          justifyContent="center"
          borderWidth={0.5}
          borderColor="gray3"
          marginLeft="s">
          <Text variant="label1" fontSize={7} color="gray3">
            S
          </Text>
        </Box>
      </Box>
    </>
  );
};
