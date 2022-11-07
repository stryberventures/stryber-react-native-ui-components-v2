import {createUseStyles} from '../Theme';
import {IChipProps} from './index';

type DefaultColorType = 'primary' | 'secondary';

export default createUseStyles((theme, color: IChipProps['color']) => {
  const isSuccess = color === 'success';
  const isDefault = color === 'default';
  return {
    container: {
      borderRadius: 8,
      backgroundColor: theme[color!].main,
      paddingVertical: 6,
      paddingHorizontal: 8,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    outlinedContainer: {
      backgroundColor: isDefault
        ? theme.default.dark
        : theme[color! as DefaultColorType].contrast,
      borderWidth: 1,
      borderColor: theme[color!].main,
    },
    pressed: {
      backgroundColor:
        isDefault || isSuccess
          ? undefined
          : theme[color! as DefaultColorType].dark,
    },
    outlinedPressed: {
      backgroundColor: theme.default.extraLight,
    },
    disabled: {
      backgroundColor: theme.default.light,
    },
    outlinedDisabled: {
      borderColor: theme.default.main,
    },
    text: {
      color: isDefault
        ? theme.default.dark
        : theme[color! as DefaultColorType].contrast,
      marginHorizontal: 8,
    },
    disabledText: {
      color: theme.default.main,
    },
    outlinedText: {
      color: theme[color!].main,
    },
  };
});
