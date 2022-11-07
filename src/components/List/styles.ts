import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  listItem: {
    paddingHorizontal: 8,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: theme.text.secondary,
  },
  subtitle: {
    color: theme.text.hint,
  },
  leftContent: {
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
