import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPressed: {
    backgroundColor: theme.default.extraLight,
  },
}));
