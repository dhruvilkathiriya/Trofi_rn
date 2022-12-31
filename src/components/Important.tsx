import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';

interface importantProps {
  importants: string[];
}

export default ({importants}: importantProps) => (
  <>
    <Text variant="label1" marginVertical="l">
      IMPORTANT
    </Text>
    {importants.map((message, i) => (
      <Box
        key={i.toString()}
        flexDirection="row"
        alignItems="flex-start"
        marginVertical="s">
        <Box paddingTop="m">
          <IconBold name="doublePlay" size={5} />
        </Box>
        <Text variant="label3" fontSize={12} marginLeft="m" color="black">
          {message}
        </Text>
      </Box>
    ))}
  </>
);
