import {TextStyle, ViewStyle} from 'react-native';
import {createUseStyles} from '../Theme';
import {IButtonProps} from './index';

interface IButtonTypeStyle {
  button: ViewStyle;
  buttonPressed: ViewStyle;
  buttonDisabled: ViewStyle;
  text: TextStyle;
  textPressed: TextStyle;
  textDisabled: TextStyle;
}

const BORDER_WIDTH = {
  mini: 1,
  small: 1.5,
  medium: 1.5,
  large: 1.5,
};

const ICON_SPACES = {
  mini: 4,
  small: 10,
  medium: 10,
  large: 10,
};

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
          backgroundColor: theme.colors[color!].main500,
          borderColor: theme.colors[color!].main500,
        },
        buttonPressed: {
          backgroundColor: theme.colors[color!].medium300,
          borderColor: theme.colors[color!].medium300,
        },
        buttonDisabled: {
          backgroundColor: theme.colors.neutralGray.light200,
          borderColor: theme.colors.neutralGray.light200,
        },
        text: {
          color: theme.colors.contrast.white,
        },
        textPressed: {
          color: theme.colors.contrast.white,
        },
        textDisabled: {
          color: theme.colors.contrast.white,
        },
      };
      const outlinedStyle: IButtonTypeStyle = {
        button: {
          backgroundColor: 'transparent',
          borderColor: theme.colors[color!].main500,
        },
        buttonPressed: {
          backgroundColor: theme.colors[color!].light100,
          borderColor: theme.colors[color!].main500,
        },
        buttonDisabled: {
          backgroundColor: 'transparent',
          borderColor: theme.colors.neutralGray.light200,
        },
        text: {
          color: theme.colors[color!].main500,
        },
        textDisabled: {
          color: theme.colors.neutralGray.light200,
        },
        textPressed: {
          color: theme.colors[color!].dark600,
        },
      };
      const ghostStyle: IButtonTypeStyle = {
        ...outlinedStyle,
        button: {
          ...outlinedStyle.button,
          borderColor: 'transparent',
        },
        buttonPressed: {
          ...outlinedStyle.buttonPressed,
          borderColor: 'transparent',
        },
        buttonDisabled: {
          ...outlinedStyle.buttonDisabled,
          borderColor: 'transparent',
        },
      };

      switch (variant) {
        case 'contained':
          return containedStyle;
        case 'outlined':
          return outlinedStyle;
        case 'ghost':
          return ghostStyle;
        default:
          return containedStyle;
      }
    };

    return {
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: BORDER_WIDTH[size!],
        ...buttonVariantStyle().button,
      },
      buttonPressed: {
        ...buttonVariantStyle().buttonPressed,
      },
      text: {
        fontWeight: '700',
        ...buttonVariantStyle().text,
      },
      textPressed: {
        ...buttonVariantStyle().textPressed,
      },
      textDisabled: {
        ...buttonVariantStyle().textDisabled,
      },
      buttonDisabled: {
        ...buttonVariantStyle().buttonDisabled,
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
        paddingHorizontal: 16,
        paddingVertical: 16,
      },
      large: {
        paddingHorizontal: 32,
        paddingVertical: 24,
      },
      leftIcon: {
        marginRight: ICON_SPACES[size!],
      },
      rightIcon: {
        marginLeft: ICON_SPACES[size!],
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
      icon: {
        alignSelf: 'flex-start',
        paddingHorizontal: ICON_SPACES[size!],
        paddingVertical: ICON_SPACES[size!],
      },
    };
  },
);
