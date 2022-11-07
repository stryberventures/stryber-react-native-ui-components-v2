import {createUseStyles} from '../Theme';
import {IToggleInputProps} from './index';
import {TOGGLE_ICON_SIZE} from './ToggleIcon/styles';
import {SWITCH_SIZE} from './SwitchIcon/styles';

export default createUseStyles(
  (
    theme,
    size: IToggleInputProps['size'],
    variant: IToggleInputProps['variant'],
    reverse,
  ) => {
    const isSwitch = variant === 'switch';
    return {
      toggleInputText: {
        color: theme.text.secondary,
        lineHeight: isSwitch ? SWITCH_SIZE.height : TOGGLE_ICON_SIZE[size!],
      },
      toggleInputWrapper: {
        flexDirection: reverse ? 'row-reverse' : 'row',
        justifyContent: reverse ? 'flex-end' : 'flex-start',
        alignItems: 'flex-start',
      },
      hint: {
        lineHeight: isSwitch ? SWITCH_SIZE.height : TOGGLE_ICON_SIZE[size!],
        marginTop: 0,
      },
      textContainer: {
        marginLeft: reverse ? 0 : 8,
        marginRight: reverse ? 8 : 0,
      },
      disabled: {
        opacity: 0.45,
      },
      error: {
        marginTop: 8,
      },
      fullWidth: {
        justifyContent: 'space-between',
      },
    };
  },
);
