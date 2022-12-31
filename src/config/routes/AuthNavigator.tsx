import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChangePassword, ForgotPassword, Signin, Login} from '@screens/Auth';
import {AuthStackParamList} from '@typings/Navigation';
import React from 'react';
import {ROUTE} from '.';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export default () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name={ROUTE.LOGIN}
      options={{headerShown: false}}
      component={Login}
    />
    <AuthStack.Screen
      name={ROUTE.SIGNIN}
      options={{headerShown: false}}
      component={Signin}
    />
    <AuthStack.Screen
      name={ROUTE.FORGOTPWD}
      options={{headerShown: false}}
      component={ForgotPassword}
    />
    <AuthStack.Screen
      name={ROUTE.CHANGEPWD}
      options={{headerShown: false}}
      component={ChangePassword}
    />
  </AuthStack.Navigator>
);
