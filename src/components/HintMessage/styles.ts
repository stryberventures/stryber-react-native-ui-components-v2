import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  hint: {
    marginTop: theme.spacing['8'],
    color: theme.colors.text.secondary,
  },
  disabledHint: {
    color: theme.colors.text.disabled,
  },
}));
