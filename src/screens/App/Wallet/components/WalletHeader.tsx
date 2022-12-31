import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {Box, GradiantBox, Text} from '@utils/Theme';
import {fontSize, hp, statusBarHeight, wp} from '@utils/metrics';
import {IconLight} from '@utils/iconRegular';
import AmountInfo from './AmountInfo';
import BalanceInfo from './BalanceInfo';
import {getUserWalletUSDBalance} from '@store/selector/userwallet-selector';

type BalanceDataItem = {
  id: string;
  title: string;
  value: string | number;
};

export default () => {
  const usdBalance = useSelector(getUserWalletUSDBalance);

  const balanceData: BalanceDataItem[] = [
    {
      id: '1',
      title: 'Available Balance',
      value: usdBalance.availableBalance?.toFixed(2),
    },
    {
      id: '2',
      title: 'Fixed Earn',
      value: usdBalance.fixedEarn?.toFixed(2),
    },
    {
      id: '3',
      title: 'Pending Withdraw',
      value: Number(0).toFixed(2),
    },
  ];

  const renderBalanceListItem = ({item}: {item: BalanceDataItem}) => {
    return <BalanceInfo title={item.title} value={item.value} />;
  };

  const balanceKeyExtractor = (item: BalanceDataItem) => item.id;

  return (
    <GradiantBox colors={['#0024C1', '#1E6CC6']} style={styles.container}>
      <Box style={styles.titleContainer}>
        <Box width={hp(2.5)} />
        <Text style={styles.titleText} color={'textSecondary'}>
          {'Wallet'}
        </Text>
        <IconLight name={'walletHistory'} size={hp(3)} />
      </Box>
      <Box style={styles.amountContainer}>
        <AmountInfo
          title="Portfolio Value"
          value={usdBalance?.totalAssets?.toFixed(2)}
        />
        <AmountInfo
          title="Total Interest Earned"
          value={usdBalance?.totalInterestPaid?.toFixed(2)}
          style={styles.interestContainer}
        />
      </Box>
      <FlatList
        data={balanceData}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.balanceContainer}
        renderItem={renderBalanceListItem}
        keyExtractor={balanceKeyExtractor}
        ListHeaderComponent={<Box style={styles.listHeader} />}
        ListFooterComponent={<Box style={styles.listFooter} />}
        stickyHeaderIndices={[balanceData.length]}
      />
    </GradiantBox>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + hp(0.75),
    paddingBottom: hp(2),
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: hp(4.65),
    paddingHorizontal: wp(4.5),
  },
  titleText: {
    fontSize: fontSize(22),
    fontWeight: '500',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4.5),
  },
  interestContainer: {
    marginRight: wp(3.75),
  },
  balanceContainer: {
    marginVertical: hp(1.5),
  },
  listHeader: {
    width: wp(4.5),
  },
  listFooter: {
    width: wp(2.35),
  },
});
