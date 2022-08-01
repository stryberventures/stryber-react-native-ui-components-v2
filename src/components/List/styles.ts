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
    fontWeight: '500',
  },
  subtitle: {
    color: theme.text.hint,
    fontWeight: '400',
  },
  leftContent: {
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
