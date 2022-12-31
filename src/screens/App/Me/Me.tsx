import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '@utils/Theme';
import {useDispatch} from 'react-redux';
import {navigate} from '@config/NavigationHelper';
import {updateLogoutPrompt} from '@store/action/app-action';
import {hp} from '@utils/metrics';
import {ROUTE} from '@config/routes';
import ProfileHeader from './components/ProfileHeader';
import OptionItem from './components/OptionItem';
import LogoutButton from './components/LogoutButton';
import ReferralButton from './components/ReferralButton';

type OptionItem = {
  id: string;
  label: string;
  iconName: string;
  route: ROUTE;
};

const options: OptionItem[] = [
  {
    id: '1',
    label: 'Edit Profile',
    iconName: 'editProfile',
    route: ROUTE.PROFILE,
  },
  {
    id: '2',
    label: 'Change Password',
    iconName: 'changePassword',
    route: ROUTE.ACCOUNTSECURITY,
  },
  {
    id: '3',
    label: 'Help Center',
    iconName: 'helpCenter',
    route: ROUTE.HELP,
  },
  {
    id: '4',
    label: 'Contact Us',
    iconName: 'contactUs',
    route: ROUTE.CONTACT,
  },
  {
    id: '5',
    label: 'Terms of Service',
    iconName: 'termsOfService',
    route: ROUTE.TERMS,
  },
];

export default () => {
  const dispatch = useDispatch();

  const onReferralPress = () => navigate(ROUTE.MYREFFEREL);

  const onLogoutPress = () => dispatch(updateLogoutPrompt(true));

  const onPressItem = (route: ROUTE) => navigate(route);

  const renderOptions = () =>
    options.map((item: OptionItem) => (
      <OptionItem
        key={item.id}
        title={item.label}
        route={item.route}
        iconName={item.iconName}
        onPress={onPressItem}
      />
    ));

  return (
    <Box backgroundColor={'secondary'} style={styles.container}>
      <Box style={styles.container}>
        <ProfileHeader />
        <ReferralButton onPress={onReferralPress} />
        <Box style={styles.optionsContainer}>{renderOptions()}</Box>
      </Box>
      <LogoutButton onPress={onLogoutPress} />
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  optionsContainer: {
    marginBottom: hp(4),
    marginTop: hp(1),
  },
});
