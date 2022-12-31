import React, {ReactNode} from 'react';
import {
  createBox,
  createText,
  createTheme,
  ThemeProvider,
  useTheme as useThemeHook,
} from '@shopify/restyle';
import {
  ImageProps,
  Text as RNText,
  Image as RNImage,
  TextInput as RNTextInput,
  TextInputProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

export const palette = {
  black1: '#000000',
  black2: '#474C60',
  black3: 'rgba(0, 0, 0, 0.85)',
  black4: 'rgba(0, 0, 0, 0.35)',
  black5: 'rgba(0, 0, 0, 0.15)',
  red: '#E44450',

  green: '#3FD897',

  yellow1: '#F0D040',
  yellow2: '#FEF9E4',

  blueDark1: '#0B2480',
  blueDark2: '#0D2881',
  blueDark3: '#0550BD',
  blueDark4: '#3545CD',
  blueDark5: '#1532B2',
  blue1: '#1551C6',
  blue2: '#1146BA',
  blue3: '#3C80EB',
  blue4: '#365CD8',
  blueLight1: '#F2F9FF', //#F1F8FF
  blueLight2: '#5485EF', //#5188FF
  blueLight3: '#DEF0FF',
  blueLight4: '#ACC8FF',
  blueLight5: '#EFF8FF',
  blueLight6: '#BDE1FC',
  blueLight7: '#EBF0FF',

  grayDark1: '#98999C',
  grayDark2: '#999A9D',
  grayDark3: '#707070',
  grayDark4: '#565861',
  gray1: '#C2C2C2',
  gray2: '#C1C5D1',
  gray3: '#A0A9C1',
  grayLight: '#EEEEF2',
  grayLight1: '#B1B1B1',
  grayLight2: '#F5F5F5',

  white1: '#FFFFFF', // #00000000
  white2: '#F6F6F6',

  transparent: 'rgba(0,0,0,0)',
};

const theme = createTheme({
  colors: {
    primary: palette.blue1,
    secondary: palette.white1,

    blackTrans: palette.black3,
    blackTrans1: palette.black4,
    blackTrans2: palette.black5,
    black: palette.black1,
    red: palette.red,
    green: palette.green,
    gray1: palette.grayLight,
    gray2: palette.gray1,
    gray3: palette.gray3,
    gray4: palette.grayLight2,
    blue1: palette.blue2,
    blue2: palette.blueDark1,
    blue3: palette.blue3,
    blue4: palette.blueDark4,
    blue5: palette.blueDark5,
    skyBlue: palette.blueLight1,
    skyBlue2: palette.blueLight2,
    skyBlue3: palette.blueLight3,
    skyBlue4: palette.blueLight4,
    skyBlue5: palette.blueLight5,
    white1: palette.white2,
    transparent: palette.transparent,
    yellowLight: palette.yellow2,
    yellowDark: palette.yellow1,

    borderGray1: palette.grayDark3,
    borderLightBlue: palette.blueLight7,

    //Text
    textPrimary: palette.blueDark2,
    textSecondary: palette.white1,
    textBlack: palette.black2,
    textGray: palette.grayDark2,
    textGray2: palette.grayDark4,
    textGray3: palette.grayLight1,
    placeholder: palette.gray2,
    textBlue: palette.blueDark3,
    textBlue2: palette.blue4,
    textLightBlue1: palette.blueLight6,
  },
  spacing: {
    '-': -7,
    s: 5,
    m: 7,
    l: 15,
    xl: 18,
    xxl: 22,
    xxxl: 34,
    x4l: 58,
    x5l: 100,
  },
  borderRadii: {
    s: 3,
    m: 6,
    l: 11,
    xl: 18,
    xxl: 22,
  },
  textVariants: {
    title1: {
      fontSize: 25,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    title2: {
      fontSize: 21,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    title3: {
      fontSize: 18,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    title4: {
      fontSize: 16,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    label1: {
      fontSize: 12,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    label2: {
      fontSize: 13,
      fontFamily: 'Poppins-Regular',
      color: 'textSecondary',
    },
    label3: {
      fontSize: 16,
      fontFamily: 'Poppins-Regular',
      color: 'textPrimary',
    },
    label4: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: 'textPrimary',
    },
    content1: {
      fontSize: 16,
      fontFamily: 'Poppins-Light',
      color: 'textPrimary',
    },
    content2: {
      fontSize: 14,
      fontFamily: 'Poppins-Light',
      color: 'textPrimary',
    },
    content3: {
      fontSize: 12,
      fontFamily: 'Poppins-Light',
      color: 'textPrimary',
    },
    content4: {
      fontSize: 11,
      fontFamily: 'Poppins-Light',
      color: 'textSecondary',
    },
    input1: {
      fontSize: 13,
      fontFamily: 'Poppins-Light',
      color: 'textPrimary',
    },
    button1: {
      fontSize: 17,
      fontFamily: 'Poppins-Medium',
      color: 'textSecondary',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Image = createBox<Theme, ImageProps>(RNImage);
export const TouchableBox = createBox<Theme, TouchableOpacityProps>(
  TouchableOpacity,
);
export const GradiantBox = createBox<Theme, LinearGradientProps>(
  LinearGradient,
);
export const Text = createText<Theme>(RNText);
export const TextInput = createText<Theme, TextInputProps>(RNTextInput);
export const useTheme = () => useThemeHook<Theme>();
export default React.memo(({children}: {children: ReactNode}) => (
  <ThemeProvider {...{theme}}>{children}</ThemeProvider>
));
