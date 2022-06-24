import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  error: {
    color: theme.error.dark,
    marginTop: 4,
    fontFamily: theme.fontFamily,
  },
}));
