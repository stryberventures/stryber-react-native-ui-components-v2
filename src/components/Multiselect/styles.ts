import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  content: {
    maxHeight: 160,
  },
  multiselectItem: {
    paddingHorizontal: 8,
    paddingVertical: 8.5,
  },
  multiselectItemPressed: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
  innerContent: {
    paddingVertical: 8,
  },
  checkboxText: {
    fontSize: 14,
    fontWeight: '400',
  },
}));
