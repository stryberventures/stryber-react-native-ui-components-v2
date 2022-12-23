import * as React from 'react';
import {Path, SvgProps} from 'react-native-svg';

export type TPathDProp = React.ComponentProps<typeof Path>['d'];

export type TCommonIconVariants = {
  [key: string]: string;
};

export interface ICommonIconProps<Variants> extends SvgProps {
  variant?: Variants;
}
