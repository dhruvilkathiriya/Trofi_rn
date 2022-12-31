import {getTRSymbolsService} from '@config/services/TransactionService';
import {AppThunk} from '@typings/redux-action';
import {TransactionSymbolState} from '@typings/TransactionState';
import {TransactionActionTypes} from './types';

export const loadTransaction = (): TransactionActionTypes => ({
  type: 'LOAD_TRANSACTION',
});

export const unloadTransaction = (): TransactionActionTypes => ({
  type: 'UNLOAD_TRANSACTION',
});

export const updateTRSymbols = (
  payload: TransactionSymbolState[],
): TransactionActionTypes => ({
  type: 'UPDATE_TR_SYMBOLS',
  payload,
});

export const getTRSymbolsAction =
  (): AppThunk => async (dispatch, getState) => {
    const {transaction} = getState();
    try {
      if (!transaction.symbols.length) {
        dispatch(loadTransaction());
        const res = await getTRSymbolsService({type: 'deposit/withdraw'});
        if (res.data.success) {
          dispatch(updateTRSymbols(res.data.tokens));
        }
      }
    } catch (e) {
      console.log('[Get TR Symbols] Exception: ', e);
    }
    dispatch(unloadTransaction());
  };
