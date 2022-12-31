import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export default ({...props}: SvgProps) => (
  <Svg fill="none" {...props} viewBox="0 0 512 129">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M470.368 111.372a1 1 0 0 1-1.736 0l-6.954-12.146H10c-5.523 0-10-4.477-10-10V10.729c0-5.523 4.477-10 10-10h492c5.523 0 10 4.477 10 10v78.497c0 5.523-4.477 10-10 10h-24.678l-6.954 12.146Z"
      fill="#cc6a6a"
    />
  </Svg>
);
