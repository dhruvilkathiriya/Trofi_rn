import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const wp = (val: number) => widthPercentageToDP(val);

export const hp = (val: number) => heightPercentageToDP(val);

export const fontSize = (size: number) => RFValue(size, 926);

export const statusBarHeight: number = getStatusBarHeight();
