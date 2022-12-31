import {TransactionSymbolState} from '@typings/TransactionState';

export const LOAD_TRANSACTION = 'LOAD_TRANSACTION';
export const UNLOAD_TRANSACTION = 'UNLOAD_TRANSACTION';
export const UPDATE_TR_SYMBOLS = 'UPDATE_TR_SYMBOLS';

type LoadTransactionAction = {
  type: typeof LOAD_TRANSACTION;
};

type UnloadTransactionAction = {
  type: typeof UNLOAD_TRANSACTION;
};

type UpdateTRSymbolsAction = {
  type: typeof UPDATE_TR_SYMBOLS;
  payload: TransactionSymbolState[];
};

export type TransactionActionTypes =
  | LoadTransactionAction
  | UnloadTransactionAction
  | UpdateTRSymbolsAction;
