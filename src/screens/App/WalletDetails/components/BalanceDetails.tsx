import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';
import {IconCustom} from '@utils/iconRegular';

interface BalanceDetailsProps {
  title: string;
  symbol: string;
  icon?: any;
  value: string;
  price: string;
}

export default ({title, symbol, price, value, icon}: BalanceDetailsProps) => {
  return (
    <Box
      backgroundColor={'secondary'}
      borderColor={'borderLightBlue'}
      style={styles.container}>
      <Box flexDirection={'row'} alignItems={'center'} width={'50%'}>
        <Box backgroundColor={'skyBlue'} style={styles.iconContainer} />
        <Box style={styles.titleContainer}>
          <Text opacity={0.74} style={styles.titleText}>
            {title}
          </Text>
          <Text style={styles.symbolText}>{symbol}</Text>
        </Box>
        <IconCustom name={'polygon'} size={13} viewBox={'0 0 13 10'} />
      </Box>
      <Box
        width={'50%'}
        borderLeftWidth={1}
        borderLeftColor={'borderLightBlue'}
        style={styles.priceContainer}>
        <Text style={styles.totalBalanceTitleText}>{'Total Balance'}</Text>
        <Text style={styles.valueText}>{`${value} ${symbol}`}</Text>
        <Text opacity={0.54} style={styles.priceText}>{`=$ ${price}`}</Text>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp(4),
    borderWidth: 1,
    borderRadius: wp(2.35),
    paddingVertical: hp(2),
    paddingHorizontal: wp(5.5),
    marginTop: hp(1.6),
    marginBottom: hp(0.75),
  },
  iconContainer: {
    height: hp(5.75),
    width: hp(5.75),
    borderRadius: hp(5.75),
    marginRight: wp(4.2),
  },
  titleContainer: {
    marginRight: wp(5),
  },
  titleText: {
    fontSize: fontSize(16),
  },
  symbolText: {
    fontSize: fontSize(25),
    paddingTop: wp(1.25),
  },
  priceContainer: {
    paddingLeft: wp(6.2),
  },
  totalBalanceTitleText: {
    fontSize: fontSize(16),
  },
  valueText: {
    fontSize: fontSize(25),
    marginTop: hp(0.75),
    marginBottom: hp(0.45),
  },
  priceText: {
    fontSize: fontSize(20),
  },
});
