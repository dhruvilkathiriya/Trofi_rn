import {MAX_WIDTH, WIDTH} from '@helpers/Dimensions';
import {SendIconTypes} from '@typings/AuthState';
import {IconTypes} from '@typings/IconTypes';
import {Text, useTheme} from '@utils/Theme';
import React from 'react';
import {TextInputProps} from 'react-native';
import TextBox from './TextBox';

interface inputBoxProps extends TextInputProps {
  sendIcon?: IconTypes | SendIconTypes;
  error?: string;
  icon?: IconTypes;
  label: string;
  onSend?: () => void;
}

export default ({error, label, ...props}: inputBoxProps) => {
  const {spacing} = useTheme();
  const padding = spacing.xl * 2 + spacing.xxxl * 2;
  const width = WIDTH - padding;

  return (
    <>
      <Text variant="label1" marginBottom="s">
        {label}
      </Text>
      <TextBox
        height={44}
        width={
          width >= MAX_WIDTH - padding ? MAX_WIDTH - spacing.xxxl * 2 : width
        }
        {...props}
      />
      <Text variant="input1" color="red" marginLeft="s" marginTop="-">
        {error}
      </Text>
    </>
  );
};
