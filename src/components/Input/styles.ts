import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    color: theme.colors.text.headline,
    padding: 0,
    textAlignVertical: 'top',
    height: 17,
    width: '100%',
    fontFamily: theme.fontFamily,
  },
  disabledInput: {
    color: theme.colors.text.disabled,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  prefix: {
    height: 17,
    color: theme.colors.text.headline,
  },
}));
