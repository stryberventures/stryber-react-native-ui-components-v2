import {createUseStyles} from '../Theme';
import {SLIDER_CONFIG} from './constants';
import {ISliderProps} from './index';

export default createUseStyles((theme, color: ISliderProps['color']) => ({
  rangeBarWrapper: {
    /* Android bug fix for button positioning */
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'transparent',

    height: SLIDER_CONFIG.barHeight,
    width: '100%',
    backgroundColor: theme.default.main,
    borderRadius: 10,
    overflow: 'hidden',
  },
  rangeBar: {
    height: '100%',
    backgroundColor: theme[color!].main,
  },
  disabledRangeBar: {
    backgroundColor: theme.default.main,
  },
  buttonWrapper: {
    position: 'absolute',
    width: SLIDER_CONFIG.buttonRadius * 2,
    height: SLIDER_CONFIG.buttonRadius * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButton: {
    zIndex: 1,
  },
  buttonTooltip: {
    position: 'absolute',
    top: -24,
  },
  buttonInputWrapper: {
    position: 'absolute',
    top: -38,
  },
  button: {
    width: SLIDER_CONFIG.buttonRadius * 2,
    height: SLIDER_CONFIG.buttonRadius * 2,
    borderRadius: SLIDER_CONFIG.buttonRadius,
    backgroundColor: theme[color!].contrast,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  disabledButton: {
    backgroundColor: theme.default.light,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.default.extraLight,
    fontFamily: theme.fontFamily,
    textAlign: 'center',
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.default.light,
    position: 'absolute',
    top: 0,
  },
  labelContainer: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: theme.default.dark,
    borderRadius: 4,
  },
  disabledLabelContainer: {
    backgroundColor: theme.default.main,
  },
}));
