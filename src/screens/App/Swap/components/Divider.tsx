import {WIDTH} from '@helpers/Dimensions';
import {IconBold} from '@utils/iconRegular';
import {Box} from '@utils/Theme';
import React from 'react';

export default () => (
  <Box
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
    marginVertical="l">
    <Box height={1} width={WIDTH * 0.35} backgroundColor="gray1" />
    <IconBold name="arrowCircle" size={24} />
    <Box height={1} width={WIDTH * 0.35} backgroundColor="gray1" />
  </Box>
);
