export interface TRTokenState {
  decimals: number;
  identifier: string;
  name: string;
  symbol: string;
  type: string;
}

export interface TRLogoState {
  encoding: string;
  imageData: string;
  mimeType: string;
}

export interface FlexibleEarnState {
  _id: string;
  apy: number;
  token: string;
  is_active: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  updatedBy: string;
}

export interface CryptoMainState {
  _id: string;
  name: string;
  asset_symbol: string;
  image_data: string;
  mime_type: string;
  is_active: boolean;
  __v: number;
  createdAt: '2022-02-17T06:05:32.328Z';
  updatedAt: '2022-02-17T06:05:32.328Z';
}

export interface TransactionSymbolState {
  _id: string;
  withdrawal_fee: number;
  min_withdrawal: number;
  min_deposit: number;
  min_sweep_balance: number;
  is_active: boolean;
  is_deleted: boolean;
  add_from_ftx: boolean;
  is_coin: boolean;
  symbol: string;
  swap_symbol: string;
  binance_swap_symbol: string;
  token: TRTokenState;
  token_logo: TRLogoState;
  crypto_main: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  last_convertion_date: string;
  usd_rate: number;
  price_feed_symbol: string;
  price_is_future: boolean;
  swap_hedge: boolean;
  swap_is_future: boolean;
  disable_deposit: boolean;
  disable_withdraw: boolean;
  flexibleEarn: FlexibleEarnState;
  cryptoMain: CryptoMainState;
}

export interface TransactionState {
  loader: boolean;
  symbols: TransactionSymbolState[];
}
