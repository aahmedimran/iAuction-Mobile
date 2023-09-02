import React from 'react'
import { Svg, Path, Circle } from 'react-native-svg';

const Gellary = ({color, opacity}) => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M5.66618 20H14.3328C17.7231 20 20 17.6219 20 14.0833V5.91672C20 2.37811 17.7231 0 14.3338 0H5.66618C2.2769 0 0 2.37811 0 5.91672V14.0833C0 17.6219 2.2769 20 5.66618 20ZM6.49886 9C5.12021 9 4 7.87827 4 6.5C4 5.12173 5.12021 4 6.49886 4C7.8765 4 8.99772 5.12173 8.99772 6.5C8.99772 7.87827 7.8765 9 6.49886 9ZM17.8208 12.934C18.1557 13.7926 17.9817 14.8246 17.6237 15.6749C17.1994 16.6863 16.3869 17.452 15.3632 17.7864C14.9087 17.935 14.432 18 13.9564 18H5.52864C4.68999 18 3.94788 17.7988 3.3395 17.4241C2.95839 17.1889 2.89102 16.646 3.17358 16.2941C3.6462 15.7059 4.11279 15.1156 4.5834 14.5201C5.48038 13.3808 6.08473 13.0506 6.75645 13.3406C7.02896 13.4603 7.30248 13.6398 7.58404 13.8297C8.3342 14.3395 9.37699 15.0402 10.7506 14.2797C11.6906 13.7532 12.2358 12.8501 12.7106 12.0637L12.7185 12.0506C12.7522 11.9954 12.7855 11.9402 12.8187 11.8852C12.9783 11.6212 13.1357 11.3607 13.3138 11.1207C13.5371 10.8204 14.3646 9.88132 15.4366 10.5501C16.1194 10.9711 16.6936 11.5408 17.308 12.1507C17.5423 12.3839 17.7092 12.6491 17.8208 12.934Z" fill={color}/>
</Svg>

  )
}

export default Gellary