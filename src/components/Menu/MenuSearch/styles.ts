import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  inputWrapper: {
    borderWidth: 0,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutralGray.light200,
    height: theme.spacing[48],
    justifyContent: 'center',
  },
}));
