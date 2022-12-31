import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, Text, TouchableBox} from '@utils/Theme';
import {fontSize, hp} from '@utils/metrics';

interface WalletDetailActionButtonProps {
  title: string;
  onPress: () => void;
}

export default ({title, onPress}: WalletDetailActionButtonProps) => {
  return (
    <TouchableBox alignItems={'center'} onPress={onPress}>
      <Box backgroundColor={'blue5'} style={styles.iconContainer}></Box>
      <Text style={styles.titleText}>{title}</Text>
    </TouchableBox>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: hp(6.25),
    width: hp(6.25),
    borderRadius: hp(6.25),
  },
  titleText: {
    fontSize: fontSize(17),
    marginTop: hp(1.1),
  },
});
