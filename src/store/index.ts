import AsyncStorage from '@react-native-async-storage/async-storage';
import {State} from '@typings/State';
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Reducer,
} from 'redux';
import {batchDispatchMiddleware} from 'redux-batched-actions';
import {
  persistReducer,
  persistStore,
  StateReconciler,
  Transform,
} from 'redux-persist';
import thunk from 'redux-thunk';
import appReducer from './reducer/app-reducer';
import authReducer from './reducer/auth-reducer';
import transactionReducer from './reducer/transaction-reducer';
import userwalletReducer from './reducer/userwallet-reducer';

function makePersisted(
  key: string,
  reducer: Reducer,
  reconciler: StateReconciler<State> | undefined,
  transforms: Transform<State, State>[] | undefined = undefined,
) {
  return persistReducer(
    {
      key,
      storage: AsyncStorage,
      stateReconciler: reconciler,
      blacklist: ['signupError', 'loading', 'mergingDialogDisplayed'],
      transforms,
    },
    reducer,
  );
}

const rootReducers = combineReducers({
  auth: makePersisted('auth', authReducer, undefined),
  app: appReducer,
  transaction: transactionReducer,
  userWallet: userwalletReducer,
});

const middleware = applyMiddleware(thunk, batchDispatchMiddleware);
export const store = createStore(rootReducers, compose(middleware));
export const persistor = persistStore(store);
