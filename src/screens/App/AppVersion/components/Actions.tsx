import React from 'react';
import {Box, TouchableBox, Text, useTheme} from '@utils/Theme';
import {IconBold} from '@utils/iconRegular';
import ButtonPrimary from '@components/ButtonPrimary';
import {VersionState} from '@typings/AppState';

interface actionsProps {
  versionStatus: VersionState;
  onSkip: () => void;
  onGetit: () => void;
}

export default ({versionStatus, onGetit, onSkip}: actionsProps) => {
  const {spacing} = useTheme();
  return (
    <Box position="absolute" bottom={50} right={spacing.l} left={spacing.l}>
      <ButtonPrimary label="GET IT NOW" onPress={onGetit} />
      {versionStatus !== 'NEED_FORCE_UPDATE' && (
        <TouchableBox
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          marginTop="xl"
          onPress={onSkip}>
          <Text variant="label3" color="skyBlue4" marginRight="m">
            Skip Now
          </Text>
          <IconBold name="chevronRight" size={12} />
        </TouchableBox>
      )}
    </Box>
  );
};
