/* eslint-disable react-hooks/exhaustive-deps */
import {Box} from '@utils/Theme';
import React, {useEffect, useState} from 'react';
import {Header, Input, Keyboard} from '../components';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useDispatch, useSelector} from 'react-redux';
import {
  getBiometricStatus,
  getBiometricType,
  getMpin,
} from '@store/selector/auth-selector';
import {BIOMETRICS} from '@typings/AuthState';
import {updateAlert} from '@store/action/app-action';
import {mpinLoginAction} from '@store/action/auth-action';

export default () => {
  const mPin = useSelector(getMpin);
  const biometric = useSelector(getBiometricType);
  const biometricEnabled = useSelector(getBiometricStatus);
  const [inputs, setInputs] = useState<string[]>([]);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      if (biometric !== BIOMETRICS.NONE && biometricEnabled) {
        let epochTimeSeconds = Math.round(
          new Date().getTime() / 1000,
        ).toString();
        let payload = epochTimeSeconds + 'Sign in';

        ReactNativeBiometrics.createSignature({
          promptMessage: 'Log in',
          payload: payload,
        }).then(resultObject => {
          const {success, signature} = resultObject;
          if (success) {
            mPin && dispatch(mpinLoginAction(mPin, () => setInputs([])));
            console.log(signature);
          }
        });
      }
    })();
  }, [biometric, biometricEnabled]);
  useEffect(() => {
    if (inputs.length >= 4) {
      if (mPin === inputs.join('')) {
        dispatch(mpinLoginAction(inputs.join(''), () => setInputs([])));
      } else {
        setInputs([]);
        dispatch(
          updateAlert({
            success: false,
            message: 'Incorrect password',
          }),
        );
      }
    }
  }, [inputs]);

  return (
    <Box flex={1} backgroundColor="blue2">
      <Header label="Enter Passcode" />
      <Input inputs={inputs} label="Enter passcode" />
      <Keyboard
        forgot
        onTyp={number => {
          if (inputs.length < 4) {
            setInputs([...inputs, number]);
          }
        }}
        onBack={() => setInputs(inputs.splice(1, inputs.length))}
      />
    </Box>
  );
};
