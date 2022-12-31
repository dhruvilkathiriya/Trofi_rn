import {
  BIOMETRICS,
  LoginParamsState,
  SetMpinParamState,
  UserdataState,
} from '@typings/AuthState';

export const LOAD_AUTH = 'LOAD_AUTH';
export const UNLOAD_AUTH = 'UNLOAD_AUTH';
export const UPDATE_OTP_STATUS = 'UPDATE_OTP_STATUS';
export const LOG_IN = 'LOG_IN';
export const TWOFA_LOG_IN = '2FA_LOG_IN';
export const REMOVE_TWOFA_LOG_IN = 'REMOVE_2FA_LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const SET_MPIN = 'SET_MPIN';
export const UNSET_MPIN = 'UNSET_MPIN';
export const MPIN_LOGIN = 'MPIN_LOGIN';
export const MPIN_LOGOUT = 'MPIN_LOGOUT';
export const UPDATE_BIOMETRIC_TYPE = 'UPDATE_BIOMETRIC_TYPE';
export const ENABLE_BIOMETRIC = 'ENABLE_BIOMETRIC';
export const UPDATE_KYC = 'UPDATE_KYC';
export const UPDATE_TEMP_TOKEN = 'UPDATE_TEMP_TOKEN';

type LoadAuthAction = {
  type: typeof LOAD_AUTH;
};

type UnloadAuthAction = {
  type: typeof UNLOAD_AUTH;
};

type UpdateOtpStatusAction = {
  type: typeof UPDATE_OTP_STATUS;
  payload: boolean;
};

type LoginAction = {
  type: typeof LOG_IN;
  payload: LoginParamsState;
};

type TWOFALoginAction = {
  type: typeof TWOFA_LOG_IN;
  payload: LoginParamsState;
};

type REMOVE_TWOFA_LOG_IN = {
  type: typeof REMOVE_TWOFA_LOG_IN;
};

type LogoutAction = {
  type: typeof LOG_OUT;
};

type SetMpinAction = {
  type: typeof SET_MPIN;
  payload: SetMpinParamState;
};

type UnsetMpinAction = {
  type: typeof UNSET_MPIN;
};

type MpinLoginAction = {
  type: typeof MPIN_LOGIN;
  payload: string;
};

type MpinLogoutAction = {
  type: typeof MPIN_LOGOUT;
};

type UpdateBiometricTypeAction = {
  type: typeof UPDATE_BIOMETRIC_TYPE;
  payload: BIOMETRICS;
};

type EnableBiometricAction = {
  type: typeof ENABLE_BIOMETRIC;
  payload?: boolean;
};

type UpdateKycAction = {
  type: typeof UPDATE_KYC;
  payload?: boolean;
};

type UpdateTempTokenAction = {
  type: typeof UPDATE_TEMP_TOKEN;
  payload: string;
};

export type AuthActionTypes =
  | LoadAuthAction
  | UnloadAuthAction
  | UpdateOtpStatusAction
  | LoginAction
  | TWOFALoginAction
  | REMOVE_TWOFA_LOG_IN
  | LogoutAction
  | SetMpinAction
  | UnsetMpinAction
  | MpinLoginAction
  | MpinLogoutAction
  | UpdateBiometricTypeAction
  | EnableBiometricAction
  | UpdateKycAction
  | UpdateTempTokenAction;
