import React from 'react';
import {Text, ImageBackground, StyleSheet} from 'react-native';
import {fontSize, hp, statusBarHeight} from '@utils/metrics';

export default () => (
  <ImageBackground source={require('@assets/images/headerBg.png')}>
    <Text style={styles.myProfileText}>{'My Profile'}</Text>
  </ImageBackground>
);

const styles = StyleSheet.create({
  myProfileText: {
    fontSize: fontSize(20),
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: statusBarHeight + hp(2),
    paddingBottom: hp(12),
  },
});
