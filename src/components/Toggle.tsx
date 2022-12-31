import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {setMeToggle, updateLogoutPrompt} from '@store/action/app-action';
import {getMeToggle} from '@store/selector/app-selector';
import {getUserData} from '@store/selector/auth-selector';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const elements = ['My Referral', 'Change password', 'Logout'];

export default () => {
  const userData = useSelector(getUserData);
  const toggle = useSelector(getMeToggle);
  const dispatch = useDispatch();
  return toggle ? (
    <Box
      position="absolute"
      bottom={userData?.kycStatus ? 0 : undefined}
      top={userData?.kycStatus ? undefined : 0}
      right={5}>
      <IconBold
        name={userData?.kycStatus ? 'toggleBottom' : 'toggleTop'}
        height={130}
        width={130}
      />
      <Box
        style={StyleSheet.absoluteFillObject}
        paddingTop={userData?.kycStatus ? undefined : 'xl'}
        paddingBottom={userData?.kycStatus ? 'xl' : undefined}
        padding="m"
        justifyContent="space-between">
        {userData?.kycStatus ? (
          <>
            {elements.map(element => (
              <TouchableBox
                key={element}
                borderBottomWidth={element !== 'Logout' ? 1 : 0}
                borderColor="gray1"
                padding="s"
                onPress={() => {
                  element === 'Logout' && dispatch(updateLogoutPrompt(true));
                  element === 'Change password' && navigate(ROUTE.UPDATEPWD);
                  element === 'My Referral' && navigate(ROUTE.MYREFFEREL);
                  dispatch(setMeToggle(false));
                }}>
                <Text variant="label1">{element}</Text>
              </TouchableBox>
            ))}
          </>
        ) : (
          <TouchableBox
            borderBottomWidth={0}
            borderColor="gray1"
            padding="s"
            onPress={() => {
              dispatch(updateLogoutPrompt(true));
              dispatch(setMeToggle(false));
            }}>
            <Text variant="label1">Logout</Text>
          </TouchableBox>
        )}
      </Box>
    </Box>
  ) : null;
};
