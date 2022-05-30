import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    color: theme.text.primary,
    padding: 0,
    textAlignVertical: 'top',
    height: 20,
  },
  disabledInput: {
    color: theme.text.disabled,
  },
}));
