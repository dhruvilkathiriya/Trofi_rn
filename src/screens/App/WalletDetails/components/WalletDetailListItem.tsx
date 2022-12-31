import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';
import {IconBold, IconCustom} from '@utils/iconRegular';

interface WalletDetailListItemProps {
  title: string;
  earnings?: string;
  value: string;
  price: string;
  accruedInterest?: string;
  hasRightArrow?: boolean;
  hasInfo?: boolean;
}

export default ({
  title,
  earnings,
  price,
  value,
  accruedInterest,
  hasRightArrow,
  hasInfo,
}: WalletDetailListItemProps) => {
  return (
    <Box
      backgroundColor={'secondary'}
      borderColor={'borderLightBlue'}
      style={styles.container}>
      <Box>
        <Box flexDirection={'row'} alignItems={'center'}>
          <Text marginRight={'s'} style={styles.titleText} color={'black'}>
            {title}
          </Text>
          {hasInfo ? (
            <IconCustom name={'info'} size={14} viewBox={'0 0 16 16'} />
          ) : null}
        </Box>
        {earnings === undefined ? null : (
          <Box
            alignSelf={'flex-start'}
            backgroundColor={'borderLightBlue'}
            marginVertical={'s'}
            borderRadius={'m'}>
            <Text color={'textBlue2'} style={styles.earningsText}>
              {`Earning ${earnings}% APY`}
            </Text>
          </Box>
        )}
        {accruedInterest === undefined ? null : (
          <Text opacity={0.54} style={styles.accInterestTitleText}>
            {'Accrued Interest'}
          </Text>
        )}
      </Box>
      <Box flexDirection={'row'} alignItems={'center'}>
        <Box alignItems={'flex-end'}>
          <Text style={styles.valueText}>{value}</Text>
          <Text opacity={0.54} style={styles.priceText}>{`$${price}`}</Text>
          {accruedInterest === undefined ? null : (
            <Text opacity={0.54} style={styles.accruedInterestText}>
              {accruedInterest}
            </Text>
          )}
        </Box>
        {hasRightArrow ? (
          <IconBold
            name="back"
            size={hp(4)}
            color="gray2"
            style={styles.rightArrow}
          />
        ) : (
          <Box width={hp(4)} />
        )}
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
    padding: wp(3.5),
    marginVertical: hp(0.75),
  },
  titleText: {
    fontSize: fontSize(16),
  },
  earningsText: {
    fontSize: fontSize(14),
    paddingHorizontal: wp(2.8),
    paddingVertical: wp(1.65),
  },
  accInterestTitleText: {
    fontSize: fontSize(13),
  },
  valueText: {
    fontSize: fontSize(19),
  },
  priceText: {
    fontSize: fontSize(14),
    marginTop: hp(0.45),
    marginBottom: hp(0.75),
  },
  accruedInterestText: {
    fontSize: fontSize(14),
  },
  rightArrow: {
    transform: [{rotate: '180deg'}],
    marginLeft: wp(1),
  },
});
