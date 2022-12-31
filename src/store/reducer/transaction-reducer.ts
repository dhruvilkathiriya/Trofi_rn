import {
  LOAD_TRANSACTION,
  TransactionActionTypes,
  UNLOAD_TRANSACTION,
  UPDATE_TR_SYMBOLS,
} from '@store/action/transaction-action';
import {TransactionState} from '@typings/TransactionState';

const initialState: TransactionState = {
  loader: false,
  symbols: [],
};

export default (
  state = initialState,
  action: TransactionActionTypes,
): TransactionState => {
  switch (action.type) {
    case LOAD_TRANSACTION:
      return {
        ...state,
        loader: true,
      };

    case UNLOAD_TRANSACTION:
      return {
        ...state,
        loader: false,
      };

    case UPDATE_TR_SYMBOLS:
      return {
        ...state,
        symbols: action.payload,
      };

    default:
      return state;
  }
};
