/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from '@store';

function Index({isHeadless}) {
  if (isHeadless) {
    return null;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Index);
