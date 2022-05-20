import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 8,
  },
  content: {
    maxHeight: 170,
  },
  multiselectItem: {
    paddingHorizontal: 8,
    paddingVertical: 8.5,
  },
  multiselectItemPressed: {
    backgroundColor: theme.default.hover,
  },
}));
