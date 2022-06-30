import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  pressedContainer: {
    backgroundColor: theme.default.extraLight,
  },
  text: {
    color: theme.default.dark,
    lineHeight: 17,
  },
  activeContainer: {
    backgroundColor: theme.default.light,
  },
}));
