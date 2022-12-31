import {GradiantBox, Text, useTheme} from '@utils/Theme';
import React from 'react';

export default () => {
  const {colors} = useTheme();
  return (
    <GradiantBox
      height={71}
      width="100%"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      paddingHorizontal="xl"
      colors={[colors.secondary, colors.gray1]}>
      <Text variant="label1" color="black">
        Amount
      </Text>
      <Text variant="label1">10 USDC</Text>
    </GradiantBox>
  );
};
