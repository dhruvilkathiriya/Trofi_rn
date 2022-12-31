import {
  AppActionTypes,
  LOAD_APP,
  RESET_ALERT,
  SET_ME_TOGGLE,
  SET_ROUTE_NAME,
  SET_TOGGLE,
  UNLOAD_APP,
  UPDATE_ALERT,
  UPDATE_LOGOUT_PROMPT,
  UPDATE_VERSION_STATUS,
} from '@store/action/app-action';
import {AppState} from '@typings/AppState';

const initialState: AppState = {
  loading: false,
  alert: null,
  toggle: false,
  meToggle: false,
  routeName: null,
  versionStatus: 'UPDATED',
  logoutPrompt: null,
};

export default (state = initialState, action: AppActionTypes): AppState => {
  switch (action.type) {
    case LOAD_APP:
      return {
        ...state,
        loading: true,
      };

    case UNLOAD_APP:
      return {
        ...state,
        loading: false,
      };

    case UPDATE_ALERT:
      return {
        ...state,
        alert: action.payload,
      };

    case RESET_ALERT:
      return {
        ...state,
        alert: null,
      };

    case SET_TOGGLE:
      return {
        ...state,
        toggle: action.payload ?? !state.toggle,
      };

    case SET_ME_TOGGLE:
      return {
        ...state,
        meToggle: action.payload ?? !state.meToggle,
      };

    case SET_ROUTE_NAME:
      return {
        ...state,
        routeName: action.payload,
      };

    case UPDATE_VERSION_STATUS:
      return {
        ...state,
        versionStatus: action.payload,
      };

    case UPDATE_LOGOUT_PROMPT:
      return {
        ...state,
        logoutPrompt: action.payload ?? null,
      };

    default:
      return state;
  }
};
