import {createUseStyles} from '../../Theme';
import {IToggleInputProps} from '../index';
import {ToggleIconProps} from './index';

const CHECKED_ICON_SIZE = {
  medium: 8,
  small: 6,
};

const CHECKBOX_BORDER_RADIUS = {
  medium: 6,
  small: 4,
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
      borderColor: theme[color!].main,
      backgroundColor: theme[color!].contrast,
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
      backgroundColor: theme[color!].light,
    },
    checked: {
      backgroundColor: theme[color!].main,
    },
    pressedChecked: {
      backgroundColor: theme[color!].dark,
    },
    checkedIcon: {
      width: CHECKED_ICON_SIZE[size!],
      height: CHECKED_ICON_SIZE[size!],
      backgroundColor: theme[color!].contrast,
      borderRadius: 4,
    },
  }),
);
