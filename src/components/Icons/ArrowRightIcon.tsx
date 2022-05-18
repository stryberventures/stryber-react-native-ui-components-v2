import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const ArrowDownRight: React.FC<SvgProps> = ({fill, ...rest}) => (
  <Svg {...rest}>
    <Path
      d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z"
      fill={fill}
    />
  </Svg>
);

ArrowDownRight.defaultProps = {
  width: 24,
  height: 24,
  fill: '#444CE7',
};

export default ArrowDownRight;
