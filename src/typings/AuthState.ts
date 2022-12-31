export interface LoginParamState {
  username: string;
  password: string;
}

export interface EmailVerifyParamProps {
  firstName: string;
  lastName: string;
  email: string;
}

export type SendIconTypes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'Loading';

export interface SigninParamProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  cPassword: string;
  otp: string;
  referralCode?: string;
}

export interface ChangeParamProps {
  otp: string;
  email?: string;
  newPassword: string;
  cPassword: string;
}

export interface UpdateParamProps {
  oldPassword: string;
  newPassword: string;
  cPassword: string;
}

export interface TokenState {
  accessToken: string;
  appToken: string | null;
  tempToken: string | null;
}

export interface LoginParamsState {
  token: TokenState;
  userData: UserdataState;
}

export interface SetMpinParamState {
  mpin: string;
  token: string | null;
}

export enum BIOMETRICS {
  FINGER = 'Finger',
  FACE = 'Face',
  BIOMETRIC = 'Biometric',
  NONE = 'None',
}

export interface UserPersonaState {
  inquiryId: string;
  accountId: string;
  status: string;
}

export interface UserdataState {
  address?: string;
  city?: string;
  country?: string;
  countryCode?: string;
  dob?: string;
  email: string;
  firstName: string;
  is2faEnabled: boolean;
  kycStatus: boolean;
  lastName: string;
  mobile?: string;
  referrelCode?: string;
  state?: string;
  userId: number;
  withPersona?: UserPersonaState;
  zip?: string;
  hideZeroBalance?: boolean;
}

export interface AuthState {
  loading: boolean;
  token: TokenState | null;
  sendOtp: boolean;
  userData: UserdataState | null;
  mPin: string | null;
  biometric: BIOMETRICS;
  biometricEnabled: boolean;
  twoFAToken: TokenState | null;
}

export interface VerifyOTP {
  token: string;
  otp: string;
}
