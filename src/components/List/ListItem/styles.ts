import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  listItem: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.colors.background.white,
  },
  leftContent: {
    marginRight: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  large: {
    paddingVertical: 16,
  },
  medium: {
    paddingVertical: 12,
  },
  small: {
    paddingVertical: 8,
  },
  pressed: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
  selected: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutralGray.light200,
  },
}));
