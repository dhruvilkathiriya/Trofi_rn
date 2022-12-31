import ButtonPrimary from '@components/ButtonPrimary';
import InputBox from '@components/InputBox';
import validator from '@helpers/validator';
import {ChangeParamProps} from '@typings/AuthState';
import {Box, Text} from '@utils/Theme';
import React, {useState} from 'react';

const inputs = {
  otp: '',
  newPassword: '',
  cPassword: '',
};

interface changeBoxProps {
  onSubmit: (input: ChangeParamProps) => void;
}

export default ({onSubmit}: changeBoxProps) => {
  const [error, setError] = useState<ChangeParamProps>(inputs);
  const [input, setInput] = useState<ChangeParamProps>(inputs);

  return (
    <Box
      width="100%"
      margin="l"
      padding="xxxl"
      paddingVertical="x4l"
      borderRadius="xxl"
      backgroundColor="secondary">
      <Text variant="title1" marginBottom="l">
        Change Password
      </Text>
      <InputBox
        error={error.otp}
        value={input.otp}
        label="Code"
        placeholder="Enter the code"
        onChangeText={text => {
          setError({...error, otp: ''});
          setInput({...input, otp: text});
        }}
      />
      <InputBox
        error={error.newPassword}
        value={input.newPassword}
        secureTextEntry
        label="Create new password"
        placeholder="Create new password"
        onChangeText={text => {
          setError({...error, newPassword: ''});
          setInput({...input, newPassword: text});
        }}
      />
      <InputBox
        error={error.cPassword}
        value={input.cPassword}
        secureTextEntry
        label="Confirm your password"
        placeholder="Confirm your password"
        onChangeText={text => {
          setError({...error, cPassword: ''});
          setInput({...input, cPassword: text});
        }}
      />
      <ButtonPrimary
        label="CHANGE PASSWORD"
        marginVertical="l"
        onPress={() => {
          const validation = validator.changePwdValidation(input);
          setError(validation.errorMsg);
          if (!validation.status) {
            onSubmit(input);
          }
        }}
      />
    </Box>
  );
};
