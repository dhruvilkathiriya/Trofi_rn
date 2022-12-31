import ButtonPrimary from '@components/ButtonPrimary';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React, {useState} from 'react';
import InputBox from '@components/InputBox';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {LoginParamState} from '@typings/AuthState';
import validator from '@helpers/validator';
import {MAX_WIDTH} from '@helpers/Dimensions';

const inputs = {
  username: '',
  password: '',
};

interface loginBoxProps {
  loader?: boolean;
  onLogin: (input: LoginParamState) => void;
}

export default ({loader, onLogin}: loginBoxProps) => {
  const [error, setError] = useState<LoginParamState>(inputs);
  const [input, setInput] = useState<LoginParamState>(inputs);

  return (
    <Box
      width="100%"
      marginVertical="l"
      maxWidth={MAX_WIDTH}
      padding="xxxl"
      paddingTop="x4l"
      borderRadius="xxl"
      backgroundColor="secondary">
      <Text variant="title1" marginBottom="l">
        Login
      </Text>
      <InputBox
        error={error?.username}
        value={input.username}
        icon="avatar"
        label="Email"
        maxLength={30}
        autoCapitalize="none"
        keyboardType="email-address"
        placeholder="Email address"
        autoComplete="off"
        onChangeText={text => {
          setError({...error, username: ''});
          setInput({...input, username: text});
        }}
      />
      <InputBox
        error={error?.password}
        value={input.password}
        icon="password"
        label="Password"
        autoCapitalize="none"
        autoComplete="off"
        placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
        maxLength={15}
        secureTextEntry
        onChangeText={text => {
          setInput({...input, password: text});
        }}
      />
      <ButtonPrimary
        loading={loader}
        label="LOGIN"
        marginVertical="l"
        onPress={() => {
          const validation = validator.loginValidation(input);
          setError(validation.errorMsg);
          if (!validation.status) {
            onLogin(input);
          }
        }}
      />
      <TouchableBox onPress={() => navigate(ROUTE.FORGOTPWD)}>
        <Text variant="label3" textAlign="center">
          Forgot password?
        </Text>
      </TouchableBox>
    </Box>
  );
};
