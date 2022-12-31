import {
  ChangeParamProps,
  EmailVerifyParamProps,
  LoginParamState,
  SigninParamProps,
  UpdateParamProps,
} from '@typings/AuthState';

const emailRegex =
  /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&])[A-Za-z\d#@$!%*?&]{8,15}$/;
// const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
const otpRegex = /\b\d{6}\b/g;

export default {
  loginValidation: ({
    username,
    password,
  }: LoginParamState): {status: boolean; errorMsg: LoginParamState} => {
    const returnVal = {status: false, errorMsg: {username: '', password: ''}};
    if (!username.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.username = 'Email is required';
    } else {
      if (!emailRegex.test(username.trim())) {
        returnVal.status = true;
        returnVal.errorMsg.username = 'Email is not valid';
      }
    }
    if (!password.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.password = 'Password is required';
    }
    return returnVal;
  },
  emailVerifyValidation: (
    params: EmailVerifyParamProps,
  ): {status: boolean; errorMsg: SigninParamProps} => {
    const returnVal = {
      status: false,
      errorMsg: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cPassword: '',
        otp: '',
        referralCode: '',
      },
    };
    if (!params.firstName.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.firstName = 'First name is required';
    }
    if (!params.lastName.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.lastName = 'Last name is required';
    }
    if (!params.email.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is required';
    } else if (!emailRegex.test(params.email.trim())) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is not valid';
    }
    return returnVal;
  },
  signinValidation: (
    params: SigninParamProps,
  ): {status: boolean; errorMsg: SigninParamProps} => {
    const returnVal = {
      status: false,
      errorMsg: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cPassword: '',
        otp: '',
        referralCode: '',
      },
    };
    if (!params.firstName.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.firstName = 'First name is required';
    }
    if (!params.lastName.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.lastName = 'Last name is required';
    }
    if (!params.email.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is required';
    } else if (!emailRegex.test(params.email.trim())) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is not valid';
    }
    if (!params.otp.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.otp = 'Verification code is required';
    }
    if (!params.password.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.password = 'Password is required';
    } else if (!passwordRegex.test(params.password)) {
      returnVal.status = true;
      returnVal.errorMsg.password =
        'Password does not match the given criteria';
    }
    if (!params.cPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = 'Please re-enter the password';
    } else if (params.cPassword !== params.password) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = "Password confirmation doesn't match";
    }
    return returnVal;
  },
  forgotValidation: ({
    email,
  }: {
    email: string;
  }): {status: boolean; errorMsg: {email: string}} => {
    const returnVal = {status: false, errorMsg: {email: ''}};
    if (!email.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is required';
    } else if (!emailRegex.test(email.trim())) {
      returnVal.status = true;
      returnVal.errorMsg.email = 'Email is not valid';
    }
    return returnVal;
  },
  changePwdValidation: ({
    otp,
    newPassword,
    cPassword,
  }: ChangeParamProps): {
    status: boolean;
    errorMsg: ChangeParamProps;
  } => {
    const returnVal = {
      status: false,
      errorMsg: {otp: '', newPassword: '', cPassword: ''},
    };
    if (!otp.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.otp = 'Password is required';
    }
    if (!newPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.newPassword = 'Password is required';
    } else if (!passwordRegex.test(newPassword)) {
      returnVal.status = true;
      returnVal.errorMsg.newPassword =
        'Password does not match the given criteria';
    }
    if (!cPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = 'Please re-enter the password';
    } else if (cPassword !== newPassword) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = "Password confirmation doesn't match";
    }
    return returnVal;
  },
  updatePwdValidation: ({
    oldPassword,
    newPassword,
    cPassword,
  }: UpdateParamProps): {
    status: boolean;
    errorMsg: UpdateParamProps;
  } => {
    const returnVal = {
      status: false,
      errorMsg: {oldPassword: '', newPassword: '', cPassword: ''},
    };
    if (!oldPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.oldPassword = 'Password is required';
    }
    if (!newPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.newPassword = 'Password is required';
    } else if (!passwordRegex.test(newPassword)) {
      returnVal.status = true;
      returnVal.errorMsg.newPassword =
        'Password does not match the given criteria';
    }
    if (!cPassword.trim()) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = 'Please re-enter the password';
    } else if (cPassword !== newPassword) {
      returnVal.status = true;
      returnVal.errorMsg.cPassword = "Password confirmation doesn't match";
    }
    return returnVal;
  },
  passwordValidation: (password: string): boolean => {
    if (!passwordRegex.test(password)) {
      return true;
    } else {
      return false;
    }
  },
  otpValidation: (otp: string): boolean => {
    if (otp.length > 0 && !isNaN(Number.parseInt(otp))) {
      return true;
    } else {
      return false;
    }
  },
};
