import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {fontSize, hp, wp} from '@utils/metrics';
import {ROUTE} from '@config/routes';
import SvgIcon from '@utils/SvgIcon';

interface OptionItemProps {
  title: string;
  iconName: string;
  route: ROUTE;
  onPress: (route: ROUTE) => void;
}

export default ({title, onPress, route, iconName}: OptionItemProps) => {
  const onItemPress = () => onPress(route);

  return (
    <>
      <TouchableOpacity onPress={onItemPress} style={styles.container}>
        <SvgIcon name={iconName} width={36} height={36} viewBox={`0 0 42 42`} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Image
          source={require('@assets/images/right.png')}
          resizeMode={'contain'}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <View style={styles.divider} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp(8),
  },
  titleContainer: {
    flex: 1,
    marginHorizontal: wp(4.5),
  },
  titleText: {
    fontSize: fontSize(16),
    color: 'black',
  },
  arrowIcon: {
    height: wp(3.25),
    width: wp(3.25),
  },
  divider: {
    borderWidth: 0.5,
    marginVertical: hp(1.1),
    borderColor: '#E4EBF6',
  },
});
