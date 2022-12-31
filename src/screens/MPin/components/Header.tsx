import {Box, Text} from '@utils/Theme';
import React from 'react';

interface headerProps {
  label: string;
}

export default ({label}: headerProps) => (
  <Box
    height={85}
    width="100%"
    paddingBottom="xl"
    justifyContent="flex-end"
    alignItems="center"
    backgroundColor="secondary"
    borderBottomRightRadius="l"
    borderBottomLeftRadius="l">
    <Text variant="title3" color="textPrimary">
      {label}
    </Text>
  </Box>
);
