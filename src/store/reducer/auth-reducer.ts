import {
  AuthActionTypes,
  ENABLE_BIOMETRIC,
  LOAD_AUTH,
  LOG_IN,
  TWOFA_LOG_IN,
  REMOVE_TWOFA_LOG_IN,
  LOG_OUT,
  MPIN_LOGIN,
  MPIN_LOGOUT,
  SET_MPIN,
  UNLOAD_AUTH,
  UNSET_MPIN,
  UPDATE_BIOMETRIC_TYPE,
  UPDATE_KYC,
  UPDATE_OTP_STATUS,
  UPDATE_TEMP_TOKEN,
} from '@store/action/auth-action';
import {AuthState, BIOMETRICS} from '@typings/AuthState';

const initialState: AuthState = {
  loading: false,
  token: null,
  sendOtp: false,
  userData: null,
  mPin: null,
  biometric: BIOMETRICS.NONE,
  biometricEnabled: false,
  twoFAToken: null,
};

export default (state = initialState, action: AuthActionTypes): AuthState => {
  switch (action.type) {
    case LOAD_AUTH:
      return {
        ...state,
        loading: true,
      };

    case UNLOAD_AUTH:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_OTP_STATUS:
      return {
        ...state,
        sendOtp: action.payload,
      };

    case LOG_IN:
      return {
        ...state,
        userData: action.payload.userData,
        token: action.payload.token,
        twoFAToken: null,
      };

    case TWOFA_LOG_IN:
      return {
        ...state,
        userData: action.payload.userData,
        twoFAToken: action.payload.token,
      };
    case REMOVE_TWOFA_LOG_IN:
      return {
        ...state,
        userData: null,
        twoFAToken: null,
      };

    case LOG_OUT:
      return {
        ...state,
        token: null,
        userData: null,
      };

    case SET_MPIN:
      return {
        ...state,
        mPin: action.payload.mpin,
        token: state.token
          ? {
              ...state.token,
              appToken: action.payload.token,
            }
          : null,
      };

    case UNSET_MPIN:
      return {
        ...state,
        mPin: null,
      };

    case MPIN_LOGIN:
      return {
        ...state,
        token: state.token
          ? {
              ...state.token,
              appToken: action.payload,
            }
          : null,
      };

    case MPIN_LOGOUT:
      return {
        ...state,
        token: state.token
          ? {
              ...state.token,
              appToken: null,
              tempToken: null,
            }
          : null,
      };

    case UPDATE_BIOMETRIC_TYPE:
      return {
        ...state,
        biometric: action.payload,
      };

    case ENABLE_BIOMETRIC:
      return {
        ...state,
        biometricEnabled: action.payload ?? true,
      };

    case UPDATE_KYC:
      return {
        ...state,
        userData: state.userData
          ? {
              ...state.userData,
              kycStatus: action.payload ?? true,
            }
          : null,
      };

    case UPDATE_TEMP_TOKEN:
      return {
        ...state,
        token: state.token
          ? {
              ...state.token,
              tempToken: action.payload,
            }
          : null,
      };

    default:
      return state;
  }
};
