import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  iconContainer: {
    marginRight: 16,
  },
  checkboxText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
  },
  multiselectItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  multiselectItemPressed: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
}));
