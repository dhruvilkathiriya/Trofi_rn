import {
  changePwdService,
  checkTokenService,
  emailVerifyService,
  forgotPwdService,
  loginService,
  mpinLoginService,
  resetPwdService,
  saveMpinService,
  signinService,
  twoFactorVerifyService,
  resendOTPService,
  updateUserProfileData,
} from '@config/services/authService';
import {
  BIOMETRICS,
  ChangeParamProps,
  LoginParamsState,
  LoginParamState,
  SetMpinParamState,
  SigninParamProps,
  UpdateParamProps,
  UserdataState,
  VerifyOTP,
} from '@typings/AuthState';
import {AppThunk} from '@typings/redux-action';
import ReactNativeBiometrics from 'react-native-biometrics';
import {AuthActionTypes} from '.';
import {loadApp, unloadApp, updateAlert} from '../app-action';

export const loadAuth = (): AuthActionTypes => ({
  type: 'LOAD_AUTH',
});

export const unloadAuth = (): AuthActionTypes => ({
  type: 'UNLOAD_AUTH',
});

export const updateOtpStatus = (payload: boolean): AuthActionTypes => ({
  type: 'UPDATE_OTP_STATUS',
  payload,
});

export const login = (payload: LoginParamsState): AuthActionTypes => ({
  type: 'LOG_IN',
  payload,
});

export const tempLogin = (payload: LoginParamsState): AuthActionTypes => ({
  type: '2FA_LOG_IN',
  payload,
});

export const removeTempLogin = (): AuthActionTypes => ({
  type: 'REMOVE_2FA_LOG_IN',
});

export const logout = (): AuthActionTypes => ({
  type: 'LOG_OUT',
});

export const setMpin = (payload: SetMpinParamState): AuthActionTypes => ({
  type: 'SET_MPIN',
  payload,
});

export const unsetMpin = (): AuthActionTypes => ({
  type: 'UNSET_MPIN',
});

export const mpinLogin = (payload: string): AuthActionTypes => ({
  type: 'MPIN_LOGIN',
  payload,
});

export const mpinLogout = (): AuthActionTypes => ({
  type: 'MPIN_LOGOUT',
});

export const updateBiometric = (payload: BIOMETRICS): AuthActionTypes => ({
  type: 'UPDATE_BIOMETRIC_TYPE',
  payload,
});

export const enableBiometric = (payload?: boolean): AuthActionTypes => ({
  type: 'ENABLE_BIOMETRIC',
  payload,
});

export const updateKyc = (payload?: boolean): AuthActionTypes => ({
  type: 'UPDATE_KYC',
  payload,
});

export const updateTempToken = (payload: string): AuthActionTypes => ({
  type: 'UPDATE_TEMP_TOKEN',
  payload,
});

