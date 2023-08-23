import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  withRepeat,
  useAnimatedStyle,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

import useStyles from './styles';

export interface ILinearProgress {
  variant?: 'determinate' | 'indeterminate';
  color?: 'primary' | 'secondary';
  shape?: 'flat' | 'round';
  value?: number;
  style?: ViewStyle;
}
const LinearProgress: React.FC<ILinearProgress> = argProps => {
  const {
    variant = 'indeterminate',
    color = 'primary',
    shape = 'flat',
    value = 0,
  } = argProps;
  const props = {
    ...argProps,
    variant,
    color,
    shape,
    value,
  };
  const styles = useStyles(props);
  const firstAnimatingValue = useSharedValue(0);
  const firstAnimatedValue = useDerivedValue(() =>
    withRepeat(
      withTiming(firstAnimatingValue.value, {
        duration: 2100,
        easing: Easing.linear,
      }),
      -1,
    ),
  );
  const firstStyle = useAnimatedStyle(() => ({
    left: `${interpolate(
      firstAnimatedValue.value,
      [0, 0.6, 1],
      [-35, 100, 100],
    )}%`,
    right: `${interpolate(
      firstAnimatedValue.value,
      [0, 0.6, 1],
      [100, -90, -90],
    )}%`,
  }));

  const secondAnimatingValue = useSharedValue(0);
  const secondAnimatedValue = useDerivedValue(() =>
    withRepeat(
      withTiming(secondAnimatingValue.value, {
        duration: 2100,
        easing: Easing.linear,
      }),
      -1,
    ),
  );
  const secondStyle = useAnimatedStyle(() => ({
    left: `${interpolate(
      secondAnimatedValue.value,
      [0, 0.6, 1],
      [-200, 107, 107],
    )}%`,
    right: `${interpolate(
      secondAnimatedValue.value,
      [0, 0.6, 1],
      [100, -8, -8],
    )}%`,
  }));

  const determinateAnimatingValue = useSharedValue(props.value);
  const determinateAnimatedValue = useDerivedValue(() =>
    withTiming(determinateAnimatingValue.value, {
      duration: 400,
      easing: Easing.linear,
    }),
  );
  const determinateStyle = useAnimatedStyle(() => ({
    left: 0,
    right: `${interpolate(
      determinateAnimatedValue.value,
      [0, 100],
      [100, 0],
    )}%`,
  }));

  useEffect(() => {
    firstAnimatingValue.value = 1;
    secondAnimatingValue.value = 1;
  }, []);
  useEffect(() => {
    determinateAnimatingValue.value = props.value;
  }, [props.value]);

  return (
    <View style={[styles.root, props.style]}>
      <View style={styles.progressContainer}>
        {props.variant === 'indeterminate' && (
          <>
            <Animated.View style={[styles.progressLine, firstStyle]} />
            <Animated.View style={[styles.progressLine, secondStyle]} />
          </>
        )}
        {props.variant === 'determinate' && (
          <Animated.View style={[styles.progressLine, determinateStyle]} />
        )}
      </View>
    </View>
  );
};

export default LinearProgress;
