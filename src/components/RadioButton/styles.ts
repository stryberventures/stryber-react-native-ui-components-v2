import {createUseStyles} from '../Theme';
import {IRadioButtonProps} from './index';

const radioButtonConst = {
  SIZE: {
    medium: 20,
    small: 16,
  },
  TEXT_MARGIN: 8,
};

export default createUseStyles((theme, size: IRadioButtonProps['size']) => ({
  radioText: {
    color: theme.text.secondary,
    fontWeight: '500',
    marginLeft: radioButtonConst.TEXT_MARGIN,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMargin: {
    marginLeft: radioButtonConst.SIZE[size!] + radioButtonConst.TEXT_MARGIN,
  },
  disabled: {
    opacity: 0.45,
  },
}));
