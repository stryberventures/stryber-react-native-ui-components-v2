import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  text: {
    textTransform: 'uppercase',
    color: theme.primary.main,
    fontSize: 16,
    fontWeight: '700',
  },
  pressedText: {
    color: theme.primary.light,
  },
}));
