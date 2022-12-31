import {useNavigation} from '@react-navigation/native';
import {updateKyc} from '@store/action/auth-action';
import {IconBold} from '@utils/iconRegular';
import {TouchableBox} from '@utils/Theme';
import React from 'react';
import {useDispatch} from 'react-redux';

interface headerLeftIconProps {
  kyc?: boolean;
}

export default ({kyc}: headerLeftIconProps) => {
  const {goBack} = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableBox onPress={() => (kyc ? dispatch(updateKyc(true)) : goBack())}>
      <IconBold name="back" size={26} color="gray2" />
    </TouchableBox>
  );
};
