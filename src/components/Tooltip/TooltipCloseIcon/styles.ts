import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    padding: 6.5,
    backgroundColor: theme.colors.neutralGray.light200,
    borderRadius: 4,
    marginLeft: 8,
  },
  pressedContainer: {
    backgroundColor: theme.colors.neutralGray.medium300,
  },
}));
