import WebRenderer from '@components/WebRenderer';
import {updateKyc} from '@store/action/auth-action';
import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch} from 'react-redux';

export default () => {
  const dispatch = useDispatch();
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <WebRenderer
        useWebView2
        originWhitelist={['*']}
        url="personal-information"
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        onNavigationStateChange={event => {
          if (!event.url) {
            return;
          }
          if (event.url.includes('/wallet')) {
            dispatch(updateKyc());
          }
        }}
      />
    </>
  );
};
