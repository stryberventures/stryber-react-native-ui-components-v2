import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
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
  rightContent: {
    marginRight: theme.spacing['8'],
  },
}));
