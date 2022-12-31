import {userWalletService} from '@config/services/WallateService';
import {AppThunk} from '@typings/redux-action';
import {USDBalanceState, WalletState} from '@typings/UserWalletState';
import {UserWalletActionTypes} from './types';

export const loadUserWallet = (isRefresh: boolean): UserWalletActionTypes => ({
  type: 'LOAD_USER_WALLET',
  payload: {isRefresh},
});

export const unloadUserWallet = (): UserWalletActionTypes => ({
  type: 'UNLOAD_USER_WALLET',
});

export const updateUserWallet = (payload: {
  wallets: WalletState[];
  usdBalance: USDBalanceState;
}): UserWalletActionTypes => ({
  type: 'UPDATE_USER_WALLET',
  payload,
});

export const getUserWalletAction =
  (isRefresh: boolean): AppThunk =>
  async (dispatch, getState) => {
    const {transaction} = getState();
    try {
      if (!transaction.symbols.length) {
        dispatch(loadUserWallet(isRefresh));
        const res = await userWalletService({type: 'deposit/withdraw'});
        if (res.data.success) {
          dispatch(
            updateUserWallet({
              wallets: res?.data?.wallets,
              usdBalance: res?.data?.usdBalance,
            }),
          );
        }
      }
    } catch (e) {
      console.log('[Get User Wallet] Exception: ', e);
    }
    dispatch(unloadUserWallet());
  };
