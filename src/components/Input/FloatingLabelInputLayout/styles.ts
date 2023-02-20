import {createUseStyles} from '../../Theme';
import {IFloatingLabelInputLayoutProps} from './index';

export default createUseStyles(
  (
    theme,
    color: IFloatingLabelInputLayoutProps['color'],
    isFocused: IFloatingLabelInputLayoutProps['isFocused'],
    isLeftContent: boolean,
    isRightContent: boolean,
  ) => ({
    input: {
      borderWidth: isFocused ? 2 : 1,
      borderColor: theme.colors.neutralGray.medium300,
      borderRadius: 4,
      paddingHorizontal: isFocused ? 11 : 12,
      paddingVertical: isFocused ? 7 : 8,
      backgroundColor: theme.colors.background.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 56,
    },
    inputFocused: {
      borderColor: theme.colors[color!].main500,
    },
    label: {
      color: theme.colors.text.secondary,
      fontWeight: '400',
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
      alignSelf: 'flex-end',
      flex: 1,
      marginLeft: isLeftContent ? 8 : 0,
      marginRight: isRightContent ? 8 : 0,
    },
    animatedLabelContainer: {
      position: 'absolute',
      left: 0,
      top: -4,
    },
    messageMargin: {
      marginLeft: theme.spacing['12'],
    },
  }),
);
