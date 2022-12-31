import {AppState} from './AppState';
import {AuthState} from './AuthState';
import {TransactionState} from './TransactionState';
import {UserWalletState} from './UserWalletState';

export interface State {
  app: AppState;
  auth: AuthState;
  transaction: TransactionState;
  userWallet: UserWalletState;
}
