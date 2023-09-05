import React from 'react';
import {Path, Svg} from 'react-native-svg';

const LockIcon = () => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M16.5 20.5703H7.5C5.84315 20.5703 4.5 19.2272 4.5 17.5703V13.0703C4.5 11.4135 5.84315 10.0703 7.5 10.0703H16.5C18.1569 10.0703 19.5 11.4135 19.5 13.0703V17.5703C19.5 19.2272 18.1569 20.5703 16.5 20.5703Z"
        stroke="white"
        stroke-width="1.4"
      />
      <Path
        d="M7.5 10.0703V7.25781C7.5 4.66898 9.51472 2.57031 12 2.57031C14.4853 2.57031 16.5 4.66898 16.5 7.25781V10.0703"
        stroke="white"
        stroke-width="1.4"
      />
    </Svg>
  );
};

export default LockIcon;
