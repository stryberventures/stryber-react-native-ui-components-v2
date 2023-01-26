import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  error: {
    color: theme.colors.error.dark600,
    lineHeight: 17,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing['8'],
  },
  errorIcon: {
    marginRight: theme.spacing['4'],
  },
}));
