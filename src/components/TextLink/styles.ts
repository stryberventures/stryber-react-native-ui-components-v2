import {createUseStyles} from '../Theme';
import {ITextLinkProps} from './index';

export default createUseStyles((theme, color: ITextLinkProps['color']) => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 'auto',
    borderRadius: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pressedContainer: {
    backgroundColor: theme[color!].light,
  },
  text: {
    fontSize: 16,
    color: theme[color!].main,
    fontWeight: '700',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  disabled: {
    opacity: 0.4,
  },
}));
