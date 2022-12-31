import {State} from '@typings/State';
import {TransactionState} from '@typings/TransactionState';
import {createSelector} from 'reselect';

export const getTransaction = (state: State) => state.transaction;

export const getTRLoader = createSelector(
  getTransaction,
  (transaction: TransactionState) => transaction.loader,
);

export const getTRSymbols = createSelector(
  getTransaction,
  (transaction: TransactionState) => transaction.symbols,
);
