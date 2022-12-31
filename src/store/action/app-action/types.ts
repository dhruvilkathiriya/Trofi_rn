import {AlertState, LogoutPromptState, VersionState} from '@typings/AppState';
import {LOG_OUT, MPIN_LOGOUT} from '../auth-action';

export const LOAD_APP = 'LOAD_APP';
export const UNLOAD_APP = 'UNLOAD_APP';
export const UPDATE_ALERT = 'UPDATE_ALERT';
export const RESET_ALERT = 'RESET_ALERT';
export const SET_TOGGLE = 'SET_TOGGLE';
export const SET_ME_TOGGLE = 'SET_ME_TOGGLE';
export const SET_ROUTE_NAME = 'SET_ROUTE_NAME';
export const UPDATE_VERSION_STATUS = 'UPDATE_VERSION_STATUS';
export const UPDATE_LOGOUT_PROMPT = 'UPDATE_LOGOUT_PROMPT';

type LogoutAction = {
  type: typeof LOG_OUT;
};

type LoadAppAction = {
  type: typeof LOAD_APP;
};

type UnloadAppAction = {
  type: typeof UNLOAD_APP;
};

type MpinLogoutAction = {
  type: typeof MPIN_LOGOUT;
};

type UpdateAlertAction = {
  type: typeof UPDATE_ALERT;
  payload: AlertState;
};

type ResetAlertAction = {
  type: typeof RESET_ALERT;
};

type SetToggleAction = {
  type: typeof SET_TOGGLE;
  payload?: boolean;
};

type SetMeToggleAction = {
  type: typeof SET_ME_TOGGLE;
  payload?: boolean;
};

type SetRouteNameAction = {
  type: typeof SET_ROUTE_NAME;
  payload: string;
};

type UpdateVersionStatusAction = {
  type: typeof UPDATE_VERSION_STATUS;
  payload: VersionState;
};

type UpdateLoginPromptAction = {
  type: typeof UPDATE_LOGOUT_PROMPT;
  payload?: LogoutPromptState;
};

export type AppActionTypes =
  | LogoutAction
  | LoadAppAction
  | UnloadAppAction
  | MpinLogoutAction
  | UpdateAlertAction
  | ResetAlertAction
  | SetToggleAction
  | SetMeToggleAction
  | SetRouteNameAction
  | UpdateVersionStatusAction
  | UpdateLoginPromptAction;
