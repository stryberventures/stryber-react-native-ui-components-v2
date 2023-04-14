import {createUseStyles} from '../Theme';
import {IToggleInputProps} from './index';

export default createUseStyles(
  (
    theme,
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
        marginLeft: reverse ? 0 : 12,
        marginRight: reverse ? 12 : 0,
        flex: 1,
      },
      toggleInputText: {
        color: theme.colors.text.headline,
        lineHeight: isSwitch ? 24 : 20,
      },
      hint: {
        marginTop: 0,
        lineHeight: isSwitch ? 24 : 20,
      },
      disabledText: {
        color: theme.colors.text.disabled,
      },
      error: {
        marginTop: theme.spacing['12'],
      },
      fullWidth: {
        justifyContent: 'space-between',
      },
    };
  },
);
