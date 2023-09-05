import React from 'react';
import {Defs, G, Path, Rect, Svg} from 'react-native-svg';

const TimeIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <G clip-path="url(#clip0_7656_3112)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M22.999 12.0005C22.999 18.0763 18.0744 23.001 11.9985 23.001C5.9227 23.001 0.998047 18.0763 0.998047 12.0005C0.998047 5.92465 5.9227 1 11.9985 1C18.0744 1 22.999 5.92465 22.999 12.0005Z"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16.0801 15.5014L11.5967 12.8268V7.0625"
          stroke="white"
          stroke-width="1.4"
          stroke-linecap="square"
          stroke-linejoin="round"
        />
      </G>
      <Defs>
        <clipPath id="clip0_7656_3112">
          <Rect width="24" height="24" fill="white" />
        </clipPath>
      </Defs>
    </Svg>
  );
};

export default TimeIcon;
