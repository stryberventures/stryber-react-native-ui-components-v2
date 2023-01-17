import React from 'react';
import {Shadow, ShadowProps} from 'react-native-shadow-2';
import {TShadowVariant} from './types';
import {StyleProp, ViewStyle} from 'react-native';
import {getShadowVariant} from './getShadowVariant';

export interface IElevationProps extends ShadowProps {
  variant?: TShadowVariant;
  childShadowStyle?: StyleProp<ViewStyle>;
  testID?: string;
}

const Elevation: React.FC<IElevationProps> = ({
  children,
  variant = 'medium',
  childShadowStyle,
  ...rest
}) => {
  const parentShadowProps: ShadowProps = getShadowVariant(variant).parentShadow;
  const childShadowProps: ShadowProps = getShadowVariant(variant).childShadow;
  return (
    <Shadow {...parentShadowProps} {...rest}>
      <Shadow {...childShadowProps} style={childShadowStyle}>
        {children}
      </Shadow>
    </Shadow>
  );
};

export default Elevation;
