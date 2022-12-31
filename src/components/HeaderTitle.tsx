import {MAX_WIDTH, WIDTH} from '@helpers/Dimensions';
import {images} from '@helpers/images';
import {Image, Text} from '@utils/Theme';
import React from 'react';

interface headerTitleProps {
  label?: string;
}

const width = WIDTH >= MAX_WIDTH ? MAX_WIDTH : WIDTH;
export default ({label}: headerTitleProps) =>
  label ? (
    <Text variant="title3" fontSize={16} color="black">
      {label}
    </Text>
  ) : (
    <Image
      width={width / 4}
      height={(width / 4) * images.logo.aspectRatio}
      source={images.logo.source}
    />
  );
