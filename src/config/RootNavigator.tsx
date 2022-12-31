import React, {useCallback, useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {InitialState, NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, Platform, StatusBar, Text} from 'react-native';
import {navigationRef} from './NavigationHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthNavigator, ROUTE} from './routes';
import HomeNavigator from './routes/HomeNavigator';
import {RootStackParamList} from '@typings/Navigation';
import {useSelector} from 'react-redux';
import {getToken} from '@store/selector/auth-selector';
import {getVersionStatus} from '@store/selector/app-selector';
import {AppVersion} from '@screens/App';
import {enableScreens} from 'react-native-screens';

enableScreens();
const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-${Platform.Version}`;
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Root = () => {
  const token = useSelector(getToken);
  const versionStatus = useSelector(getVersionStatus);
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY,
        );
        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);
  const onStateChange = useCallback(
    state => AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  );
  if (!isNavigationReady) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      {...{onStateChange, initialState}}
      fallback={<Text>Loading...</Text>}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <RootStack.Navigator>
        {versionStatus === 'UPDATED' || versionStatus === 'SKIP' ? (
          !token?.accessToken ? (
            <RootStack.Screen
              name={ROUTE.AUTH}
              options={{headerShown: false}}
              component={AuthNavigator}
            />
          ) : (
            <RootStack.Screen
              name={ROUTE.APP}
              options={{headerShown: false}}
              component={HomeNavigator}
            />
          )
        ) : (
          <RootStack.Screen
            name={ROUTE.APPVERSION}
            options={{headerShown: false}}
            component={AppVersion}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
