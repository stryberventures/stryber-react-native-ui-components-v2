import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  line: {
    height: 2,
    width: 10,
    backgroundColor: theme.colors.neutralGray.main500,
  },
  rotatedLine: {
    height: 10,
    width: 2,
    position: 'absolute',
  },
  divider: {
    width: 1,
    height: 22,
    backgroundColor: theme.colors.neutralGray.medium300,
    marginHorizontal: 6,
  },
}));
