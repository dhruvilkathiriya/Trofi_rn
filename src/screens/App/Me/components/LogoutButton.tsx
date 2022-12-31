import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableBox, Text} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';

interface LogoutButtonProps {
  onPress: () => void;
}

export default ({onPress}: LogoutButtonProps) => (
  <TouchableBox
    backgroundColor={'skyBlue5'}
    alignSelf={'center'}
    style={styles.container}
    onPress={onPress}>
    <Text color={'textBlue'} textAlign={'center'} style={styles.titleText}>
      {'Logout'}
    </Text>
  </TouchableBox>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(30),
    paddingVertical: hp(1.25),
    marginBottom: hp(5),
  },
  titleText: {
    fontSize: fontSize(16),
  },
});
