import {
  LOAD_USER_WALLET,
  UserWalletActionTypes,
  UNLOAD_USER_WALLET,
  UPDATE_USER_WALLET,
} from '@store/action/wallet-action';
import {UserWalletState} from '@typings/UserWalletState';

const initialState: UserWalletState = {
  loader: false,
  refreshing: false,
  wallets: [],
  usdBalance: {
    totalAssets: 0,
    availableBalance: 0,
    fixedEarn: 0,
    accuredInterest: 0,
    totalInterestPaid: 0,
  },
};

export default (
  state = initialState,
  action: UserWalletActionTypes,
): UserWalletState => {
  switch (action.type) {
    case LOAD_USER_WALLET:
      return {
        ...state,
        loader: !action.payload.isRefresh,
        refreshing: action.payload.isRefresh,
      };

    case UNLOAD_USER_WALLET:
      return {
        ...state,
        loader: false,
        refreshing: false,
      };

    case UPDATE_USER_WALLET:
      return {
        ...state,
        wallets: action.payload.wallets,
        usdBalance: action.payload.usdBalance,
      };

    default:
      return state;
  }
};
