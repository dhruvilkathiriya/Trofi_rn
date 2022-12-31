import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableBox} from '@utils/Theme';
import {fontSize, hp, wp} from '@utils/metrics';
import {IconCustom} from '@utils/iconRegular';
import {IconTypes} from '@typings/IconTypes';

interface WalletActionButtonProps {
  iconName: IconTypes;
  title: string;
  onPress: () => void;
}

export default ({iconName, title, onPress}: WalletActionButtonProps) => {
  return (
    <TouchableBox
      backgroundColor={'secondary'}
      onPress={onPress}
      style={styles.container}>
      <IconCustom name={iconName} size={hp(4)} viewBox={'0 0 38 38'} />
      <Text style={styles.titleText} color={'textPrimary'}>
        {title}
      </Text>
    </TouchableBox>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(3),
    width: wp(33),
    padding: wp(1.5),
    borderRadius: wp(2.1),
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.2,
  },
  titleText: {
    fontSize: fontSize(16),
    fontWeight: '600',
    marginLeft: wp(2.35),
  },
});
