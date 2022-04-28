import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    color: theme.text.primary,
  },
  disabledInput: {
    color: theme.text.disabled,
  },
}));
