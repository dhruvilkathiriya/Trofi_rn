import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ConfirmCode, CreateCode, EnterCode} from '@screens/MPin';
import {getMpin} from '@store/selector/auth-selector';
import {MPinStackParamList} from '@typings/Navigation';
import React from 'react';
import {useSelector} from 'react-redux';
import {ROUTE} from '.';

const MPinStack = createNativeStackNavigator<MPinStackParamList>();

export default () => {
  const mPin = useSelector(getMpin);
  console.log({mPin});

  return (
    <MPinStack.Navigator>
      {mPin ? (
        <MPinStack.Screen
          options={{headerShown: false}}
          name={ROUTE.ENTERCODE}
          component={EnterCode}
        />
      ) : (
        <>
          <MPinStack.Screen
            options={{headerShown: false}}
            name={ROUTE.CREATECODE}
            component={CreateCode}
          />
          <MPinStack.Screen
            options={{headerShown: false}}
            name={ROUTE.CONFIRMCODE}
            component={ConfirmCode}
          />
        </>
      )}
    </MPinStack.Navigator>
  );
};
