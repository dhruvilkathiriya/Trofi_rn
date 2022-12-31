import {State} from '@typings/State';
import {UserWalletState} from '@typings/UserWalletState';
import {createSelector} from 'reselect';

export const getUserWallet = (state: State) => state.userWallet;

export const getUserWalletLoader = createSelector(
  getUserWallet,
  (userwallet: UserWalletState) => userwallet.loader,
);

export const getUserWalletRefreshing = createSelector(
  getUserWallet,
  (userwallet: UserWalletState) => userwallet.refreshing,
);

export const getUserWalletsList = createSelector(
  getUserWallet,
  (userwallet: UserWalletState) => userwallet.wallets,
);

export const getUserWalletUSDBalance = createSelector(
  getUserWallet,
  (userwallet: UserWalletState) => userwallet.usdBalance,
);
