import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fontSize, hp, wp} from '@utils/metrics';

interface ReferralButtonProps {
  onPress: () => void;
}

export default ({onPress}: ReferralButtonProps) => (
  <TouchableOpacity
    style={styles.container}
    activeOpacity={0.7}
    onPress={onPress}>
    <Image
      source={require('@assets/images/referFriend.png')}
      resizeMode={'contain'}
      style={styles.referFriendIcon}
    />
    <View style={styles.referInfoContainer}>
      <Text style={styles.infoTitleText}>{'Refer a Friend'}</Text>
      <Text style={styles.infoDescText}>{'Refer & Earn $10 in BTC'}</Text>
    </View>
    <Image
      source={require('@assets/images/right.png')}
      resizeMode={'contain'}
      style={styles.arrowIcon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    marginVertical: hp(1.25),
    shadowColor: 'grey',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: hp(1.75),
    paddingHorizontal: wp(5),
  },
  referFriendIcon: {
    height: hp(6),
    width: hp(6),
  },
  referInfoContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  infoTitleText: {
    fontSize: fontSize(16),
    color: 'black',
  },
  infoDescText: {
    fontSize: fontSize(12),
    color: 'grey',
    paddingTop: wp(1),
  },
  arrowIcon: {
    height: wp(3.25),
    width: wp(3.25),
  },
});
