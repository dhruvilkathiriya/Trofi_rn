/* eslint-disable react-hooks/exhaustive-deps */
import Alert from '@components/Alert';
import Loader from '@components/Loader';
import Logout from '@components/Logout';
import Root from '@config/RootNavigator';
import {checkVersionState} from '@store/action/app-action';
import {
  checkBiomericAction,
  checkIfTempTokenPresent,
} from '@store/action/auth-action';
import ThemeProvider from '@utils/Theme';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch} from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(checkVersionState());
      dispatch(checkIfTempTokenPresent());
      dispatch(checkBiomericAction());
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <ThemeProvider>
      <Root />
      <Loader />
      <Alert />
      <Logout />
    </ThemeProvider>
  );
};

export default App;
