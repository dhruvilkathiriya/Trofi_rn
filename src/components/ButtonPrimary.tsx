import {Text, Theme, TouchableBox} from '@utils/Theme';
import React from 'react';
import {ActivityIndicator} from 'react-native';

interface buttonProps {
  secondary?: boolean;
  loading?: boolean;
  label: string;
  onPress: () => void;
  marginVertical?: keyof Theme['spacing'];
}

export default ({
  loading,
  secondary,
  label,
  marginVertical,
  onPress,
}: buttonProps) => (
  <TouchableBox
    height={44}
    width="100%"
    borderRadius="l"
    alignItems="center"
    justifyContent="center"
    backgroundColor={secondary ? 'gray1' : 'primary'}
    disabled={loading}
    {...{onPress, marginVertical}}>
    {loading ? (
      <ActivityIndicator color={secondary ? 'black' : 'white'} size="small" />
    ) : (
      <Text
        variant="button1"
        color={secondary ? 'textPrimary' : 'textSecondary'}>
        {label}
      </Text>
    )}
  </TouchableBox>
);
