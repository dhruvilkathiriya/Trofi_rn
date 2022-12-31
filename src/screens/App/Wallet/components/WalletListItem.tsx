import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Image, Text, TouchableBox} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';
import {CryptoMainState} from '@typings/UserWalletState';

interface WalletListItemProps {
  title: string;
  change: string | number;
  price: string | number;
  balance: string | number;
  iconData?: CryptoMainState | null;
  onPress: () => void;
}

export default ({
  title,
  change,
  price,
  balance,
  iconData,
  onPress,
}: WalletListItemProps) => {
  return (
    <TouchableBox
      flexDirection={'row'}
      alignItems={'flex-start'}
      style={styles.container}
      onPress={onPress}>
      <Box
        backgroundColor={'gray3'}
        height={wp(6)}
        width={wp(6)}
        style={styles.iconContainer}>
        {iconData ? (
          <Image
            source={{
              uri: `data:${iconData.mime_type};base64,${iconData.image_data}`,
            }}
            style={styles.icon}
          />
        ) : null}
      </Box>
      <Box style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text color={'primary'} style={styles.changeText}>
          {`${change ?? 0}% APY`}
        </Text>
      </Box>
      <Box style={styles.amountContainer}>
        <Text style={styles.titleText}>{balance}</Text>
        <Text style={styles.balanceText} opacity={0.54}>
          {`$${price ?? 0}`}
        </Text>
      </Box>
    </TouchableBox>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  iconContainer: {
    borderRadius: wp(6),
  },
  icon: {
    height: wp(6),
    width: wp(6),
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: wp(2),
  },
  titleText: {
    fontSize: fontSize(18),
    marginBottom: hp(0.5),
  },
  changeText: {
    fontSize: fontSize(14),
    paddingVertical: wp(1),
    paddingHorizontal: wp(1.65),
    backgroundColor: '#F4F6FF',
    alignSelf: 'flex-start',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  balanceText: {
    fontSize: fontSize(14),
  },
});
