export interface CryptoMainState {
  _id: string;
  name: string;
  asset_symbol: string;
  image_data: string;
  mime_type: string;
  is_active: string;
  createdAt: '2022-02-17T06:05:32.328Z';
  updatedAt: '2022-02-17T06:05:32.328Z';
}

export interface CryptoTokenState {
  _id: string;
  symbol: string;
  usd_rate: string;
  is_active: boolean;
  token: string | null;
  token_logo: string | null;
  disable_deposit: boolean;
  disable_withdraw: boolean;
  priority: number;
  cryptoMain: CryptoMainState;
}

export interface WalletState {
  _id: string;
  cryptoToken: CryptoTokenState;
  virtualBalance: number;
  fixedEarn: number;
  accuredInterest: number;
  fixedEarnInterest: number;
  flexibleEarnInterest: number;
  flexibleEarnData: {
    _id: string;
    apy: number;
  };
  totalBalance: number;
  totalInterestPaid: number;
  pendingWidthdraw: number;
  totalUsd: number;
  virtualUsd: number;
  fixedEarnUsd: number;
  accuredInterestUsd: number;
  totalInterestPaidUsd: number;
  add_from_ftx: boolean;
}

export interface USDBalanceState {
  totalAssets: number;
  availableBalance: number;
  fixedEarn: number;
  accuredInterest: number;
  totalInterestPaid: number;
}

export interface UserWalletState {
  loader: boolean;
  refreshing: boolean;
  wallets: WalletState[];
  usdBalance: USDBalanceState;
}
