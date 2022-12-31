/* eslint-disable react-hooks/exhaustive-deps */
import {checkTokenAction} from '@store/action/auth-action';
import {getAppLoading} from '@store/selector/app-selector';
import {getToken} from '@store/selector/auth-selector';
import {Box, useTheme} from '@utils/Theme';
import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, AppState, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export default React.memo(() => {
  const {colors} = useTheme();
  const authToken = useSelector(getToken);
  const loader = useSelector(getAppLoading);
  const appState = useRef(AppState.currentState);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        dispatch(checkTokenAction(authToken?.tempToken));
      }
      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return loader ? (
    <Box
      style={StyleSheet.absoluteFillObject}
      backgroundColor="blackTrans"
      alignItems="center"
      justifyContent="center">
      <ActivityIndicator
        color={colors.secondary}
        size="large"
        shouldRasterizeIOS
        animating
        focusable
      />
    </Box>
  ) : null;
});
