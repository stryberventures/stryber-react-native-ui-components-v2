import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const InfoIcon: React.FC<SvgProps> = ({fill, ...rest}) => (
  <Svg {...rest}>
    <Path
      d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
      fill={fill}
    />
    <Path
      d="M10 8C10.5523 8 11 8.44771 11 9V15C11 15.5523 10.5523 16 10 16C9.44771 16 9 15.5523 9 15V9C9 8.44771 9.44771 8 10 8Z"
      fill={fill}
    />
    <Path
      d="M11.5 5.5C11.5 6.32843 10.8284 7 10 7C9.17157 7 8.5 6.32843 8.5 5.5C8.5 4.67157 9.17157 4 10 4C10.8284 4 11.5 4.67157 11.5 5.5Z"
      fill={fill}
    />
  </Svg>
);

InfoIcon.defaultProps = {
  width: 20,
  height: 20,
  fill: 'white',
};

export default InfoIcon;
