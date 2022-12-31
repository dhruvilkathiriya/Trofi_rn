import {store} from '../store';
import {State} from '@typings/State';
import axios from 'axios';
import {API_ROUTE} from './serviceConstants';
import errorAlert from '@helpers/errorAlert';

export const trofiAuthenticator = axios.create({
  baseURL: API_ROUTE,
  timeout: 20000,
  validateStatus: function (status) {
    return status >= 200;
  },
});

trofiAuthenticator.interceptors.response.use(
  res => {
    errorAlert(res);
    return res;
  },
  res => res,
);

export const trofiMultipart = axios.create({
  baseURL: API_ROUTE,
  timeout: 20000,
});

trofiMultipart.interceptors.response.use(
  res => {
    errorAlert(res);
    return res;
  },
  res => res,
);

trofiMultipart.interceptors.request.use(async config => {
  const state: State = store.getState();
  config.headers = {
    ...config.headers,
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${state.auth.token?.accessToken}`,
  };
  return config;
});

const trofiGateway = axios.create({
  baseURL: API_ROUTE,
  timeout: 20000,
  validateStatus: function (status) {
    return status >= 200;
  },
});

trofiGateway.interceptors.response.use(
  res => {
    errorAlert(res);
    return res;
  },
  res => res,
);

trofiGateway.interceptors.request.use(async config => {
  const state: State = store.getState();
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${state.auth.token?.accessToken}`,
  };
  return config;
});

export default trofiGateway;
