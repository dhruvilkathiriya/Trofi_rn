import TextBox from '@components/TextBox';
import {WIDTH} from '@helpers/Dimensions';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, useTheme} from '@utils/Theme';
import React from 'react';

interface inputProps {
  label: string;
  placeholder: string;
}

export default ({label, placeholder}: inputProps) => {
  const {spacing} = useTheme();
  return (
    <>
      <Text variant="label1" marginTop="xxl" marginBottom="m">
        {label}
      </Text>
      <Box flexDirection="row" marginBottom="xxl">
        <TextBox
          height={44}
          width={WIDTH - spacing.xl * 2 - spacing.s * 2 - 44}
          placeholder={placeholder}
        />
        <Box
          height={44}
          width={44}
          borderRadius="l"
          backgroundColor="skyBlue3"
          alignItems="center"
          justifyContent="center"
          marginHorizontal="s">
          <IconBold name="scan" size={16} />
        </Box>
      </Box>
    </>
  );
};
