import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    color: theme.text.primary,
    padding: 0,
    textAlignVertical: 'top',
    height: 17,
    width: '100%',
  },
  disabledInput: {
    color: theme.text.disabled,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  prefix: {
    height: 17,
    color: theme.text.primary,
    fontFamily: theme.fontFamily,
  },
}));
