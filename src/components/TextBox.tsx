import validator from '@helpers/validator';
import {SendIconTypes} from '@typings/AuthState';
import {IconTypes} from '@typings/IconTypes';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TextInput, TouchableBox, useTheme} from '@utils/Theme';
import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, TextInputProps} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import PasswordHint from './PasswordHint';

interface textboxProps extends TextInputProps {
  sendIcon?: IconTypes | SendIconTypes;
  height: number;
  width: number;
  icon?: IconTypes;
  onSend?: () => void;
}

export default ({
  height,
  width,
  icon,
  onSend,
  sendIcon,
  onChangeText,
  ...props
}: textboxProps) => {
  const {colors, borderRadii, spacing} = useTheme();
  const [passwordInvalid, setPasswordInvalid] = useState(false);
  const password =
    props.placeholder === 'Enter Password' ||
    props.placeholder === 'Create new password';
  return (
    <Shadow
      inner
      style={{
        ...styles.container,
        height,
        width,
        shadowColor: colors.gray2,
        borderRadius: borderRadii.l,
        paddingHorizontal: icon ? spacing.l : undefined,
        backgroundColor: colors.gray1,
      }}>
      {icon && <IconBold name={icon} size={14} color="primary" />}
      <TextInput
        {...props}
        variant="input1"
        marginLeft="m"
        paddingHorizontal="s"
        placeholderTextColor={colors.placeholder}
        onChangeText={text => {
          onChangeText && onChangeText(text);
          if (password && text.length) {
            setPasswordInvalid(validator.passwordValidation(text));
          } else {
            setPasswordInvalid(false);
          }
        }}
        onBlur={() => setPasswordInvalid(false)}
        style={styles.input}
      />
      {onSend && sendIcon && (
        <TouchableBox
          right={3}
          width={37}
          height={37}
          position="absolute"
          alignSelf="center"
          backgroundColor="secondary"
          borderRadius="l"
          alignItems="center"
          justifyContent="center"
          disabled={sendIcon !== 'withdrawActive'}
          onPress={onSend}>
          {sendIcon === 'withdrawActive' ? (
            <IconBold name="withdrawActive" size={26} />
          ) : sendIcon === 'tickCircle' ? (
            <IconBold name="tickCircle" size={30} />
          ) : sendIcon === 'Loading' ? (
            <ActivityIndicator color={colors.primary} size="small" />
          ) : (
            <Text variant="label1">{`${sendIcon}`}</Text>
          )}
        </TouchableBox>
      )}
      {password && passwordInvalid && (
        <Box position="absolute" top={-height - height / 2.3}>
          <PasswordHint height={height + height} width={width} />
          <Box
            style={StyleSheet.absoluteFillObject}
            paddingVertical="m"
            paddingHorizontal="s">
            <Text variant="content4" marginVertical="s">
              Length must be greater than 8 characters, Password must contain
              number, lowercase letter, uppercase letter, at least one symbol
            </Text>
          </Box>
        </Box>
      )}
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 400,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    flex: 1,
    textAlignVertical: 'center',
    paddingTop: 0,
    paddingBottom: 0,
  },
});
