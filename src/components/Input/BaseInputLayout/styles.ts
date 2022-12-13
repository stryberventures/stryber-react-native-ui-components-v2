import {createUseStyles} from '../../Theme';
import {IBaseInputLayoutProps, IInputSize} from './index';

const inputConstants = {
  OUTLINE_SIZE: 8,
  BORDER_WIDTH: 1,
};

export default createUseStyles(
  (theme, inputSize: IInputSize, color: IBaseInputLayoutProps['color']) => ({
    baseInput: {
      borderWidth: inputConstants.BORDER_WIDTH,
      borderColor: theme.colors.neutralGray.medium300,
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.colors.background.white,
      elevation: 4,
      shadowColor: 'transparent',
      zIndex: 2,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    noLabel: {
      paddingVertical: 12.5,
    },
    baseInputFocused: {
      borderColor: theme.colors[color!].main500,
    },
    label: {
      color: theme.colors.text.secondary,
    },
    focusedOutline: {
      position: 'absolute',
      width: inputSize.width + inputConstants.OUTLINE_SIZE,
      height: inputSize.height + inputConstants.OUTLINE_SIZE,
      backgroundColor: theme.colors[color!].extraLight50,
      borderRadius: 4,
      left: -4,
      top: -4,
      zIndex: -3,
    },
    error: {
      borderColor: theme.colors.error.medium300,
    },
    errorFocusedOutline: {
      backgroundColor: theme.colors.error.extraLight50,
    },
    disabled: {
      backgroundColor: theme.colors.background.extraLightGrey,
    },
    disabledLabel: {
      color: theme.colors.text.disabled,
    },
    mainContent: {
      alignSelf: 'flex-start',
      flex: 1,
    },
  }),
);
