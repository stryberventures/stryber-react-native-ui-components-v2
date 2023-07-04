import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  snackbarOverlay: {
    flex: 1,
  },
  snackbarWrapper: {
    flex: 1,
    paddingHorizontal: theme.spacing[24],
    paddingVertical: theme.spacing[16],
  },
  top: {
    justifyContent: 'flex-start',
  },
  center: {
    justifyContent: 'center',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
}));
