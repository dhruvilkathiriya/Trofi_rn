/* eslint-disable react-hooks/exhaustive-deps */
import Toggle from '@components/Toggle';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {JWTKey, WEB_ROUTE} from '@config/serviceConstants';
import Clipboard from '@react-native-clipboard/clipboard';
import {useIsFocused} from '@react-navigation/native';
import {
  checkTokenAction,
  updateKyc,
  updateTempToken,
} from '@store/action/auth-action';
import {getToggle} from '@store/selector/app-selector';
import {getToken} from '@store/selector/auth-selector';
import {Box} from '@utils/Theme';
import React, {useEffect, useState} from 'react';
import {sign} from 'react-native-pure-jwt';
import WebView, {WebViewProps} from 'react-native-webview';
import {useDispatch, useSelector} from 'react-redux';

interface webRendererProps extends WebViewProps {
  url: string;
}

export default ({
  url: endpoint,
  onNavigationStateChange,
  ...props
}: webRendererProps) => {
  const isFocused = useIsFocused();
  const toggle = useSelector(getToggle);
  const authToken = useSelector(getToken);
  const [refresh, setRefresh] = useState(false);
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (toggle) {
      setUrl('&openChat=true');
      setRefresh(true);
      setTimeout(() => setRefresh(false), 100);
    }
  }, [toggle, isFocused]);
  useEffect(() => {
    (async () => {
      await sign(
        {
          appKey: authToken?.appToken,
          time: new Date().toUTCString(),
        },
        JWTKey,
        {
          alg: 'HS256',
        },
      )
        .then(res => {
          dispatch(checkTokenAction(res));
          dispatch(updateTempToken(res));
        })
        .catch(e => console.log('[JWT Converter] Exception: ', e));
    })();
  }, [authToken?.appToken]);
  useEffect(() => {
    dispatch(checkTokenAction(authToken?.tempToken));
    setRefresh(true);
    setTimeout(() => setRefresh(false), 100);
    return () => setUrl('');
  }, [isFocused]);

  return authToken?.tempToken ? (
    <Box flex={1} backgroundColor="skyBlue">
      {refresh ? null : (
        <WebView
          {...props}
          bounces={false}
          javaScriptEnabled
          domStorageEnabled
          cacheEnabled
          source={{
            uri: `${WEB_ROUTE}${endpoint}?appKey=${authToken?.tempToken}${url}`,
          }}
          onNavigationStateChange={state => {
            dispatch(checkTokenAction(authToken?.tempToken));
            onNavigationStateChange && onNavigationStateChange(state);
            if (endpoint !== 'wallet') {
              if (!state.url) {
                return;
              }
              if (
                state.url.includes('/wallet') &&
                !state.url.includes('/wallet/')
              ) {
                navigate(ROUTE.HOME, {
                  screen: ROUTE.WALLET,
                });
              } else if (
                state.url.includes('/personal-information') ||
                state.url.includes('/kyc-information')
              ) {
                dispatch(updateKyc(false));
              } else if (
                (state.url.match(new RegExp('/', 'g')) || []).length <= 2
              ) {
                navigate(ROUTE.HOME, {
                  screen: ROUTE.WALLET,
                });
              }
            }
          }}
          onMessage={event => {
            if (event.nativeEvent.data) {
              if (event.nativeEvent.data.split('/')[1] === 'clipboard') {
                Clipboard.setString(event.nativeEvent.data.split('/')[0]);
              }
            }
          }}
        />
      )}
      <Toggle />
    </Box>
  ) : null;
};
