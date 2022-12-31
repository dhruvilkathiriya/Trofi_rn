import ButtonPrimary from '@components/ButtonPrimary';
import TextBox from '@components/TextBox';
import {MAX_WIDTH, WIDTH} from '@helpers/Dimensions';
import validator from '@helpers/validator';
import {Box, Text, useTheme} from '@utils/Theme';
import React, {useState} from 'react';

interface forgotBoxProps {
  loader: boolean;
  onSubmit: (email: string) => void;
}

export default ({loader, onSubmit}: forgotBoxProps) => {
  const {spacing} = useTheme();
  const [error, setError] = useState({email: ''});
  const [input, setInput] = useState({email: ''});
  const padding = spacing.xl * 2 + spacing.xxxl * 2;
  const width = WIDTH - padding;

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
        Forgot Password
      </Text>
      <TextBox
        value={input.email}
        height={44}
        autoCapitalize="none"
        keyboardType="email-address"
        width={
          width >= MAX_WIDTH - padding ? MAX_WIDTH - spacing.xxxl * 2 : width
        }
        placeholder="Enter email address"
        onChangeText={text => {
          setError({email: ''});
          setInput({email: text});
        }}
      />
      <Text variant="input1" color="red" marginLeft="s" marginTop="-">
        {error.email}
      </Text>
      <ButtonPrimary
        loading={loader}
        label="SUBMIT"
        marginVertical="m"
        onPress={() => {
          const validation = validator.forgotValidation(input);
          setError(validation.errorMsg);
          if (!validation.status) {
            onSubmit(input.email);
          }
        }}
      />
    </Box>
  );
};
