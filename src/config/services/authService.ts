import trofiGateway, {trofiAuthenticator} from '@config/service';
import {MAIN_ROUTE} from '@config/serviceConstants';
import {endpoints} from '@config/serviceEndpoints';
import axios from 'axios';

export const loginService = (params: any) =>
  trofiAuthenticator.post(endpoints.login, params);

export const signinService = (params: any) =>
  trofiAuthenticator.post(endpoints.register, params);

export const emailVerifyService = (params: any) =>
  trofiAuthenticator.post(endpoints.verifyEmail, params);

export const forgotPwdService = (params: any) =>
  trofiAuthenticator.post(endpoints.forgetPassword, params);

export const resetPwdService = (params: any) =>
  trofiAuthenticator.post(endpoints.resetPassword, params);

export const changePwdService = (params: any) =>
  trofiGateway.patch(endpoints.changePassword, params);

export const saveMpinService = (params: any) =>
  trofiGateway.post(endpoints.saveMpin, params);

export const mpinLoginService = (params: any) =>
  trofiGateway.post(endpoints.checkMpin, params);

export const checkTokenService = (token: string) =>
  trofiGateway.post(`${endpoints.checkToken}?appKey=${token}`, {
    verifyToken: true,
  });

export const twoFactorVerifyService = (params: any) =>
  trofiGateway.post(endpoints.verifyTwoFactorOTP, params);

export const resendOTPService = (params: any) =>
  trofiGateway.post(endpoints.resendOTP, params);

export const getVersionService = (params: any) =>
  axios.get(endpoints.version, {
    baseURL: MAIN_ROUTE,
    params,
  });

export const updateUserProfileData = (params: any) =>
  trofiGateway.patch(endpoints.profile, params);
