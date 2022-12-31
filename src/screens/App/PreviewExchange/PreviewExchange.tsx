import {Box} from '@utils/Theme';
import React from 'react';
import Actions from './components/Actions';
import Exchange from './components/Exchange';
import ExchangeRate from './components/ExchangeRate';

export default () => (
  <Box flex={1} backgroundColor="secondary">
    <Box padding="xl">
      <Exchange label="Sell" />
      <Exchange label="Buy" />
    </Box>
    <ExchangeRate />
    <Actions />
  </Box>
);
