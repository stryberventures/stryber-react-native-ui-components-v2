import {StyleSheet} from 'react-native';
import {ThemeType} from '../Theme';
import {IButtonProps} from './index';

export const getStyles = (
  theme: ThemeType,
  type: IButtonProps['type'],
  size: IButtonProps['size'],
) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme[type!].main,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonPressed: {
      backgroundColor: theme[type!].dark,
    },
    text: {
      color: theme.primary.contrast,
      fontSize: size === 'mini' ? 10 : 16,
      fontWeight: '700',
    },
    disabled: {
      opacity: 0.3,
    },
    mini: {
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    small: {
      paddingHorizontal: 16,
      paddingVertical: 8,
    },
    medium: {
      paddingHorizontal: 24,
      paddingVertical: 16,
    },
    large: {
      paddingHorizontal: 32,
      paddingVertical: 24,
    },
    leftIcon: {
      width: size === 'mini' ? 14 : 20,
      height: size === 'mini' ? 14 : 20,
      marginRight: 10,
    },
    rightIcon: {
      width: size === 'mini' ? 14 : 20,
      height: size === 'mini' ? 14 : 20,
      marginLeft: 10,
    },
    flat: {
      borderRadius: 0,
    },
    round: {
      borderRadius: 4,
    },
    circle: {
      borderRadius: 100,
    },
  });
