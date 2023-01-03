import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowDownSmallIconDeprecated: React.FC<SvgProps> = ({fill, ...rest}) => (
  <Svg {...rest}>
    <Path d="M0.25 0.5L4 4.25L7.75 0.5H0.25Z" fill={fill} />
  </Svg>
);

ArrowDownSmallIconDeprecated.defaultProps = {
  width: 8,
  height: 5,
  fill: 'white',
};

export default ArrowDownSmallIconDeprecated;
