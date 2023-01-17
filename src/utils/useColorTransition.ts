import {useRef} from 'react';
import {Animated, Easing} from 'react-native';
import {hexToRgb} from './index';

export const useColorTransition = (
  condition: boolean,
  fromHexColor: string,
  toHexColor: string,
) => {
  const animationValue = useRef(new Animated.Value(condition ? 1 : 0)).current;

  const interpolation = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [hexToRgb(fromHexColor), hexToRgb(toHexColor)],
  });

  const runAnimation = () => {
    Animated.timing(animationValue, {
      toValue: condition ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  return {interpolation, runAnimation};
};