export const loginAction =
  (
    params: LoginParamState,
    callback: (success: boolean, userdata: any) => void,
  ): AppThunk =>
  async dispatch => {
    try {
      const res = await loginService({
        email: params.username.toLowerCase().trim(),
        password: params.password,
      });
      if (res.status === 200 && res.data.success) {
        const token = {
          accessToken: res.data.appAuthToken,
          appToken: null,
          tempToken: null,
        };
        const userData = {
          address: res.data.users.address,
          city: res.data.users.city,
          country: res.data.users.country,
          countryCode: res.data.users.country_code,
          dob: res.data.users.dob,
          email: res.data.users.email,
          firstName: res.data.users.first_name,
          is2faEnabled: res.data.users.is_2fa_enabled,
          kycStatus: res.data.users.kyc_status,
          lastName: res.data.users.last_name,
          mobile: res.data.users.mobile,
          referrelCode: res.data.users.referrel_code,
          state: res.data.users.state,
          userId: res.data.users.user_id,
          withPersona: res.data.users.withPersona,
          zip: res.data.users.zip,
          hideZeroBalance: res.data.users.hideZeroBalance,
        };
        if (userData.is2faEnabled) {
          dispatch(tempLogin({token, userData}));
        } else {
          dispatch(login({token, userData}));
        }
        callback(true, userData);
      } else {
        console.log('[Login] Error Response: ', res.data ?? res);
        dispatch(
          updateAlert({
            success: false,
            title: 'Failed',
            message: res.data?.msg?.trim()
              ? res.data.msg
              : res.data?.message ?? 'An error occured',
          }),
        );
        callback(false, {});
      }
    } catch (e) {
      console.log('[Login] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
      callback(false, {});
    }
  };

export const updateUserProfile =
  (userData: UserdataState, callback: (success: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      const res = await updateUserProfileData({
        first_name: userData.firstName,
        dob: userData.dob,
        address: userData.address,
        city: userData.city,
        state: userData.state,
        country: userData.country,
        country_code: userData.countryCode,
        zip: userData.zip,
        last_name: userData.lastName,
        email: userData.email,
        is_2fa_enabled: userData.is2faEnabled,
        mobile: userData.mobile,
        hideZeroBalance: userData.hideZeroBalance,
      });
      if (res.status === 200 && res.data.success) {
        callback(true);
      } else {
        dispatch(
          updateAlert({
            success: false,
            title: 'Failed',
            message: res.data?.msg?.trim()
              ? res.data.msg
              : res.data?.message ?? 'An error occured',
          }),
        );
        callback(false);
      }
    } catch (e) {
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
      callback(false);
    }
  };

export const verifyEmailAction =
  (params: SigninParamProps, callback: (res: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      const res = await emailVerifyService({
        first_name: params.firstName,
        last_name: params.lastName,
        email: params.email.toLowerCase().trim(),
      });
      if (res.status === 200 && res.data.success) {
        callback(true);
        dispatch(updateOtpStatus(true));
      } else {
        callback(false);
        console.log('[Verify Email] Erro Response: ', res.data ?? res);
      }
    } catch (e) {
      callback(false);
      console.log('[Verify Email] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
    }
  };

export const signinAction =
  (params: SigninParamProps, callback: (success: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      const param = {
        first_name: params.firstName,
        last_name: params.lastName,
        email: params.email.toLowerCase().trim(),
        password: params.password,
        otp: params.otp,
        referral_code: params.referralCode?.length ? params.referralCode : null,
      };
      const res = await signinService(param);
      if (res.status === 200 && res.data.success) {
        const token = {
          accessToken: res.data.appAuthToken,
          appToken: null,
          tempToken: null,
        };
        const userData = {
          email: res.data.newUser.email,
          firstName: res.data.newUser.first_name,
          is2faEnabled: res.data.newUser.is_2fa_enabled,
          kycStatus: res.data.newUser.kyc_status,
          lastName: res.data.newUser.last_name,
          mobile: res.data.newUser?.mobile ?? undefined,
          referrelCode: res.data.newUser.referrel_code,
          userId: res.data.newUser.user_id,
          hideZeroBalance: res.data.newUser?.hideZeroBalance ?? undefined,
        };
        dispatch(unsetMpin());
        dispatch(login({token, userData}));
      } else {
        callback(false);
      }
    } catch (e) {
      console.log('[Signin] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
      callback(false);
    }
  };

export const forgotPwdAction =
  (email: string, callback: (success: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      const res = await forgotPwdService({email: email.toLowerCase().trim()});
      if (res.status === 200 && res.data.success) {
        callback(true);
        dispatch(
          updateAlert({
            success: true,
            title: 'Success',
            message: 'Reset password link is shared to your email',
          }),
        );
      } else if (res.data?.statusCode === 422) {
        callback(true);
        dispatch(
          updateAlert({
            success: true,
            title: 'Success',
            message: 'Reset password link is shared to your email',
          }),
        );
      } else {
        callback(false);
        console.log('[Forgot Pwd] Error Response: ', res.data ?? res);
      }
    } catch (e) {
      callback(false);
      console.log('[Forgot Pwd] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
    }
  };

export const changePwdAction =
  (params: ChangeParamProps, callback: (success: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      dispatch(loadApp());
      const res = await resetPwdService({
        otp: params.otp,
        email: params.email?.toLowerCase()?.trim(),
        new_password: params.newPassword,
      });
      console.log('change password response' + JSON.stringify(res?.data));
      if (res.data?.success) {
        callback(true);
      } else {
        callback(false);
        console.log('[Change Pwd] Failed: ', res);
      }
    } catch (e) {
      callback(false);
      console.log('[Change Pwd] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
    }
    dispatch(unloadApp());
  };

export const updatePwdAction =
  (params: UpdateParamProps, callback: (success: boolean) => void): AppThunk =>
  async dispatch => {
    try {
      dispatch(loadApp());
      const res = await changePwdService({
        old_password: params.oldPassword,
        new_password: params.newPassword,
      });
      if (res.data?.success) {
        dispatch(
          updateAlert({
            success: true,
            title: 'Password updated',
            message: res.data.message,
          }),
        );
        callback(true);
      } else {
        callback(false);
        console.log('[Update Pwd] Failed: ', res);
      }
    } catch (e) {
      callback(false);
      console.log('[Update Pwd] Exception: ', e);
      dispatch(
        updateAlert({
          success: false,
          title: 'Failed',
          message: 'An exception occured',
        }),
      );
    }
    dispatch(unloadApp());
  };

export const checkBiomericAction = (): AppThunk => async dispatch => {
  try {
    await ReactNativeBiometrics.isSensorAvailable()
      .then(async resultObject => {
        const {available, biometryType} = resultObject;
        if (available && biometryType === ReactNativeBiometrics.TouchID) {
          dispatch(updateBiometric(BIOMETRICS.FINGER));
        } else if (available && biometryType === ReactNativeBiometrics.FaceID) {
          dispatch(updateBiometric(BIOMETRICS.FACE));
        } else if (
          available &&
          biometryType === ReactNativeBiometrics.Biometrics
        ) {
          dispatch(updateBiometric(BIOMETRICS.BIOMETRIC));
        } else {
          dispatch(updateBiometric(BIOMETRICS.NONE));
        }
      })
      .catch(e => console.log('[Check Sensor] Exception: ', e));
  } catch (e) {
    console.log('[Check Biometric] Exception: ', e);
  }
};

export const saveMPinAction =
  (mpin: string): AppThunk =>
  async dispatch => {
    try {
      dispatch(loadApp());
      const res = await saveMpinService({
        secure_pin: mpin,
      });
      if (res.data?.success) {
        dispatch(setMpin({mpin, token: res.data.appToken}));
      } else {
        console.log('[Save MPin] !success: ', res);
      }
    } catch (e) {
      console.log('[Save MPin] Exception: ', e);
    }
    dispatch(unloadApp());
  };

export const mpinLoginAction =
  (mpin: string, callback: () => void): AppThunk =>
  async dispatch => {
    try {
      dispatch(loadApp());
      const res = await mpinLoginService({
        secure_pin: mpin,
      });
      if (res.data?.success) {
        dispatch(mpinLogin(res.data.appToken));
      } else if (res.data.statusCode === 423) {
        dispatch(unsetMpin());
      } else {
        console.log('[MPin Login] !success: ', res);
      }
    } catch (e) {
      console.log('[MPin Login] Exception: ', e);
    }
    callback();
    dispatch(unloadApp());
  };

export const checkTokenAction =
  (tempToken?: string | null): AppThunk =>
  async (dispatch, getState) => {
    const {
      auth: {token},
    } = getState();
    try {
      const checkToken = async (key: string) => {
        const res = await checkTokenService(key);
        if (res.data?.statusCode === 401) {
          if (res.data?.appKeyExpired) {
            dispatch(mpinLogout());
          } else {
            console.log('[Check Token] ', res);
            dispatch(logout());
            dispatch(unsetMpin());
          }
        }
      };
      if (token?.tempToken) {
        checkToken(token?.tempToken);
      } else if (tempToken) {
        checkToken(tempToken);
      }
    } catch (e) {
      console.log('[Check Token] Exception: ', e);
    }
  };

export const removeTempToken = (): AppThunk => async dispatch => {
  try {
    dispatch(removeTempLogin());
  } catch (e) {
    console.log('[Remove Temp Token ] Exception: ', e);
  }
};
export const checkIfTempTokenPresent =
  (): AppThunk => async (dispatch, getState) => {
    try {
      const {
        auth: {twoFAToken},
      } = getState();
      if (twoFAToken?.accessToken) {
        dispatch(removeTempLogin());
      }
    } catch (e) {
      console.log('[Remove Temp Token ] Exception: ', e);
    }
  };

export const verifyTwoFactorOTP =
  (params: VerifyOTP, callback: (success: boolean) => void): AppThunk =>
  async (dispatch, getState) => {
    const {
      auth: {twoFAToken, userData},
    } = getState();
    try {
      const res = await twoFactorVerifyService(params);
      if (res.data?.statusCode === 200 && twoFAToken && userData) {
        const token = {
          accessToken: twoFAToken.accessToken,
          appToken: twoFAToken.appToken,
          tempToken: null,
        };
        callback(true);
        dispatch(removeTempLogin());
        dispatch(login({token, userData}));
      } else {
        callback(false);
      }
    } catch (e) {
      console.log('[VerifyLoginOTP] Exception: ', e);
      callback(false);
    }
  };

export const resendOTPAction =
  (params: any, callback: (success: boolean) => void): AppThunk =>
  async () => {
    try {
      const res = await resendOTPService(params);
      if (res.data?.statusCode === 200) {
        callback(true);
      } else {
        console.log('[ResentOTP] !200: ', res);
        callback(false);
      }
    } catch (e) {
      console.log('[ResentOTP] Exception: ', e);
      callback(false);
    }
  };
