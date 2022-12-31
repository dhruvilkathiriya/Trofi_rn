import React from 'react';
import Svg, {Mask, Path, SvgProps} from 'react-native-svg';

export default (props: SvgProps) => (
  <Svg width={512} height={382} fill="none" viewBox="0 0 512 382" {...props}>
    <Mask id="a" fill="#fff">
      <Path d="M51 6C28.909 6 11 23.909 11 46v242c0 22.091 17.909 40 40 40h146.398L255 376l57.602-48H461c22.091 0 40-17.909 40-40V46c0-22.091-17.909-40-40-40H51Z" />
    </Mask>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51 6C28.909 6 11 23.909 11 46v242c0 22.091 17.909 40 40 40h146.398L255 376l57.602-48H461c22.091 0 40-17.909 40-40V46c0-22.091-17.909-40-40-40H51Z"
      fill="#fff"
    />
    <Path
      opacity={0.6}
      d="m197.398 328 .64-.768-.278-.232h-.362v1ZM255 376l-.64.768.64.534.64-.534L255 376Zm57.602-48v-1h-.362l-.278.232.64.768ZM12 46C12 24.46 29.46 7 51 7V5C28.356 5 10 23.356 10 46h2Zm0 242V46h-2v242h2Zm39 39c-21.54 0-39-17.461-39-39h-2c0 22.644 18.356 41 41 41v-2Zm146.398 0H51v2h146.398v-2Zm-.64 1.768 57.602 48 1.28-1.536-57.602-48-1.28 1.536Zm58.882 48 57.602-48-1.28-1.536-57.602 48 1.28 1.536ZM461 327H312.602v2H461v-2Zm39-39c0 21.539-17.461 39-39 39v2c22.644 0 41-18.356 41-41h-2Zm0-242v242h2V46h-2ZM461 7c21.539 0 39 17.46 39 39h2c0-22.644-18.356-41-41-41v2ZM51 7h410V5H51v2Z"
      fill="#000"
      mask="url(#a)"
    />
    <Path
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeDasharray="9 9"
      d="M61 163h390"
    />
  </Svg>
);
