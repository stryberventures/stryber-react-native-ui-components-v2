import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: 4,
    color: theme.colors.text.tint,
  },
  disabledHint: {
    color: theme.colors.text.disabled,
  },
}));
