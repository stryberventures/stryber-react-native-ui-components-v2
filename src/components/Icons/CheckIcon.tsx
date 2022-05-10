import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const InfoIcon: React.FC<SvgProps> = props => (
  <Svg width="12" height="10" viewBox="0 0 12 10" {...props}>
    <Path
      d="M11.0542 1.0641C11.295 1.27813 11.3167 1.64684 11.1027 1.88763L4.88044 8.88763C4.76974 9.01217 4.61107 9.08342 4.44445 9.08342C4.27783 9.08342 4.11916 9.01217 4.00846 8.88763L0.897351 5.38763C0.683315 5.14684 0.705004 4.77813 0.945794 4.5641C1.18658 4.35006 1.55529 4.37175 1.76933 4.61254L4.44445 7.62206L10.2307 1.11254C10.4447 0.871752 10.8134 0.850063 11.0542 1.0641Z"
      fill="white"
    />
  </Svg>
);

InfoIcon.defaultProps = {
  width: 12,
  height: 10,
  fill: 'none',
};

export default InfoIcon;
