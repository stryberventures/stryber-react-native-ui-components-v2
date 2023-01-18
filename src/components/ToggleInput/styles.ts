import {createUseStyles} from '../Theme';
import {IToggleInputProps} from './index';
import {TOGGLE_ICON_SIZE} from './ToggleIcon/styles';
import {SWITCH_SIZE} from './SwitchIcon/styles';

const CONTAINER_SPACING = {
  small: 8,
  medium: 12,
};

export default createUseStyles(
  (
    theme,
    size: IToggleInputProps['size'],
    variant: IToggleInputProps['variant'],
    reverse: IToggleInputProps['reverse'],
    controlCentered: IToggleInputProps['controlCentered'],
  ) => {
    const isSwitch = variant === 'switch';
    return {
      toggleInputWrapper: {
        flexDirection: reverse ? 'row-reverse' : 'row',
        justifyContent: reverse ? 'flex-end' : 'flex-start',
      },
      toggleInput: {
        justifyContent: controlCentered ? 'center' : 'flex-start',
      },
      textContainer: {
        marginLeft: reverse ? 0 : CONTAINER_SPACING[size!],
        marginRight: reverse ? CONTAINER_SPACING[size!] : 0,
        flex: 1,
      },
      toggleInputText: {
        marginBottom: 8,
        color: theme.colors.text.headline,
        lineHeight: isSwitch
          ? SWITCH_SIZE[size!].height
          : TOGGLE_ICON_SIZE[size!],
      },
      hint: {
        marginTop: 0,
        lineHeight: isSwitch
          ? SWITCH_SIZE[size!].height
          : TOGGLE_ICON_SIZE[size!],
      },
      disabledText: {
        color: theme.colors.text.disabled,
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
