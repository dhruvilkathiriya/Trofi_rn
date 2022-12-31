import {setToggle, updateLogoutPrompt} from '@store/action/app-action';
import {getUserData} from '@store/selector/auth-selector';
import {IconBold} from '@utils/iconRegular';
import {TouchableBox} from '@utils/Theme';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

interface headerIconProps {
  type?: 'history';
}

export default ({type}: headerIconProps) => {
  const userData = useSelector(getUserData);
  const dispatch = useDispatch();
  return type === 'history' ? null : (
    <TouchableBox
      height={36}
      width={36}
      backgroundColor="white1"
      borderRadius="xl"
      alignItems="center"
      justifyContent="center"
      marginBottom="l"
      onPress={() => {
        if (type && type === 'history') {
        } else if (userData?.kycStatus) {
          dispatch(setToggle());
          setTimeout(() => dispatch(setToggle()), 1000);
        } else {
          dispatch(updateLogoutPrompt(true));
        }
      }}>
      <IconBold
        name={
          type === 'history'
            ? 'boxClock'
            : userData?.kycStatus
            ? 'headphone'
            : 'logout'
        }
        size={type === 'history' ? 15 : userData?.kycStatus ? 36 : 15}
        color="gray2"
      />
    </TouchableBox>
  );
};
