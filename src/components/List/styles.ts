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
    color: theme.colors.text.secondary,
  },
  subtitle: {
    color: theme.colors.text.tint,
  },
  leftContent: {
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
