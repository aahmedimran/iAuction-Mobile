import React from 'react';
import {Path, Svg} from 'react-native-svg';

const NotificationIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.0396 12.8295L19.3705 14.8043C19.677 16.6336 18.2666 18.3 16.4117 18.3H7.00075C5.14587 18.3 3.73546 16.6336 4.042 14.8043L4.3729 12.8295L5.21725 8.2104C5.79008 5.07668 8.52059 2.80005 11.7062 2.80005C12.8975 2.80005 14.0251 3.11839 15 3.68085"
        stroke="white"
        stroke-width="1.4"
      />
      <Path
        d="M9.65625 22H13.6562"
        stroke="white"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
      <Path
        d="M17 5.5H21.375L17.625 9.5H22"
        stroke="white"
        stroke-width="1.4"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default NotificationIcon;
