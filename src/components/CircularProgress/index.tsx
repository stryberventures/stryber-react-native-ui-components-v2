import React, {useEffect} from 'react';
import {ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import Svg, {Circle} from 'react-native-svg';
import {useTheme} from '../Theme';
import useStyles from './styles';

const AnimatedSVGCircle = Animated.createAnimatedComponent(Circle);

export interface ICircularProgress {
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary';
  shape?: 'flat' | 'round';
  value?: number;
  style?: ViewStyle;
  size?: number;
  thickness?: number;
}

const CircularProgress: React.FC<ICircularProgress> = argProps => {
  const {
    variant = 'indeterminate',
    value = 0,
    size = 48,
    thickness = 3.6,
    color = 'primary',
    shape = 'flat',
    style,
  } = argProps;
  const props = {
    ...argProps,
    variant,
    value,
    size,
    thickness,
    color,
    shape,
  };
  const styles = useStyles(props);
  const {theme} = useTheme();
  const circumference = 2 * Math.PI * ((size - thickness) / 2);

  let rootAnimationValue = useSharedValue(0);
  const rootAnimatedValue = useDerivedValue(() =>
    withRepeat(
      withTiming(rootAnimationValue.value, {
        duration: 1400,
        easing: Easing.linear,
      }),
      -1,
    ),
  );

  const rootAnimatedStyle = useAnimatedStyle(() => {
    if (variant === 'determinate') {
      return {};
    }
    return {
      transform: [
        {
          rotateZ:
            interpolate(rootAnimatedValue.value, [0, 1], [0, 360]) + 'deg',
        },
      ],
    };
  });

  const circleAnimationValue = useSharedValue(0);
  const circleAnimatedValue = useDerivedValue(() =>
    withRepeat(
      withTiming(circleAnimationValue.value, {
        duration: 1400,
        easing: Easing.out(Easing.cubic),
      }),
      -1,
    ),
  );

  const determinateCircleAnimationValue = useSharedValue(props.value);
  const determinateCircleAnimatedValue = useDerivedValue(() =>
    withTiming(determinateCircleAnimationValue.value, {
      duration: 400,
      easing: Easing.out(Easing.cubic),
    }),
  );

  // @ts-ignore
  const circleAnimatedProps = useAnimatedProps(() => {
    if (variant === 'determinate') {
      return {
        strokeDasharray: circumference.toFixed(3),
        strokeDashoffset:
          ((100 - determinateCircleAnimatedValue.value) / 100) * circumference,
      };
    }
    return {
      strokeDasharray: [
        interpolate(circleAnimatedValue.value, [0, 0.5, 1], [1, 100, 100]),
        200,
      ],
      strokeDashoffset: interpolate(
        circleAnimatedValue.value,
        [0, 0.5, 1],
        [0, -15, -125],
      ),
    };
  });

  useEffect(() => {
    rootAnimationValue.value = 1;
    circleAnimationValue.value = 1;
  }, []);
  useEffect(() => {
    determinateCircleAnimationValue.value = props.value;
  }, [props.value]);

  return (
    <Animated.View style={[styles.root, rootAnimatedStyle, style]}>
      <Svg viewBox={`${size / 2} ${size / 2} ${size} ${size}`}>
        <AnimatedSVGCircle
          animatedProps={circleAnimatedProps}
          cx={size}
          cy={size}
          r={(size - thickness) / 2}
          fill="none"
          stroke={theme.colors[props.color].main500}
          strokeWidth={thickness}
          strokeLinecap={shape === 'round' ? 'round' : 'butt'}
        />
      </Svg>
    </Animated.View>
  );
};

export default CircularProgress;
