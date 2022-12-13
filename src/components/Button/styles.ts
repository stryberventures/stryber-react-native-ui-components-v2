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
          backgroundColor: theme.colors[color!].medium500,
          borderColor: theme.colors[color!].medium500,
        },
        buttonPressed: {
          backgroundColor: theme.colors[color!].dark600,
          borderColor: theme.colors[color!].dark600,
        },
        text: {
          color: theme.colors.contrast.white,
        },
      };
      switch (variant) {
        case 'contained':
          return containedStyle;
        case 'outlined':
          return {
            button: {
              backgroundColor: 'transparent',
              borderColor: theme.colors[color!].medium500,
            },
            buttonPressed: {
              backgroundColor: theme.colors[color!].extraLight50,
              borderColor: theme.colors[color!].extraLight50,
            },
            text: {
              color: theme.colors[color!].medium500,
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
        ...buttonVariantStyle().text,
      },
      miniText: {
        fontWeight: '700',
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
