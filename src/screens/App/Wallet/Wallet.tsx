import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Box} from '@utils/Theme';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {hp, wp} from '@utils/metrics';
import WalletHeader from './components/WalletHeader';
import WalletActions from './components/WalletActions';
import HideBalanceSwitch from './components/HideBalanceSwitch';
import SearchBar from './components/SearchBar';
import WalletListItem from './components/WalletListItem';
import {getUserWalletAction} from '@store/action/wallet-action';
import {
  getUserWalletLoader,
  getUserWalletRefreshing,
  getUserWalletsList,
} from '@store/selector/userwallet-selector';
import {WalletState} from '@typings/UserWalletState';
import ActivityLoader from '@components/ActivityLoader';
import {getUserData} from '@store/selector/auth-selector';

export default () => {
  const loadingState = useSelector(getUserWalletLoader);
  const refreshing = useSelector(getUserWalletRefreshing);
  const wallets = useSelector(getUserWalletsList);
  const userData = useSelector(getUserData);
  const [hideZeroBalance, setHideZeroBalance] = useState<boolean>(
    userData?.hideZeroBalance ?? false,
  );
  const [searchText, setSearchText] = useState<string>('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWalletAction(false));
  }, []);

  const onRefresh = () => {
    dispatch(getUserWalletAction(true));
  };

  const renderWalletItems = ({item}: {item: WalletState}) =>
    hideZeroBalance && item.totalBalance === 0 ? null : (
      <WalletListItem
        title={item.cryptoToken.symbol}
        balance={item.totalBalance}
        price={item.cryptoToken.usd_rate}
        change={item.flexibleEarnData.apy}
        iconData={item.cryptoToken.cryptoMain ?? null}
        onPress={() => navigate(ROUTE.WALLETDETAILS)}
      />
    );

  const walletItemsKeyExtractor = (item: WalletState) => item._id;

  const onHideBalValueChange = (val: boolean) => setHideZeroBalance(val);

  const walletsData =
    searchText.length > 0
      ? wallets.filter(i =>
          i.cryptoToken.symbol.toLowerCase().includes(searchText.toLowerCase()),
        )
      : wallets;

  return (
    <Box backgroundColor={'secondary'} style={styles.container}>
      <WalletHeader />
      <WalletActions onDepositPress={() => {}} onSwapPress={() => {}} />
      <Box
        borderBottomWidth={1}
        flexDirection={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        style={styles.searchContainer}>
        <HideBalanceSwitch
          value={hideZeroBalance}
          onValueChange={onHideBalValueChange}
        />
        <SearchBar onChangeText={setSearchText} />
      </Box>
      <FlatList
        data={walletsData}
        showsVerticalScrollIndicator={false}
        renderItem={renderWalletItems}
        keyExtractor={walletItemsKeyExtractor}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
      <ActivityLoader isLoading={loadingState} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: wp(4),
    paddingVertical: hp(1.2),
    borderBottomColor: '#7070701A',
    marginBottom: hp(1.6),
  },
});
