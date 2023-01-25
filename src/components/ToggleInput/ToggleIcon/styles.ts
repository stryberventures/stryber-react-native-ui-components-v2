import {createUseStyles} from '../../Theme';
import {IToggleInputProps} from '../index';
import {ToggleIconProps} from './index';

const CHECKED_ICON_SIZE = {
  medium: 6,
  small: 4,
};

const CHECKBOX_BORDER_RADIUS = {
  medium: 4,
  small: 2,
};

export const TOGGLE_ICON_SIZE = {
  medium: 20,
  small: 16,
};

export default createUseStyles(
  (
    theme,
    size: IToggleInputProps['size'],
    color: ToggleIconProps['color'],
  ) => ({
    container: {
      borderWidth: 1,
      borderColor: theme.colors.neutralGray.dark600,
      backgroundColor: theme.colors.contrast.white,
      justifyContent: 'center',
      alignItems: 'center',
      width: TOGGLE_ICON_SIZE[size!],
      height: TOGGLE_ICON_SIZE[size!],
    },
    radio: {
      borderRadius: 10,
    },
    checkbox: {
      borderRadius: CHECKBOX_BORDER_RADIUS[size!],
    },
    pressed: {
      backgroundColor: theme.colors.neutralGray.light200,
    },
    checked: {
      backgroundColor: theme.colors[color!].main500,
      borderColor: theme.colors[color!].main500,
    },
    pressedChecked: {
      backgroundColor: theme.colors[color!].medium300,
      borderColor: theme.colors[color!].medium300,
    },
    checkedIcon: {
      width: CHECKED_ICON_SIZE[size!],
      height: CHECKED_ICON_SIZE[size!],
      backgroundColor: theme.colors.contrast.white,
      borderRadius: 4,
    },
    error: {
      borderColor: theme.colors.error.dark600,
    },
    errorChecked: {
      backgroundColor: theme.colors.error.main500,
      borderColor: theme.colors.error.main500,
    },
    disabled: {
      borderColor: theme.colors.neutralGray.medium300,
    },
    checkedDisabled: {
      backgroundColor: theme.colors.neutralGray.medium300,
    },
    disabledIcon: {
      backgroundColor: theme.colors[color!].main500,
    },
    indeterminate: {
      width: 9.09,
      height: 1.82,
      backgroundColor: '#ffffff',
    },
  }),
);
