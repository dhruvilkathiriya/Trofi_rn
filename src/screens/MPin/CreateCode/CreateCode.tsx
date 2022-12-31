import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {useIsFocused} from '@react-navigation/native';
import {Box} from '@utils/Theme';
import React, {useEffect, useState} from 'react';
import {Header, Input, Keyboard} from '../components';

export default () => {
  const isFocused = useIsFocused();
  const [inputs, setInputs] = useState<string[]>([]);
  useEffect(() => {
    if (inputs.length >= 4) {
      navigate(ROUTE.CONFIRMCODE, {code: inputs.join('')});
    }
  }, [inputs]);

  useEffect(() => {
    if (isFocused) {
      setInputs([]);
    }
  }, [isFocused]);

  return (
    <Box flex={1} backgroundColor="blue2">
      <Header label="Set a new passcode" />
      <Input inputs={inputs} label="Enter a new passcode" />
      <Keyboard
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
