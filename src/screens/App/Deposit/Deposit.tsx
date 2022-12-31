import Currency from '@components/Currency';
import {Box} from '@utils/Theme';
import React from 'react';
import {ScrollView} from 'react-native';
import Important from '@components/Important';
import Input from './components/Input';
import QRCode from './components/QRCode';
import Warning from './components/Warning';
import WebRenderer from '@components/WebRenderer';
import {useDispatch, useSelector} from 'react-redux';
import {getTRSymbols} from '@store/selector/transaction-selector';
import {updateKyc} from '@store/action/auth-action';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';

const importants = [
  'Sending any other crypto asset besides Bitcoin(BTC) to this specific address may result in permanent loss and may not be refunded',
  'Please note that Trofi does not support wrapped coins that are pegged to coins from another blockchain. Transferring such assets to your Trofi account will result in permanent loss.',
  'Minimum amount per deposit: 0.00001000 BTC. Deposit less than this amount will neither be processed nor refunded.',
  '3 network confirmation(s) is required before your deposit of BTC is credited to your Trofi account.',
];

export default () => <WebRenderer url="wallet/deposit" />;

// export default () => {
//   const symbols = useSelector(getTRSymbols);
//   return (
//     <Box flex={1} backgroundColor="secondary">
//       <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
//         <Box padding="xl" paddingBottom="xxxl">
//           <Currency />
//           <Input
//             label="Deposit Address"
//             placeholder="dsadshkjndkjsagiadksbalaksudbsan"
//           />
//           <Warning />
//           <QRCode />
//           <Important importants={importants} />
//         </Box>
//       </ScrollView>
//     </Box>
//   );
// };
