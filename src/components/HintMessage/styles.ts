import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: 4,
    color: theme.text.hint,
  },
  disabledHint: {
    color: theme.text.disabled,
  },
}));
