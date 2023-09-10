import React from 'react';
import { Path, Svg } from 'react-native-svg';

const Backicon = () => {
  return (
    <Svg
      width="8"
      height="14"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M7 1L1 7L7 13"
        stroke="#677778"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Backicon;
