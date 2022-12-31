import {ROUTE} from '@config/routes';

export type RootStackParamList = {
  [ROUTE.AUTH]: AuthStackParamList;
  [ROUTE.APP]: AppStackParamList;
  [ROUTE.APPVERSION]: undefined;
};

export type AuthStackParamList = {
  [ROUTE.LOGIN]: undefined;
  [ROUTE.SIGNIN]: undefined;
  [ROUTE.FORGOTPWD]: undefined;
  [ROUTE.CHANGEPWD]: {email: string};
};

export type AppStackParamList = {
  [ROUTE.HOME]: HomeStackParamList;
  [ROUTE.MPIN]: MPinStackParamList;
  [ROUTE.KYC]: undefined;
  [ROUTE.UPDATEPWD]: undefined;
  [ROUTE.MYREFFEREL]: undefined;
  [ROUTE.WALLETDETAILS]: {token: string};
  [ROUTE.PROFILE]: undefined;
  [ROUTE.HELP]: undefined;
  [ROUTE.CONTACT]: undefined;
  [ROUTE.TERMS]: undefined;
  [ROUTE.DEPOSIT]: undefined;
  [ROUTE.WITHDRAW]: undefined;
  [ROUTE.PREVIEWEXCHANGE]: undefined;
  [ROUTE.ACCOUNTSECURITY]: undefined;
};

export type TrofiStackParamList = {};

export type MPinStackParamList = {
  [ROUTE.ENTERCODE]: undefined;
  [ROUTE.CREATECODE]: undefined;
  [ROUTE.CONFIRMCODE]: {code: string};
};

export type HomeStackParamList = {
  [ROUTE.WALLET]: undefined;
  [ROUTE.EARN]: undefined;
  [ROUTE.TROFI]: TrofiStackParamList;
  [ROUTE.SWAP]: undefined;
  [ROUTE.ME]: undefined;
};
