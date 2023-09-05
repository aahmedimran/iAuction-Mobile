import React from 'react';
import {Path, Svg} from 'react-native-svg';

const RewardIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M7.21 13.8889L6.24408 20.7622C6.13628 21.5293 6.90395 22.1224 7.61898 21.8244L11.6154 20.1592C11.8615 20.0566 12.1385 20.0566 12.3846 20.1592L16.3813 21.8245C17.0963 22.1225 17.8639 21.5295 17.7562 20.7625L16.79 13.8789"
        stroke="white"
        stroke-width="1.4"
        stroke-linecap="square"
      />
    </Svg>
  );
};

export default RewardIcon;
