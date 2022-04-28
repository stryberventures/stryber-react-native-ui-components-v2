import {createUseStyles} from '../../Theme';
import {IInputSize} from './index';

const inputConstants = {
  OUTLINE_SIZE: 8,
  ERROR_LINE_WIDTH: 8,
  BORDER_WIDTH: 1,
};

export default createUseStyles((theme, inputSize: IInputSize) => ({
  baseInput: {
    borderWidth: inputConstants.BORDER_WIDTH,
    borderColor: theme.border.main,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: theme.background.main,
    zIndex: 2,
  },
  baseInputFocused: {
    borderColor: theme.primary.light,
  },
  label: {
    color: theme.text.secondary,
  },
  focusedOutline: {
    position: 'absolute',
    width: inputSize.width + inputConstants.OUTLINE_SIZE,
    height: inputSize.height + inputConstants.OUTLINE_SIZE,
    backgroundColor: theme.border.light,
    borderRadius: 4,
    left: -4,
    top: -4,
    zIndex: -3,
  },
  error: {
    borderColor: theme.error.main,
    paddingLeft: 8 + inputConstants.ERROR_LINE_WIDTH,
  },
  errorFocusedOutline: {
    backgroundColor: theme.error.light,
  },
  errorLine: {
    position: 'absolute',
    width: inputConstants.ERROR_LINE_WIDTH,
    height: inputSize.height - inputConstants.BORDER_WIDTH * 2,
    backgroundColor: theme.error.main,
    left: 0,
    top: 0,
  },
  disabled: {
    backgroundColor: theme.background.disabled,
  },
  disabledLabel: {
    color: theme.text.disabled,
  },
}));
