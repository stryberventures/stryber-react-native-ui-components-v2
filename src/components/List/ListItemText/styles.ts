import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  label: {
    marginBottom: 2,
    color: theme.colors.text.secondary,
  },
  title: {
    color: theme.colors.text.headline,
    fontWeight: '400',
  },
  subtitle: {
    color: theme.colors.text.secondary,
    marginTop: 2,
  },
  disabled: {
    color: theme.colors.text.disabled,
  },
}));
