import {createUseStyles, isRTL} from '../Theme';
import {IAvatarProps} from './index';

const avatarSizesMap = {
  small: 32,
  medium: 40,
  large: 48,
};

const statusSizesMap = {
  small: 8,
  medium: 10,
  large: 12,
};

export default createUseStyles(
  (
    theme,
    size: IAvatarProps['size'],
    shape: IAvatarProps['shape'],
    status: IAvatarProps['status'],
  ) => ({
    avatarWrapper: {
      position: 'relative',
      width: avatarSizesMap[size!],
      height: avatarSizesMap[size!],
    },
    avatarContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: theme.colors.neutralGray.medium300,
      borderRadius: shape === 'circle' ? avatarSizesMap[size!] / 2 : 4,
      width: avatarSizesMap[size!],
      height: avatarSizesMap[size!],
    },
    status: {
      position: 'absolute',
      backgroundColor:
        status === 'online'
          ? theme.colors.success.medium400
          : theme.colors.error.main500,
      borderRadius: statusSizesMap[size!] / 2,
      borderWidth: 1.5,
      borderColor: theme.colors.background.white,
      width: statusSizesMap[size!],
      height: statusSizesMap[size!],
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    smallStatus: {
      [isRTL ? 'left' : 'right']: shape === 'circle' ? 0 : -2,
      bottom: shape === 'circle' ? 0 : -2,
    },
    mediumStatus: {
      [isRTL ? 'left' : 'right']: shape === 'circle' ? 0 : -3,
      bottom: shape === 'circle' ? -1 : -3,
    },
    largeStatus: {
      [isRTL ? 'left' : 'right']: shape === 'circle' ? 0 : -5,
      bottom: shape === 'circle' ? -1 : -4,
    },
  }),
);
