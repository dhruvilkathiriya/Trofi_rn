import {updateVersionState} from '@store/action/app-action';
import {getVersionStatus} from '@store/selector/app-selector';
import {IconBold} from '@utils/iconRegular';
import {Box, Text} from '@utils/Theme';
import React from 'react';
import {Linking, Platform, StatusBar, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Actions from './components/Actions';

export default () => {
  const versionStatus = useSelector(getVersionStatus);
  const dispatch = useDispatch();
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      backgroundColor="blue2"
      style={StyleSheet.absoluteFillObject}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <IconBold name="update" size={144} />
      <Text
        variant="title2"
        color="textSecondary"
        textAlign="center"
        paddingTop="x4l"
        paddingBottom="s"
        paddingHorizontal="xxxl">
        A New version of Trofi wallet app is available
      </Text>
      <Text
        variant="label2"
        color="skyBlue4"
        textAlign="center"
        paddingHorizontal="xxxl"
        paddingVertical="m">
        Please update to the latest version to continue using the app
      </Text>
      <Actions
        versionStatus={versionStatus}
        onGetit={() =>
          Linking.openURL(
            Platform.OS === 'ios'
              ? 'https://apps.apple.com/us/app/id1618915421'
              : 'https://play.google.com/store/apps/details?id=com.trofi',
          )
        }
        onSkip={() => dispatch(updateVersionState('SKIP'))}
      />
    </Box>
  );
};
