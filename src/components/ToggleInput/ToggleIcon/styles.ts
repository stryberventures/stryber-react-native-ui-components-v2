import {createUseStyles} from '../../Theme';
import {ToggleIconProps} from './index';

export default createUseStyles((theme, color: ToggleIconProps['color']) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.colors.neutralGray.dark600,
    backgroundColor: theme.colors.contrast.white,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
  },
  radio: {
    borderRadius: 10,
  },
  checkbox: {
    borderRadius: 4,
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
    width: 6,
    height: 6,
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
}));
