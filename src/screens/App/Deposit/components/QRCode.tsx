import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import QRCode from 'react-native-qrcode-svg';

export default () => (
  <Box paddingVertical="xxl" alignItems="center" justifyContent="center">
    <QRCode size={150} value="http://awesome.link.qr" />
    <TouchableBox
      paddingVertical="m"
      paddingHorizontal="xxl"
      borderRadius="m"
      backgroundColor="primary"
      marginTop="xl">
      <Text variant="label2" fontSize={10}>
        Save Deposit QR Code
      </Text>
    </TouchableBox>
  </Box>
);
