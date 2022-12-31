import React from 'react';
import {StyleSheet} from 'react-native';
import {Box, TouchableBox} from '@utils/Theme';
import {hp, statusBarHeight, wp} from '@utils/metrics';
import {IconBold} from '@utils/iconRegular';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const {goBack} = useNavigation();
  return (
    <Box style={styles.container}>
      <TouchableBox onPress={goBack}>
        <IconBold name="back" size={hp(4)} color="gray2" />
      </TouchableBox>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: statusBarHeight + hp(1.3),
    paddingBottom: hp(1.3),
    paddingHorizontal: wp(5.4),
  },
});
