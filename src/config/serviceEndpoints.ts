export const endpoints = {
  login: 'auth/login',
  register: 'auth/register',
  verifyEmail: 'auth/verify-email',
  forgetPassword: 'auth/forgetPassword',
  resetPassword: 'auth/app-resetPassword',
  changePassword: 'profile/changePassword',
  saveMpin: 'auth/security/app-saveSecurePin',
  checkMpin: 'auth/security/app-checkSecurePin',
  checkToken: 'jwt',
  listTokens: 'deposit/listTokens',
  verifyTwoFactorOTP: 'auth/verify-code',
  resendOTP: 'auth/resend-otp',
  version: 'app/version',
  wallet: 'wallet',
  profile: 'profile',
};