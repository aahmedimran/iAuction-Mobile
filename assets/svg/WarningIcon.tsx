import React from 'react';
import {Path, Svg} from 'react-native-svg';

const WarningIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M12 8.5V11"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <Path
        d="M5.0002 19.0005H19.0002C19.6627 18.9959 20.28 18.6634 20.6484 18.1127C21.0168 17.5621 21.0887 16.8647 20.8402 16.2505L13.7402 4.0005C13.388 3.36387 12.7178 2.96875 11.9902 2.96875C11.2626 2.96875 10.5924 3.36387 10.2402 4.0005L3.1402 16.2505C2.89659 16.8502 2.95832 17.5308 3.30585 18.0769C3.65338 18.623 4.24373 18.9672 4.8902 19.0005"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="square"
        stroke-linejoin="round"
      />
      <Path
        d="M11.9999 14.5H12.0099"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default WarningIcon;
