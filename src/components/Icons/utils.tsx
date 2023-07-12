import React from 'react';
import {ICommonIconProps, TCommonIconVariants, TPathDProp} from './types';
import Svg, {Path} from 'react-native-svg';
import {useTheme} from '../Theme';
import {View, ColorValue} from 'react-native';

export const createPathDComponent = (
  pathDProp: TPathDProp | TPathDProp[],
  fill: ColorValue,
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
    const {
      fill,
      variant = firstVariant,
      width = 24,
      height = 24,
      style,
      ...rest
    } = props;
    const {theme} = useTheme();
    const fillColor = fill || theme.colors.text.headline;

    return (
      // @ts-ignore
      <View style={[{width, height}, style]}>
        <Svg {...rest} width="100%" height="100%" viewBox="0 0 24 24">
          {createPathDComponent(
            parseSvgPathD(iconVariants[variant]),
            fillColor,
          )}
        </Svg>
      </View>
    );
  };
  CommonIcon.displayName = name;

  return CommonIcon;
};
