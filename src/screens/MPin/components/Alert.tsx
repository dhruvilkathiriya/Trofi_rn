import ButtonPrimary from '@components/ButtonPrimary';
import {WIDTH} from '@helpers/Dimensions';
import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';
import {Modal} from 'react-native';

interface alertProps {
  label: string;
  visible: boolean;
  onClose: () => void;
  onAction: () => void;
}

const border = {borderRadius: 50};

export default ({label, visible, onClose, onAction}: alertProps) => (
  <Modal visible={visible} transparent animationType="fade">
    <Box
      flex={1}
      backgroundColor="blackTrans"
      alignItems="center"
      justifyContent="center"
      padding="xxl">
      <Box
        width="100%"
        margin="m"
        alignItems="center"
        backgroundColor="secondary"
        padding="xxxl"
        borderRadius="xxl">
        <Box
          height={100}
          width={100}
          style={border}
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="primary"
          backgroundColor="gray1">
          <IconBold
            name={label === 'Face Id' ? 'faceid' : 'fingerprint'}
            size={45}
          />
        </Box>
        <Text
          variant="title3"
          textAlign="center"
          paddingHorizontal="xxxl"
          marginTop="xxl">
          Do You Want
        </Text>
        <Text variant="title3" textAlign="center" paddingHorizontal="xxxl">
          To Enable {label}
        </Text>
        <Box
          width={WIDTH * 0.65}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          marginTop="xxxl"
          marginBottom="m">
          <Box width="45%">
            <ButtonPrimary secondary label="NO" onPress={onClose} />
          </Box>
          <Box width="45%">
            <ButtonPrimary label="YES" onPress={onAction} />
          </Box>
        </Box>
        <Box
          position="absolute"
          bottom={0}
          height={8}
          width={WIDTH / 2}
          borderRadius="m"
          alignSelf="center"
          backgroundColor="primary"
        />
      </Box>
    </Box>
  </Modal>
);
