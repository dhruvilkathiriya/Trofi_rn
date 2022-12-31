import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Box} from '@utils/Theme';
import {hp} from '@utils/metrics';
import {ROUTE} from '@config/routes';
import {navigate} from '@config/NavigationHelper';
import SecurityOptionItem from './components/SecurityOptionItem';
import AccountSecurityHeader from './components/AccountSecurityHeader';

type SecurityOption = {
  id: string;
  label: string;
  category?: string;
  rightIcon: boolean;
  iconName?: string;
  route?: ROUTE;
  icon?: any;
};

const securityOptions: SecurityOption[] = [
  {
    id: '1',
    label: 'Change Password',
    icon: require('@assets/images/password.png'),
    rightIcon: true,
    route: ROUTE.UPDATEPWD,
  },
  {
    id: '2',
    label: 'Google Authenticator',
    category:
      'We strongly recommend using Google Authenticator\nfor added security',
    iconName: 'googleAuthenticator',
    rightIcon: false,
  },
  {
    id: '3',
    label: 'Fingurprint/ Face ID',
    iconName: 'fingerPrint',
    rightIcon: false,
  },
];

export default () => {
  const onPressItem = (route: any) => route && navigate(route);

  const renderSecurityOptions = () =>
    securityOptions.map((item: SecurityOption) => (
      <SecurityOptionItem
        key={item.id}
        title={item.label}
        icon={item.icon}
        iconName={item.iconName}
        category={item.category}
        rightIcon={item.rightIcon}
        route={item.route}
        onPress={onPressItem}
      />
    ));

  return (
    <Box backgroundColor={'secondary'} style={styles.mainContainer}>
      <AccountSecurityHeader />
      <Box style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        {renderSecurityOptions()}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  divider: {
    borderWidth: 0.5,
    marginTop: hp(1.25),
    marginBottom: hp(2.5),
    borderColor: '#E4EBF6',
  },
});
