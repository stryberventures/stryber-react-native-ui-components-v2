import {TextStyle, ViewStyle} from 'react-native';
import {createUseStyles} from '../Theme';
import {IButtonProps} from './index';

const BORDER_WIDTH = 2;

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
          borderColor: theme[color!].main,
        },
        buttonPressed: {
          backgroundColor: theme[color!].dark,
          borderColor: theme[color!].dark,
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
              borderColor: theme[color!].main,
            },
            buttonPressed: {
              backgroundColor: theme[color!].light,
              borderColor: theme[color!].light,
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
        borderWidth: BORDER_WIDTH,
        ...buttonVariantStyle().button,
      },
      buttonPressed: {
        ...buttonVariantStyle().buttonPressed,
      },
      text: {
        fontSize: size === 'mini' ? 10 : 16,
        fontFamily: theme.fontFamily,
        lineHeight: 24,
        fontWeight: '700',
        ...buttonVariantStyle().text,
      },
      miniText: {
        lineHeight: 15,
      },
      disabled: {
        opacity: 0.3,
      },
      mini: {
        paddingHorizontal: 8 - BORDER_WIDTH,
        paddingVertical: 4 - BORDER_WIDTH,
      },
      small: {
        paddingHorizontal: 16 - BORDER_WIDTH,
        paddingVertical: 8 - BORDER_WIDTH,
      },
      medium: {
        paddingHorizontal: 24 - BORDER_WIDTH,
        paddingVertical: 16 - BORDER_WIDTH,
      },
      large: {
        paddingHorizontal: 32 - BORDER_WIDTH,
        paddingVertical: 24 - BORDER_WIDTH,
      },
      leftIcon: {
        marginRight: 10,
      },
      rightIcon: {
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
