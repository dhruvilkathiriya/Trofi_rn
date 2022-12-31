import {USDBalanceState, WalletState} from '@typings/UserWalletState';

export const LOAD_USER_WALLET = 'LOAD_USER_WALLET';
export const UNLOAD_USER_WALLET = 'UNLOAD_USER_WALLET';
export const UPDATE_USER_WALLET = 'UPDATE_USER_WALLET';

type LoadUserWalletAction = {
  type: typeof LOAD_USER_WALLET;
  payload: {
    isRefresh: boolean;
  };
};

type UnloadUserWalletAction = {
  type: typeof UNLOAD_USER_WALLET;
};

type UpdateUserWalletAction = {
  type: typeof UPDATE_USER_WALLET;
  payload: {
    wallets: WalletState[];
    usdBalance: USDBalanceState;
  };
};

export type UserWalletActionTypes =
  | LoadUserWalletAction
  | UnloadUserWalletAction
  | UpdateUserWalletAction;
