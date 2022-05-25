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
    backgroundColor: theme.default.main,
    borderRadius: 12,
    padding: 2,
  },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: theme.background.main,
  },
  pressedUncheckedContainer: {
    backgroundColor: theme.default.dark,
  },
  checked: {
    backgroundColor: theme[color!].main,
  },
  pressedCheckedContainer: {
    backgroundColor: theme[color!].dark,
  },
}));
