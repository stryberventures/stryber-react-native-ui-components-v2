import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    color: theme.colors.text.headline,
    padding: 0,
    textAlignVertical: 'center',
    height: 24,
    fontSize: 16,
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
    color: theme.colors.text.headline,
    alignSelf: 'center',
    lineHeight: 24,
  },
}));
