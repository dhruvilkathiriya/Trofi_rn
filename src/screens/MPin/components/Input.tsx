import {Box, Text} from '@utils/Theme';
import React from 'react';

interface inputProps {
  inputs: string[];
  label: string;
}

const margin = {marginHorizontal: 6};
const textBoxs = ['', '', '', ''];

export default ({inputs, label}: inputProps) => (
  <Box flex={1} justifyContent="center" alignItems="center">
    <Text variant="label3" color="textSecondary" marginBottom="xxl">
      {label}
    </Text>
    <Box justifyContent="center" alignItems="center" flexDirection="row">
      {textBoxs.map((_, i) => (
        <Box
          key={i.toString()}
          height={24}
          width={24}
          borderRadius="xl"
          backgroundColor={inputs[i]?.length ? 'skyBlue2' : 'blue1'}
          style={margin}
        />
      ))}
    </Box>
  </Box>
);
