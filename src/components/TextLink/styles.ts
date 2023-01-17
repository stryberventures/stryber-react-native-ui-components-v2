import {createUseStyles} from '../Theme';
import {ITextLinkProps} from './index';

export default createUseStyles(
  (theme, color: Required<ITextLinkProps>['color']) => ({
    container: {
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    pressedText: {
      textDecorationColor: theme.colors[color].medium300,
      textDecorationLine: 'underline',
    },
    leftIcon: {
      marginRight: 2,
    },
    rightIcon: {
      marginLeft: 2,
    },
  }),
);
