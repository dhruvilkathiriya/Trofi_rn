import Currency from '@components/Currency';
import {Text} from '@utils/Theme';
import React from 'react';
import Input from './Input';

export default () => (
  <>
    <Text variant="button1" color="textPrimary" marginBottom="m">
      Sell
    </Text>
    <Currency />
    <Input onMax={() => {}} />
    <Text variant="label2" color="black">
      Available Balance : 0.14124447
    </Text>
  </>
);
