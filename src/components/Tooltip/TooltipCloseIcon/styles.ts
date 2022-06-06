import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    padding: 6.5,
    backgroundColor: theme.default.light,
    borderRadius: 4,
    marginLeft: 8,
  },
  pressedContainer: {
    backgroundColor: theme.default.main,
  },
}));
