import {AlertState, LogoutPromptState, VersionState} from '@typings/AppState';
import {AppThunk} from '@typings/redux-action';
import {getVersion} from 'react-native-device-info';
import {AppActionTypes} from '.';
import {Platform} from 'react-native';
import {getVersionService} from '@config/services/authService';

export const loadApp = (): AppActionTypes => ({
  type: 'LOAD_APP',
});

export const unloadApp = (): AppActionTypes => ({
  type: 'UNLOAD_APP',
});

export const resetAlert = (): AppActionTypes => ({
  type: 'RESET_ALERT',
});

export const updateAlert = (payload: AlertState): AppActionTypes => ({
  type: 'UPDATE_ALERT',
  payload,
});

export const setToggle = (payload?: boolean): AppActionTypes => ({
  type: 'SET_TOGGLE',
  payload,
});

export const setMeToggle = (payload?: boolean): AppActionTypes => ({
  type: 'SET_ME_TOGGLE',
  payload,
});

export const setRouteName = (payload: string): AppActionTypes => ({
  type: 'SET_ROUTE_NAME',
  payload,
});

export const updateVersionState = (payload: VersionState): AppActionTypes => ({
  type: 'UPDATE_VERSION_STATUS',
  payload,
});

export const logoutPrompt = (payload?: LogoutPromptState): AppActionTypes => ({
  type: 'UPDATE_LOGOUT_PROMPT',
  payload,
});

export const checkVersionState = (): AppThunk => async dispatch => {
  try {
    const version = getVersion();
    const res = await getVersionService({type: Platform.OS, version});
    if (res.data?.success && res.data.latestVersion?.version > version) {
      if (res.data.latestVersion?.force_update) {
        dispatch(updateVersionState('NEED_FORCE_UPDATE'));
      } else {
        dispatch(updateVersionState('NEED_UPDATE'));
      }
    } else if (!res.data?.success) {
      console.log('[Check Version] !Success: ', res);
    } else {
      dispatch(updateVersionState('UPDATED'));
    }
  } catch (e) {
    console.log('[Check Version] Exception: ', e);
  }
};

export const updateLogoutPrompt =
  (visibility: boolean, type?: 'Logout' | 'Forgot'): AppThunk =>
  async dispatch => {
    try {
      if (visibility) {
        type === 'Forgot'
          ? dispatch(
              logoutPrompt({
                enabled: true,
                title: 'Forgot your pin?',
                description:
                  'Once you proceed, you will need your email, password, and setting up a new app PIN. Would you like to proceed?',
              }),
            )
          : dispatch(
              logoutPrompt({
                enabled: true,
                title: 'Trofi Wallet',
                description:
                  'Once you logout, if you want to login again you will need your email, password, and setting up a new app PIN. Would you like to logout?',
              }),
            );
      } else {
        dispatch(logoutPrompt());
      }
    } catch (e) {
      console.log('[Update Logout Prompt] Exception: ', e);
    }
  };
