import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  buttonContainer: {
    width: 20,
    height: 20,
    backgroundColor: theme.colors.neutralGray.medium300,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
