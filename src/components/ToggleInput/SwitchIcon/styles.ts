import {createUseStyles} from '../../Theme';
import {IToggleInputProps} from '../index';

export const SWITCH_SIZE = {
  small: {
    width: 29,
    height: 17,
  },
  medium: {
    width: 44,
    height: 24,
  },
};

export const CIRCLE_SIZE = {
  small: {
    width: 13,
    height: 13,
  },
  medium: {
    width: 20,
    height: 20,
  },
};

export default createUseStyles((theme, color: IToggleInputProps['color']) => ({
  container: {
    width: 44,
    height: 24,
    backgroundColor: theme.colors.neutralGray.medium400,
    borderRadius: 12,
    padding: 2,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.colors.background.white,
  },
  pressedUncheckedContainer: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
  checked: {
    backgroundColor: theme.colors[color!].main500,
  },
  pressedCheckedContainer: {
    backgroundColor: theme.colors[color!].medium300,
  },
  borderRadius: {
    borderRadius: 10,
  },
  disabled: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
}));
