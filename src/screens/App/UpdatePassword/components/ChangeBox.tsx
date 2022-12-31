import ButtonPrimary from '@components/ButtonPrimary';
import InputBox from '@components/InputBox';
import {MAX_WIDTH} from '@helpers/Dimensions';
import validator from '@helpers/validator';
import {UpdateParamProps} from '@typings/AuthState';
import {Box, Text} from '@utils/Theme';
import React, {useState} from 'react';

const inputs = {
  oldPassword: '',
  newPassword: '',
  cPassword: '',
};

interface changeBoxProps {
  onSubmit: (input: UpdateParamProps) => void;
}

export default ({onSubmit}: changeBoxProps) => {
  const [error, setError] = useState<UpdateParamProps>(inputs);
  const [input, setInput] = useState<UpdateParamProps>(inputs);

  return (
    <Box
      width="100%"
      maxWidth={MAX_WIDTH}
      margin="l"
      padding="xxxl"
      paddingVertical="x4l"
      borderRadius="xxl"
      backgroundColor="secondary">
      <Text variant="title1" marginBottom="l">
        Change Password
      </Text>
      <InputBox
        error={error.oldPassword}
        value={input.oldPassword}
        secureTextEntry
        label="Old Password"
        placeholder="Enter old password"
        onChangeText={text => {
          setError({...error, oldPassword: ''});
          setInput({...input, oldPassword: text});
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
          const validation = validator.updatePwdValidation(input);
          setError(validation.errorMsg);
          if (!validation.status) {
            onSubmit(input);
          }
        }}
      />
    </Box>
  );
};
