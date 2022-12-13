import {createUseStyles} from '../Theme';
import {IChipProps} from './index';

export default createUseStyles((theme, color: IChipProps['color']) => {
  return {
    container: {
      borderRadius: 8,
      backgroundColor: theme.colors[color!].medium500,
      paddingVertical: 6,
      paddingHorizontal: 8,
      alignSelf: 'flex-start',
      flexDirection: 'row',
      alignItems: 'center',
    },
    outlinedContainer: {
      backgroundColor: theme.colors.contrast.white,
      borderWidth: 1,
      borderColor: theme.colors[color!].medium500,
    },
    pressed: {
      backgroundColor: theme.colors[color!].dark600,
    },
    outlinedPressed: {
      backgroundColor: theme.colors.neutralGray.light100,
    },
    disabled: {
      backgroundColor: theme.colors.neutralGray.light200,
    },
    outlinedDisabled: {
      borderColor: theme.colors.neutralGray.medium300,
    },
    text: {
      color: theme.colors.contrast.white,
      marginHorizontal: 8,
    },
    disabledText: {
      color: theme.colors.neutralGray.medium300,
    },
    outlinedText: {
      color: theme.colors[color!].medium500,
    },
  };
});
