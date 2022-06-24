import {TextStyle, ViewStyle} from 'react-native';
import {createUseStyles} from '../Theme';
import {IButtonProps} from './index';

interface IButtonTypeStyle {
  button: ViewStyle;
  buttonPressed: ViewStyle;
  text: TextStyle;
}

export const useStyles = createUseStyles(
  (
    theme,
    color: IButtonProps['color'],
    size: IButtonProps['size'],
    variant: IButtonProps['variant'],
  ) => {
    //Generate different styles based on button type
    const buttonVariantStyle = (): IButtonTypeStyle => {
      const containedStyle: IButtonTypeStyle = {
        button: {
          backgroundColor: theme[color!].main,
        },
        buttonPressed: {
          backgroundColor: theme[color!].dark,
        },
        text: {
          color: theme.primary.contrast,
        },
      };
      switch (variant) {
        case 'contained':
          return containedStyle;
        case 'outlined':
          return {
            button: {
              backgroundColor: 'transparent',
              borderWidth: 2,
              borderColor: theme[color!].main,
            },
            buttonPressed: {
              backgroundColor: theme[color!].light,
              borderWidth: 0,
            },
            text: {
              color: theme[color!].main,
            },
          };
        default:
          return containedStyle;
      }
    };

    return {
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        ...buttonVariantStyle().button,
      },
      buttonPressed: {
        ...buttonVariantStyle().buttonPressed,
      },
      text: {
        fontSize: size === 'mini' ? 10 : 16,
        fontFamily: theme.fontFamily,
        fontWeight: '700',
        ...buttonVariantStyle().text,
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
    };
  },
);
