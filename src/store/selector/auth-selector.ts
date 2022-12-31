import {AuthState} from '@typings/AuthState';
import {State} from '@typings/State';
import {createSelector} from 'reselect';

export const getAuth = (state: State) => state.auth;

export const getAuthLoading = createSelector(
  getAuth,
  (auth: AuthState) => auth.loading,
);

export const getToken = createSelector(
  getAuth,
  (auth: AuthState) => auth.token,
);

export const getTwoFAToken = createSelector(
  getAuth,
  (auth: AuthState) => auth.twoFAToken,
);

export const getUserData = createSelector(
  getAuth,
  (auth: AuthState) => auth.userData,
);

export const getOtpStatus = createSelector(
  getAuth,
  (auth: AuthState) => auth.sendOtp,
);

export const getMpin = createSelector(getAuth, (auth: AuthState) => auth.mPin);

export const getBiometricStatus = createSelector(
  getAuth,
  (auth: AuthState) => auth.biometricEnabled,
);

export const getBiometricType = createSelector(
  getAuth,
  (auth: AuthState) => auth.biometric,
);
