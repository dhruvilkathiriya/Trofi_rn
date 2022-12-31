/* eslint-disable react-hooks/exhaustive-deps */
import ButtonPrimary from '@components/ButtonPrimary';
import InputBox from '@components/InputBox';
import validator from '@helpers/validator';
import {updateOtpStatus} from '@store/action/auth-action';
import {getOtpStatus} from '@store/selector/auth-selector';
import {SendIconTypes, SigninParamProps} from '@typings/AuthState';
import {IconTypes} from '@typings/IconTypes';
import {Text, TouchableBox} from '@utils/Theme';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Policy from './Policy';
import BackgroundTimer from 'react-native-background-timer';
import {MAX_WIDTH} from '@helpers/Dimensions';

const inputs = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  cPassword: '',
  otp: '',
  referralCode: '',
};

interface signinBoxProps {
  loader: boolean;
  onSignin: (input: SigninParamProps) => void;
  onVerifyEmail: (
    input: SigninParamProps,
    callback: (success: boolean) => void,
  ) => void;
}

export default ({loader, onSignin, onVerifyEmail}: signinBoxProps) => {
  const dispatch = useDispatch();
  const code = useSelector(getOtpStatus);
  const [policy, setPolicy] = useState(false);
  const [policyError, setPolicyError] = useState('');
  const [error, setError] = useState<SigninParamProps>(inputs);
  const [input, setInput] = useState<SigninParamProps>(inputs);
  const [sendIcon, setSendIcon] = useState<IconTypes | SendIconTypes>(
    'withdrawActive',
  );

  useEffect(() => {
    let interval = BackgroundTimer.setInterval(() => {
      if (code) {
        if (sendIcon === 'Loading') {
        } else if (sendIcon === 1) {
          setSendIcon('withdrawActive');
          dispatch(updateOtpStatus(false));
          BackgroundTimer.clearInterval(interval);
        } else if (sendIcon === 'withdrawActive') {
          setSendIcon('tickCircle');
        } else if (sendIcon === 'tickCircle') {
          setSendIcon(10);
        } else {
          setSendIcon((prev: any) => (prev - 1) as SendIconTypes);
        }
      } else {
        BackgroundTimer.clearInterval(interval);
      }
    }, 1000);

    return function cleanUp() {
      BackgroundTimer.clearInterval(interval);
    };
  }, [code, sendIcon]);

  const onVerify = () => {
    const validation = validator.emailVerifyValidation(input);
    setError(validation.errorMsg);
    if (!validation.status) {
      setSendIcon('Loading');
      onVerifyEmail(input, success =>
        setSendIcon(success ? 'tickCircle' : 'withdrawActive'),
      );
    }
  };

  const onSubmit = () => {
    const validation = validator.signinValidation(input);
    setError(validation.errorMsg);
    !policy &&
      setPolicyError('Please accept terms of service and privacy policy');
    if (!validation.status) {
      if (policy) {
        onSignin(input);
      }
    }
  };

  return (
    <TouchableBox
      activeOpacity={1}
      width="100%"
      maxWidth={MAX_WIDTH}
      margin="l"
      padding="xxxl"
      borderRadius="xxl"
      backgroundColor="secondary">
      <Text variant="title1" marginBottom="l">
        Sign up
      </Text>
      <InputBox
        error={error.firstName}
        value={input.firstName}
        label="First name"
        placeholder="Enter First name"
        autoComplete="off"
        onChangeText={text => {
          setError({...error, firstName: ''});
          setInput({...input, firstName: text});
        }}
      />
      <InputBox
        error={error.lastName}
        value={input.lastName}
        label="Last name"
        placeholder="Enter Last name"
        autoComplete="off"
        onChangeText={text => {
          setError({...error, lastName: ''});
          setInput({...input, lastName: text});
        }}
      />
      <InputBox
        error={error.email}
        value={input.email}
        label="Email address"
        autoComplete="off"
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Enter Email address"
        onChangeText={text => {
          setError({...error, email: ''});
          setInput({...input, email: text});
        }}
      />
      <InputBox
        sendIcon={sendIcon}
        error={error.otp}
        value={input.otp}
        autoComplete="off"
        keyboardType="decimal-pad"
        label="Email verification code"
        placeholder="Enter verification code"
        onChangeText={text => {
          setError({...error, otp: ''});
          setInput({...input, otp: text});
        }}
        onSend={onVerify}
      />
      <InputBox
        error={error.password}
        value={input.password}
        autoComplete="off"
        label="Password"
        autoCapitalize="none"
        placeholder="Enter Password"
        secureTextEntry
        maxLength={15}
        onChangeText={text => {
          setError({...error, password: ''});
          setInput({...input, password: text});
        }}
      />
      <InputBox
        error={error.cPassword}
        value={input.cPassword}
        autoComplete="off"
        label="Confirm password"
        autoCapitalize="none"
        secureTextEntry
        maxLength={15}
        placeholder="Enter Confirm password"
        onChangeText={text => {
          setError({...error, cPassword: ''});
          setInput({...input, cPassword: text});
        }}
      />
      <InputBox
        error={error.referralCode}
        value={input.referralCode}
        autoComplete="off"
        label="Referral code"
        autoCapitalize="none"
        placeholder="Enter Referral code"
        onChangeText={text => {
          setError({...error, referralCode: ''});
          setInput({...input, referralCode: text});
        }}
      />
      <Policy
        error={policyError}
        active={policy}
        onChange={() => {
          setPolicy(!policy);
          setPolicyError('');
        }}
      />
      <ButtonPrimary
        loading={loader}
        label="SIGN UP"
        marginVertical="l"
        onPress={onSubmit}
      />
    </TouchableBox>
  );
};
