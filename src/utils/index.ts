import {Animated} from 'react-native';

export const validateInputValueLength = (value: string) => {
  if (value.length >= 40) {
    return value.slice(0, 40) + '...';
  }
  return value;
};

export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};

export const getAnimatedValue = (
  value: Animated.Value | Animated.AnimatedInterpolation<number>,
) => {
  return Number(JSON.stringify(value));
};

export const getNumberLength = (num: number) => String(num).length;

export const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16,
      )})`
    : '';
};
