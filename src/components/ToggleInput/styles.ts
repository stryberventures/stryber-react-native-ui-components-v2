import {createUseStyles} from '../Theme';
import {IToggleInputProps} from './index';
import {TOGGLE_ICON_SIZE} from './ToggleIcon/styles';
import {SWITCH_SIZE} from './SwitchIcon/styles';

export default createUseStyles(
  (
    theme,
    size: IToggleInputProps['size'],
    variant: IToggleInputProps['variant'],
  ) => {
    const isSwitch = variant === 'switch';
    return {
      toggleInputText: {
        color: theme.text.secondary,
        fontWeight: '500',
        lineHeight: isSwitch ? SWITCH_SIZE.height : TOGGLE_ICON_SIZE[size!],
        fontFamily: theme.fontFamily,
      },
      toggleInputWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-start',
      },
      hint: {
        lineHeight: isSwitch ? SWITCH_SIZE.height : TOGGLE_ICON_SIZE[size!],
        marginTop: 0,
      },
      textContainer: {
        marginLeft: 8,
      },
      disabled: {
        opacity: 0.45,
      },
      error: {
        marginTop: 8,
      },
    };
  },
);
