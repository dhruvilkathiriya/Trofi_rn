import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {fontSize, hp, statusBarHeight, wp} from '@utils/metrics';

export default () => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goBack}>
        <Image
          source={require('@assets/images/back.png')}
          resizeMode={'contain'}
          style={styles.backIcon}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>{'ACCOUNT SECURITY'}</Text>
      <View style={styles.backIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    paddingTop: statusBarHeight + hp(1),
    paddingBottom: hp(1),
  },
  backIcon: {
    height: hp(3.5),
    width: hp(3.5),
  },
  titleText: {
    flex: 1,
    fontSize: fontSize(16),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
