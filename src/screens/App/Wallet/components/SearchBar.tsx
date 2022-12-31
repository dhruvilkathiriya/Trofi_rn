import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, TextInput} from '@utils/Theme';
import {fontSize, wp} from '@utils/metrics';
import {IconCustom} from '@utils/iconRegular';

interface SearchBarProps {
  onChangeText: (text: string) => void;
}

export default ({onChangeText}: SearchBarProps) => {
  return (
    <Box
      flexDirection={'row'}
      alignItems={'center'}
      backgroundColor={'gray4'}
      style={styles.container}>
      <IconCustom name="search" size={22} viewBox={'0 0 20 20'} />
      <TextInput
        placeholder="Search"
        style={styles.input}
        color={'textGray3'}
        onChangeText={onChangeText}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingVertical: wp(1.5),
    width: wp(38),
    borderRadius: wp(10),
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: fontSize(16),
    marginLeft: wp(1),
    paddingVertical: 0,
  },
});
