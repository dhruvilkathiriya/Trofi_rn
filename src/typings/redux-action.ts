import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';
import {State} from './State';

export interface ReduxAction {
  type: string;
  payload?: unknown;
  error?: unknown;
}

export type ThunkResult<R> = ThunkAction<R, State, void, ReduxAction>;

export type Thunk = ThunkResult<Promise<void | string | null>>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  State,
  unknown,
  Action<string>
>;
