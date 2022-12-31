import Currency from '@components/Currency';
import Important from '@components/Important';
import WebRenderer from '@components/WebRenderer';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {updateKyc} from '@store/action/auth-action';
import {Box} from '@utils/Theme';
import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';
import Amount from './components/Amount';
import AmountInput from './components/AmountInput';
import Input from './components/Input';
import Limit from './components/Limit';
import Receive from './components/Receive';
import Warning from './components/Warning';

const importants = [
  'please review and confirm your withdrawal details. trofi is not responsible or any crypto sent to the wrong address',
  'To ensure the safety o your assets, your withdrawal request will be reviewed by the platform and approved within 24 hours.',
];

export default () => <WebRenderer url="wallet/withdraw" />;

// export default () => (
//   <Box flex={1} backgroundColor="secondary">
//     <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
//       <Box
//         padding="xl"
//         paddingBottom="xxxl"
//         borderBottomWidth={0.5}
//         borderColor="gray1">
//         <Currency />
//         <Input
//           label="Recipient's address"
//           placeholder="Enter or past address"
//         />
//         <Warning />
//         <AmountInput />
//         <Limit />
//         <Important importants={importants} />
//       </Box>
//       <Amount />
//       <Receive />
//     </ScrollView>
//   </Box>
// );
