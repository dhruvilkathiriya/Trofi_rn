import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';

interface AmountInfoProps {
  title: string;
  value: string | number;
}

export default ({title, value}: AmountInfoProps) => (
  <Box backgroundColor={'blue3'} style={styles.container}>
    <Text style={styles.titleText} color={'textLightBlue1'}>
      {title}
    </Text>
    <Text style={styles.valueText} color={'textSecondary'}>
      {value}
    </Text>
  </Box>
);

const styles = StyleSheet.create({
  container: {
    width: wp(35),
    padding: wp(4),
    borderRadius: wp(2.6),
    marginRight: wp(2.1),
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: hp(5),
  },
  titleText: {
    fontSize: fontSize(13),
    fontWeight: '500',
  },
  valueText: {
    fontSize: fontSize(17),
    fontWeight: '500',
    marginTop: wp(1.4),
  },
});
