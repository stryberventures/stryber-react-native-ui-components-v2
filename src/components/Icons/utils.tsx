import React from 'react';
import {ICommonIconProps, TCommonIconVariants, TPathDProp} from './types';
import Svg, {Path, Color} from 'react-native-svg';
import {useTheme} from '../Theme';

export const createPathDComponent = (
  pathDProp: TPathDProp | TPathDProp[],
  fill: Color,
) => {
  if (Array.isArray(pathDProp)) {
    return pathDProp.map((pathD, idx) => (
      <Path key={idx} d={pathD} fill={fill} />
    ));
  }

  return <Path d={pathDProp} fill={fill} />;
};

// @ts-ignore
export const useCommonIcon = (props: ICommonIconProps) => {
  const {fill, variant = 'initial', ...rest} = props;
  const {theme} = useTheme();
  const fillColor = fill || theme.colors.text.headline;

  return {fill: fillColor, variant, rest};
};

const parseSvgPathD = (svg: string) =>
  [...svg.matchAll(/<path d="(.*?)"/g)].map(r => r[1]);

// Only works with simple icons(which svg tag contains only <path d="..." />)
export const createCommonIcon = <Variants extends string>(
  name: string,
  iconVariants: TCommonIconVariants,
) => {
  const CommonIcon: React.FC<ICommonIconProps<Variants>> = props => {
    //Take the first variant as default
    const firstVariant = Object.keys(iconVariants)[0];
    const {fill, variant = firstVariant, ...rest} = props;
    const {theme} = useTheme();
    const fillColor = fill || theme.colors.text.headline;

    return (
      <Svg {...rest}>
        {createPathDComponent(parseSvgPathD(iconVariants[variant]), fillColor)}
      </Svg>
    );
  };
  CommonIcon.displayName = name;
  CommonIcon.defaultProps = {width: 24, height: 24};

  return CommonIcon;
};
