import React from 'react';
import {StyleSheet} from 'react-native';
import {Box} from '@utils/Theme';
import {hp} from '@utils/metrics';
import WalletActionButton from './WalletActionButton';

interface WalletActionsProps {
  onDepositPress: () => void;
  onSwapPress: () => void;
}

export default ({onDepositPress, onSwapPress}: WalletActionsProps) => {
  return (
    <Box style={styles.container}>
      <Box style={styles.buttonsContainer}>
        <WalletActionButton
          title="Deposit"
          iconName="depositAction"
          onPress={onDepositPress}
        />
        <WalletActionButton
          title="Swap"
          iconName="swapAction"
          onPress={onSwapPress}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: hp(0.75),
    borderBottomColor: '#F4F6FF',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    top: -hp(2),
  },
});
