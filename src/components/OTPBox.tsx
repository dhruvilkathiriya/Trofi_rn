import {Text, useTheme} from '@utils/Theme';
import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';

interface textboxProps extends TextInputProps {
  height: number;
  width: number;
  children?: string | Element | null;
}

export default ({height, width, children, ...props}: textboxProps) => {
  const {colors, borderRadii, spacing} = useTheme();
  return (
    <Shadow
      inner
      style={{
        ...styles.container,
        height,
        width,
        shadowColor: colors.gray2,
        borderRadius: borderRadii.l,
        paddingHorizontal: spacing.l,
        backgroundColor: colors.gray1,
      }}>
      <Text {...props} textAlign="center" variant="input1" style={styles.input}>
        {children}
      </Text>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.7,
    shadowRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  input: {
    flex: 1,
  },
});
