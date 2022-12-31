import TextBox from '@components/TextBox';
import {WIDTH} from '@helpers/Dimensions';
import {Box, Text, TouchableBox, useTheme} from '@utils/Theme';
import React from 'react';

interface inputProps {
  onMax?: () => void;
}

export default ({onMax}: inputProps) => {
  const {spacing} = useTheme();
  return (
    <Box height={44} marginVertical="l">
      <TextBox height={44} width={WIDTH - spacing.xl * 2} />
      {onMax && (
        <TouchableBox
          position="absolute"
          right={0}
          top={10}
          bottom={10}
          alignItems="center"
          justifyContent="center"
          borderLeftWidth={1}
          borderColor="gray2"
          width={52}
          onPress={onMax}>
          <Text variant="label1">Max</Text>
        </TouchableBox>
      )}
    </Box>
  );
};
