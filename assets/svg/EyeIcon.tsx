import React from 'react';
import {Path, Svg} from 'react-native-svg';

const EyeIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M1.76038 13.29C1.24615 12.4981 1.24615 11.5017 1.76038 10.7097C3.2297 8.4468 6.78105 3.99988 12 3.99988C17.2189 3.99988 20.7703 8.4468 22.2396 10.7097C22.7538 11.5017 22.7538 12.4981 22.2396 13.29C20.7703 15.553 17.2189 19.9999 12 19.9999C6.78105 19.9999 3.2297 15.553 1.76038 13.29Z"
        stroke="black"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="black"
        stroke-width="1.4"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default EyeIcon;
