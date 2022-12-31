import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Switch,
  Platform,
} from 'react-native';
import {fontSize, hp, wp} from '@utils/metrics';
import {ROUTE} from '@config/routes';
import SvgIcon from '@utils/SvgIcon';

interface SecurityOptionItemProps {
  title: string;
  icon?: any;
  iconName?: string;
  category?: string;
  rightIcon: boolean;
  route?: ROUTE;
  onPress: (route: ROUTE) => void;
}

export default ({
  title,
  category,
  icon,
  onPress,
  rightIcon,
  route,
  iconName,
}: SecurityOptionItemProps) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onChangeSwitch = (value: boolean) => setIsSwitchOn(value);

  const onItemPress = () => route && onPress(route);

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={!rightIcon}
      onPress={onItemPress}>
      {iconName ? (
        <SvgIcon name={iconName} width={40} height={40} viewBox={`0 0 42 42`} />
      ) : (
        <Image source={icon} style={styles.optionIcon} resizeMode={'contain'} />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitleText}>{title}</Text>
        {category ? <Text style={styles.infoDescText}>{category}</Text> : null}
      </View>
      {rightIcon ? (
        <Image
          source={require('@assets/images/rightSquare.png')}
          resizeMode={'contain'}
          style={styles.arrowIcon}
        />
      ) : (
        <Switch
          trackColor={{false: '#E4EBF6', true: '#E4EBF6'}}
          thumbColor={true ? '#6576FF' : '#6576FF'}
          ios_backgroundColor={'#E4EBF6'}
          onValueChange={onChangeSwitch}
          value={isSwitchOn}
          style={Platform.OS === 'ios' && styles.switch}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    marginHorizontal: wp(5),
    paddingHorizontal: wp(5),
    paddingVertical: hp(1.25),
    marginBottom: hp(1.5),
    borderRadius: wp(2.67),
    borderColor: '#E4EBF6',
  },
  optionIcon: {
    height: 40,
    width: 40,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: wp(4),
  },
  infoTitleText: {
    fontSize: fontSize(16),
    color: 'black',
  },
  infoDescText: {
    fontSize: fontSize(12),
    marginTop: hp(0.75),
    color: 'grey',
  },
  arrowIcon: {
    height: hp(4),
    width: hp(4),
  },
  switch: {
    transform: [{scaleX: 0.8}, {scaleY: 0.8}],
  },
});
