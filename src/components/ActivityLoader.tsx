/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {Box, useTheme} from '@utils/Theme';

interface ActivityLoader {
  isLoading: boolean;
}

export default React.memo(({isLoading}: ActivityLoader) => {
  const {colors} = useTheme();

  return isLoading ? (
    <Box
      style={StyleSheet.absoluteFillObject}
      backgroundColor="blackTrans"
      alignItems="center"
      justifyContent="center">
      <ActivityIndicator
        color={colors.secondary}
        size="large"
        shouldRasterizeIOS
        animating
        focusable
      />
    </Box>
  ) : null;
});
