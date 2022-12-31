import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Box, GradiantBox, Text, TouchableBox} from '@utils/Theme';
import {fontSize, wp} from '@utils/metrics';
import {updateUserProfile} from '@store/action/auth-action';
import {getUserData} from '@store/selector/auth-selector';
import {UserdataState} from '@typings/AuthState';

interface HideBalanceSwitch {
  value: boolean;
  onValueChange: (val: boolean) => void;
}

export default ({value, onValueChange}: HideBalanceSwitch) => {
  const [currentValue, setCurrentValue] = useState<boolean>(value);
  const userData: UserdataState | null = useSelector(getUserData);
  const dispatch = useDispatch();

  const onSwitchPress = () => {
    if (userData) {
      const newUserData = {
        ...userData,
        hideZeroBalance: !currentValue,
      };
      dispatch(
        updateUserProfile(newUserData, res => {
          if (res) {
            onValueChange(!currentValue);
            setCurrentValue(!currentValue);
          }
        }),
      );
    }
  };

  const activeBtnColor = ['#6576FF', '#1830B5'];
  const inactiveBtnColor = ['#AAA', '#BBBBBC'];

  return (
    <Box flexDirection={'row'} alignItems={'center'}>
      <TouchableBox onPress={onSwitchPress} activeOpacity={1}>
        <Box
          width={wp(10)}
          height={wp(3)}
          backgroundColor={currentValue ? 'blue4' : 'textGray2'}
          opacity={0.12}
          borderRadius={'xxl'}
        />
        <GradiantBox
          colors={currentValue ? activeBtnColor : inactiveBtnColor}
          alignSelf={currentValue ? 'flex-end' : 'flex-start'}
          style={styles.switchThumb}
        />
      </TouchableBox>
      <Text style={styles.titleText} color={'textGray3'}>
        {'Hide 0 Balance'}
      </Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  switchThumb: {
    height: wp(4.7),
    width: wp(4.7),
    borderRadius: wp(4.7),
    position: 'absolute',
    top: -wp(0.85),
  },
  titleText: {
    fontSize: fontSize(15),
    fontWeight: '500',
    marginLeft: wp(1.85),
  },
});
