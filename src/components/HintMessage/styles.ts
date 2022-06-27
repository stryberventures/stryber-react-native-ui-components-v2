import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: 4,
    color: theme.text.hint,
    fontFamily: theme.fontFamily,
  },
  disabledHint: {
    color: theme.text.disabled,
  },
}));
