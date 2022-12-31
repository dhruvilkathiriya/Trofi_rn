/* eslint-disable react-hooks/exhaustive-deps */
import {ROUTE} from '@config/routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {updateAlert} from '@store/action/app-action';
import {enableBiometric, saveMPinAction} from '@store/action/auth-action';
import {getBiometricType} from '@store/selector/auth-selector';
import {BIOMETRICS} from '@typings/AuthState';
import {MPinStackParamList} from '@typings/Navigation';
import {Box} from '@utils/Theme';
import React, {useEffect, useState} from 'react';
import ReactNativeBiometrics from 'react-native-biometrics';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Header, Input, Keyboard} from '../components';

export default ({
  navigation,
  route,
}: NativeStackScreenProps<MPinStackParamList, ROUTE.CONFIRMCODE>) => {
  const biometric = useSelector(getBiometricType);
  const [inputs, setInputs] = useState<string[]>([]);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (inputs.length >= 4) {
      if (inputs.join('') === route.params.code) {
        if (biometric === BIOMETRICS.NONE) {
          dispatch(saveMPinAction(inputs.join('')));
        } else {
          setAlert(true);
        }
      } else {
        dispatch(
          updateAlert({
            success: false,
            message: 'Passcode confirmation doesn’t match',
          }),
        );
        navigation.goBack();
      }
    }
  }, [inputs]);

  const createKey = async () => {
    await ReactNativeBiometrics.createKeys()
      .then(async resultObject => {
        const {publicKey} = resultObject;
        console.log(publicKey);
        let epochTimeSeconds = Math.round(
          new Date().getTime() / 1000,
        ).toString();
        let payload = epochTimeSeconds + 'some message';

        await ReactNativeBiometrics.createSignature({
          promptMessage: 'Sign in',
          payload: payload,
        }).then(signatureResult => {
          const {success, signature} = signatureResult;
          if (success) {
            dispatch(enableBiometric());
            console.log(signature);
          } else {
            dispatch(enableBiometric(false));
          }
        });
      })
      .catch(e => {
        dispatch(enableBiometric(false));
        console.log('[Create Key] Exception: ', e);
      });
  };

  return (
    <Box flex={1} backgroundColor="blue2">
      <Header label="Confirm new passcode" />
      <Input inputs={inputs} label="Confirm passcode" />
      <Keyboard
        onTyp={number => {
          if (inputs.length < 4) {
            setInputs([...inputs, number]);
          }
        }}
        onBack={() => setInputs(inputs.splice(1, inputs.length))}
      />
      <Alert
        visible={alert}
        label={biometric === BIOMETRICS.FACE ? 'Face Id' : 'Fingerprint'}
        onClose={() => {
          setAlert(false);
          dispatch(enableBiometric(false));
          dispatch(saveMPinAction(inputs.join('')));
        }}
        onAction={async () => {
          await createKey();
          setAlert(false);
          dispatch(saveMPinAction(inputs.join('')));
        }}
      />
    </Box>
  );
};
