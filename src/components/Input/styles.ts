import {createUseStyles, isRTL} from '../Theme';

export default createUseStyles(theme => ({
  input: {
    flex: 1,
    height: 24,
    padding: 0,
    color: theme.colors.text.headline,
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: theme.fontFamily,
  },
  disabledInput: {
    color: theme.colors.text.disabled,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: isRTL ? 'row-reverse' : 'row',
  },
  additionalText: {
    color: theme.colors.text.headline,
    alignSelf: 'center',
    lineHeight: 24,
  },
  removeButton: {
    marginRight: theme.spacing['8'],
  },
}));
