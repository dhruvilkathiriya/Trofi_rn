import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Box, Text} from '@utils/Theme';
import {fontSize, hp} from '@utils/metrics';

interface AmountInfoProps {
  title: string;
  value: string | number;
  style?: ViewStyle;
}

export default ({title, value, style}: AmountInfoProps) => (
  <Box style={style}>
    <Text style={styles.titleText} color={'textLightBlue1'}>
      {title}
    </Text>
    <Text style={styles.valueText} color={'textSecondary'}>
      {value}
    </Text>
  </Box>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp(5),
  },
  titleText: {
    fontSize: fontSize(14),
  },
  valueText: {
    fontSize: fontSize(29),
    fontWeight: '500',
  },
});
