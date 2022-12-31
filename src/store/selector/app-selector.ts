import {AppState} from '@typings/AppState';
import {State} from '@typings/State';
import {createSelector} from 'reselect';

export const getApp = (state: State) => state.app;

export const getAppLoading = createSelector(
  getApp,
  (app: AppState) => app.loading,
);

export const getAppAlert = createSelector(getApp, (app: AppState) => app.alert);

export const getToggle = createSelector(getApp, (app: AppState) => app.toggle);

export const getMeToggle = createSelector(
  getApp,
  (app: AppState) => app.meToggle,
);

export const getRouteName = createSelector(
  getApp,
  (app: AppState) => app.routeName,
);

export const getVersionStatus = createSelector(
  getApp,
  (app: AppState) => app.versionStatus,
);

export const getLogoutPrompt = createSelector(
  getApp,
  (app: AppState) => app.logoutPrompt,
);
