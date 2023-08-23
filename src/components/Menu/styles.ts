import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  menu: {
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    backgroundColor: theme.colors.background.white,
  },
  list: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  small: {
    width: 136,
  },
  medium: {
    width: 200,
  },
  large: {
    width: 343,
  },
}));
