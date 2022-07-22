import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  dropdown: {
    paddingHorizontal: 0,
    paddingVertical: 0,
  },
  content: {
    maxHeight: 175,
  },
  multiselectItem: {
    paddingHorizontal: 8,
    paddingVertical: 8.5,
  },
  multiselectItemPressed: {
    backgroundColor: theme.default.extraLight,
  },
  innerContent: {
    paddingVertical: 8,
  },
}));
