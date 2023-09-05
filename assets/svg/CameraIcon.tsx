import React from 'react';
import {Path, Svg} from 'react-native-svg';

const CameraIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23 18C23 19.6569 21.6569 21 20 21H4.00001C2.34315 21 1 19.6569 1.00001 18L1.00002 7.99996C1.00003 6.34311 2.34317 4.99997 4.00002 4.99997H20C21.6569 4.99997 23 6.34312 23 7.99997V18Z"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 16C13.6569 16 15 14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16Z"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4 2L8 2"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
export default CameraIcon;
