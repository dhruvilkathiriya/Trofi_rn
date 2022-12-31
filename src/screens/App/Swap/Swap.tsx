import ButtonPrimary from '@components/ButtonPrimary';
import {Box, useTheme} from '@utils/Theme';
import React from 'react';
import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import Sell from './components/Sell';
import Divider from './components/Divider';
import Buy from './components/Buy';
import WebRenderer from '@components/WebRenderer';

export default () => <WebRenderer url="swap" />;

// export default () => {
//   const {spacing} = useTheme();
//   return (
//     <Box flex={1} backgroundColor="secondary" padding="xl">
//       <Sell />
//       <Divider />
//       <Buy />
//       <Box
//         position="absolute"
//         bottom={spacing.xxxl}
//         right={spacing.xl}
//         left={spacing.xl}>
//         <ButtonPrimary
//           label="PREVIEW EXCHANGE"
//           onPress={() => navigate(ROUTE.PREVIEWEXCHANGE)}
//         />
//       </Box>
//     </Box>
//   );
// };
