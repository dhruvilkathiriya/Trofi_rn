import {navigate} from '@config/NavigationHelper';
import {ROUTE} from '@config/routes';
import {IconBold} from '@utils/iconRegular';
import {Box, Text, TouchableBox} from '@utils/Theme';
import React from 'react';
import SelectorCard from './SelectorCard';

const shadowStyle = {
  shadowOffset: {width: 0, height: 2},
  shadowOpacity: 0.22,
  shadowRadius: 2.46,
};

interface trofiSelectorProps {
  marginBottom: number;
  visible: boolean;
  onPress: () => void;
}

export default ({marginBottom, visible, onPress}: trofiSelectorProps) =>
  visible ? (
    <Box
      position="absolute"
      width={149}
      height={149 * (382 / 512)}
      bottom={marginBottom}>
      {visible && (
        <>
          <SelectorCard
            width={149}
            height={149 * (382 / 512)}
            style={shadowStyle}
          />
          <Box
            position="absolute"
            height="85%"
            width="100%"
            paddingTop="m"
            paddingBottom="m">
            <TouchableBox
              flex={1}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                onPress();
                navigate(ROUTE.DEPOSIT);
              }}>
              <IconBold name="deposit" size={21} />
              <Text variant="label1" color="textGray" marginLeft="m">
                Deposit
              </Text>
            </TouchableBox>
            <TouchableBox
              flex={1}
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
              onPress={() => {
                onPress();
                navigate(ROUTE.WITHDRAW);
              }}>
              <IconBold name="withdraw" size={21} />
              <Text variant="label1" color="textGray" marginLeft="m">
                Withdraw
              </Text>
            </TouchableBox>
          </Box>
        </>
      )}
    </Box>
  ) : null;
