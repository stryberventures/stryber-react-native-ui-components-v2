import {createUseStyles} from '../../Theme';
import {ILabelOutsideInputLayoutProps} from './index';

export default createUseStyles(
  (
    theme,
    color: ILabelOutsideInputLayoutProps['color'],
    isFocused: ILabelOutsideInputLayoutProps['isFocused'],
    isLeftContent: boolean,
    isRightContent: boolean,
    size: ILabelOutsideInputLayoutProps['size'],
    unBounded: boolean,
  ) => ({
    input: {
      borderWidth: unBounded ? 0 : 1,
      borderColor: theme.colors.neutralGray.medium300,
      borderRadius: 4,
      paddingHorizontal: isFocused && !unBounded ? 11 : 12,
      paddingVertical:
        size === 'medium'
          ? isFocused && !unBounded
            ? 10
            : 11
          : isFocused && !unBounded
          ? 14
          : 15,
      backgroundColor: theme.colors.background.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    inputFocused: {
      borderColor: theme.colors[color!].main500,
      borderWidth: 2,
    },
    label: {
      color: theme.colors.text.headline,
      marginBottom: theme.spacing['8'],
      lineHeight: 17,
    },
    error: {
      borderColor: theme.colors.error.main500,
    },
    errorFocusedOutline: {
      backgroundColor: theme.colors.error.extraLight50,
    },
    disabledLabel: {
      color: theme.colors.text.disabled,
    },
    mainContent: {
      alignSelf: 'flex-start',
      flex: 1,
      marginLeft: isLeftContent ? 8 : 0,
      marginRight: isRightContent ? 8 : 0,
    },
  }),
);
