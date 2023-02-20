import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: theme.spacing['8'],
    color: theme.colors.text.tint,
  },
  disabledHint: {
    color: theme.colors.text.disabled,
  },
}));
