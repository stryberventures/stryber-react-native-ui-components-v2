import {createUseStyles} from '../../Theme';
import {IToggleInputProps} from '../index';

export const SWITCH_SIZE = {
  width: 44,
  height: 24,
};

export default createUseStyles((theme, color: IToggleInputProps['color']) => ({
  container: {
    width: SWITCH_SIZE.width,
    height: SWITCH_SIZE.height,
    backgroundColor: theme.colors.neutralGray.medium300,
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
    backgroundColor: theme.colors.neutralGray.main500,
  },
  checked: {
    backgroundColor: theme.colors[color!].main500,
  },
  pressedCheckedContainer: {
    backgroundColor: theme.colors[color!].dark600,
  },
}));
