import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Box} from '@utils/Theme';
import {hp} from '@utils/metrics';
import WalletDetailListItem from './components/WalletDetailListItem';
import WalletDetailsHeader from './components/WalletDetailsHeader';
import BalanceDetails from './components/BalanceDetails';
import WalletDetailActionButton from './components/WalletDetailActionButton';

type WalletDetailOption = {
  id: string;
  title: string;
  earnings?: string;
  value: string;
  price: string;
  accruedInterest?: string;
  hasRightArrow?: boolean;
  hasInfo?: boolean;
};

const walletDetailOptions: WalletDetailOption[] = [
  {
    id: '1',
    title: 'Available Balance',
    earnings: '3.45',
    value: '23.045',
    price: '609.18',
  },
  {
    id: '2',
    title: 'Fixed Earn',
    earnings: '12',
    value: '23.045',
    price: '609.18',
    hasRightArrow: true,
    hasInfo: true,
  },
  {
    id: '3',
    title: 'Pending Withdrawal',
    value: '23.045',
    price: '609.18',
  },
];

export default () => {
  const renderWalletDetailOptions = ({item}: {item: WalletDetailOption}) => (
    <WalletDetailListItem
      title={item.title}
      earnings={item.earnings}
      value={item.value}
      price={item.price}
      accruedInterest={item.accruedInterest}
      hasRightArrow={item.hasRightArrow}
      hasInfo={item.hasInfo}
    />
  );

  const walletDetailsKeyExtractor = (item: WalletDetailOption) => item.id;

  return (
    <Box backgroundColor={'secondary'} style={styles.container}>
      <WalletDetailsHeader />
      <FlatList
        data={walletDetailOptions}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <BalanceDetails
            title={'BitCoin'}
            symbol={'BTC'}
            value={'23.045'}
            price={'609.18'}
          />
        }
        renderItem={renderWalletDetailOptions}
        keyExtractor={walletDetailsKeyExtractor}
      />
      <Box
        flexDirection={'row'}
        justifyContent={'space-evenly'}
        style={styles.actionButtonContainer}>
        <WalletDetailActionButton title="Deposit" onPress={() => {}} />
        <WalletDetailActionButton title="Swap" onPress={() => {}} />
        <WalletDetailActionButton title="Withdraw" onPress={() => {}} />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  actionButtonContainer: {
    paddingTop: hp(2.5),
    paddingBottom: hp(5.5),
  },
});
