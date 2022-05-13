import {createUseStyles} from '../Theme';
import {IToggleInputProps} from './index';

const toggleInputConst = {
  SIZE: {
    medium: 20,
    small: 16,
  },
  TEXT_MARGIN: 8,
};

export default createUseStyles((theme, size: IToggleInputProps['size']) => ({
  toggleInputText: {
    color: theme.text.secondary,
    fontWeight: '500',
    marginLeft: toggleInputConst.TEXT_MARGIN,
  },
  toggleInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMargin: {
    marginLeft: toggleInputConst.SIZE[size!] + toggleInputConst.TEXT_MARGIN,
  },
  disabled: {
    opacity: 0.45,
  },
}));
