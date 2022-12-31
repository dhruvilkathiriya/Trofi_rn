import BottomTab from '@components/BottomTab';
import HeaderIcon from '@components/HeaderIcon';
import HeaderTitle from '@components/HeaderTitle';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Earn, Me, Swap, Wallet} from '@screens/App';
import {HomeStackParamList} from '@typings/Navigation';
import {Box} from '@utils/Theme';
import React from 'react';
import {StatusBar} from 'react-native';
import {ROUTE} from '.';
import TrofiNavigator from './TrofiNavigator';

const HomeTab = createBottomTabNavigator<HomeStackParamList>();

export default () => (
  <Box flex={1} backgroundColor="secondary">
    <StatusBar animated barStyle="dark-content" translucent />
    <HomeTab.Navigator tabBar={state => <BottomTab {...state} />}>
      <HomeTab.Screen
        options={{
          headerShown: false,
          // headerTitleAlign: 'center',
          // headerTitle: () => <HeaderTitle />,
          // headerRight: () => <HeaderIcon />,
          // headerRightContainerStyle: {paddingRight: 20},
        }}
        name={ROUTE.WALLET}
        component={Wallet}
      />
      <HomeTab.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderIcon />,
          headerRightContainerStyle: {paddingRight: 20},
        }}
        name={ROUTE.EARN}
        component={Earn}
      />
      <HomeTab.Screen
        name={ROUTE.TROFI}
        options={{headerShown: false}}
        component={TrofiNavigator}
      />
      <HomeTab.Screen
        options={{
          headerTitleAlign: 'center',
          headerTitle: () => <HeaderTitle />,
          headerRight: () => <HeaderIcon type="history" />,
          headerRightContainerStyle: {paddingRight: 20},
        }}
        name={ROUTE.SWAP}
        component={Swap}
      />
      <HomeTab.Screen
        options={{
          headerShown: false,
          // headerTitleAlign: 'center',
          // headerTitle: () => <HeaderTitle />,
          // headerRight: () => <HeaderIcon type="history" />,
          // headerRightContainerStyle: {paddingRight: 20},
        }}
        name={ROUTE.ME}
        component={Me}
      />
    </HomeTab.Navigator>
  </Box>
);
