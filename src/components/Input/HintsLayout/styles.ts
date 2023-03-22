import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  hintsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  lengthOnly: {
    justifyContent: 'flex-end',
  },
  message: {
    flex: 1,
    paddingRight: theme.spacing['8'],
  },
  messageWithPadding: {
    paddingLeft: theme.spacing['12'] + 1,
  },
}));
