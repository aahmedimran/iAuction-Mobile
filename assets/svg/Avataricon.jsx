import React from 'react'
import { Svg, Path,Circle } from 'react-native-svg';

const Avataricon = ({color}) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 32 32" fill={color? color :'white'}>
<Circle cx="16" cy="10.6666" r="7.3" stroke='white' stroke-width="1.4"/>
<Path fill-rule="evenodd" clip-rule="evenodd" d="M27.9334 29.3334H29.3334C29.3334 22.706 23.3639 17.3334 16.0001 17.3334C8.63628 17.3334 2.66675 22.706 2.66675 29.3334H4.06675C4.06675 23.6143 9.26709 18.7334 16.0001 18.7334C22.7331 18.7334 27.9334 23.6143 27.9334 29.3334Z" fill={color? color :'white'}/>
</Svg>

  )
}

export default Avataricon