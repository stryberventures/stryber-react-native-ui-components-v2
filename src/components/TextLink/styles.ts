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
    backgroundColor: theme.colors[color!].extraLight50,
  },
  text: {
    color: theme.colors[color!].main500,
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
