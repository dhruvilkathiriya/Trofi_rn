import HeaderIcon from '@components/HeaderIcon';
import HeaderLeftIcon from '@components/HeaderLeftIcon';
import HeaderTitle from '@components/HeaderTitle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Contact,
  Deposit,
  Help,
  Kyc,
  MyReferrel,
  PreviewExchange,
  Profile,
  Terms,
  UpdatePassword,
  WalletDetails,
  Withdraw,
  AccountSecurity,
} from '@screens/App';
import {getToken, getUserData} from '@store/selector/auth-selector';
import {AppStackParamList} from '@typings/Navigation';
import React from 'react';
import {useSelector} from 'react-redux';
import {ROUTE, TabNavigator} from '.';
import MPinNavigator from './MPinNavigator';

const HomeStack = createNativeStackNavigator<AppStackParamList>();

export default () => {
  const token = useSelector(getToken);
  const userData = useSelector(getUserData);
  return (
    <HomeStack.Navigator>
      {!token?.appToken ? (
        <HomeStack.Screen
          options={{headerShown: false}}
          name={ROUTE.MPIN}
          component={MPinNavigator}
        />
      ) : userData?.kycStatus ? (
        <>
          <HomeStack.Screen
            options={{headerShown: false}}
            name={ROUTE.HOME}
            component={TabNavigator}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.UPDATEPWD}
            component={UpdatePassword}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.MYREFFEREL}
            component={MyReferrel}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.PROFILE}
            component={Profile}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.HELP}
            component={Help}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.CONTACT}
            component={Contact}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.TERMS}
            component={Terms}
          />
          <HomeStack.Screen
            options={{
              headerShown: false,
              // headerBackVisible: false,
              // headerTitleAlign: 'center',
              // headerTitle: () => <HeaderTitle />,
              // headerRight: () => <HeaderIcon />,
              // headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.WALLETDETAILS}
            component={WalletDetails}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon type="history" />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.DEPOSIT}
            component={Deposit}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon type="history" />,
              headerLeft: () => <HeaderLeftIcon />,
            }}
            name={ROUTE.WITHDRAW}
            component={Withdraw}
          />
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle label="PREVIEW EXCHANGE" />,
            }}
            name={ROUTE.PREVIEWEXCHANGE}
            component={PreviewExchange}
          />
          <HomeStack.Screen
            options={{
              headerShown: false,
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle label="Account Security" />,
            }}
            name={ROUTE.ACCOUNTSECURITY}
            component={AccountSecurity}
          />
        </>
      ) : (
        <>
          <HomeStack.Screen
            options={{
              headerBackVisible: false,
              headerTitleAlign: 'center',
              headerTitle: () => <HeaderTitle />,
              headerRight: () => <HeaderIcon />,
              headerLeft: () => <HeaderLeftIcon kyc />,
            }}
            name={ROUTE.KYC}
            component={Kyc}
          />
        </>
      )}
    </HomeStack.Navigator>
  );
};
