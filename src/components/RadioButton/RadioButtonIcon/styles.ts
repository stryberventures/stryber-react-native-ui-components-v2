import {createUseStyles} from '../../Theme';
import {IRadioButtonProps} from '../index';

const CHECKED_ICON_SIZE = {
  medium: 8,
  small: 6,
};

export default createUseStyles((theme, size: IRadioButtonProps['size']) => ({
  container: {
    borderWidth: 1,
    borderColor: theme.primary.main,
    borderRadius: 10,
    backgroundColor: theme.primary.contrast,
    justifyContent: 'center',
    alignItems: 'center',
  },
  medium: {
    width: 20,
    height: 20,
  },
  small: {
    width: 16,
    height: 16,
  },
  pressed: {
    backgroundColor: theme.primary.light,
  },
  checked: {
    backgroundColor: theme.primary.main,
  },
  pressedChecked: {
    backgroundColor: theme.primary.dark,
  },
  checkedIcon: {
    width: CHECKED_ICON_SIZE[size!],
    height: CHECKED_ICON_SIZE[size!],
    backgroundColor: theme.primary.contrast,
    borderRadius: 4,
  },
}));
