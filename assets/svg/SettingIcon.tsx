import React from 'react';
import {Circle, Path, Svg} from 'react-native-svg';

const SettingIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M21.5278 10.85C21.9386 11.5616 21.9386 12.4384 21.5278 13.15L17.7598 19.6763C17.349 20.3879 16.5897 20.8263 15.7679 20.8263L8.23205 20.8263C7.41034 20.8263 6.65105 20.3879 6.24019 19.6763L2.47225 13.15C2.06139 12.4384 2.06139 11.5616 2.47225 10.85L6.24019 4.32372C6.65105 3.6121 7.41034 3.17372 8.23205 3.17372L15.7679 3.17372C16.5897 3.17372 17.349 3.6121 17.7598 4.32372L21.5278 10.85Z"
        stroke="white"
        stroke-width="1.4"
      />
      <Circle cx="12" cy="12" r="3.3" stroke="white" stroke-width="1.4" />
    </Svg>
  );
};

export default SettingIcon;
