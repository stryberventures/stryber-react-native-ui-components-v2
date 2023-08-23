import {createUseStyles} from '../../Theme';
import {getColorFromVariant} from './index';

export default createUseStyles(
  (theme, color: ReturnType<typeof getColorFromVariant>) => ({
    snackbarContent: {
      backgroundColor: color
        ? theme.colors[color].extraLight50
        : theme.colors.neutralGray.extraDark900,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: color
        ? theme.colors[color].medium300
        : theme.colors.neutralGray.extraDark900,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    withDescription: {
      marginBottom: 4,
    },
    text: {
      color: color ? theme.colors[color].dark600 : theme.colors.contrast.white,
    },
    topIcons: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 12,
    },
    closeIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 20,
      height: 20,
    },
  }),
);
