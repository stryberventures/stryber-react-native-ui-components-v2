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
    opacity: 0.5,
  },
  buttonWrapper: {
    position: 'absolute',
    marginLeft: SLIDER_CONFIG.buttonRadius - SLIDER_CONFIG.pulsarRadius,
    width: SLIDER_CONFIG.pulsarRadius * 2,
    height: SLIDER_CONFIG.pulsarRadius * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButton: {
    zIndex: 1,
  },
  buttonPulsarWrapper: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  buttonPulsar: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: SLIDER_CONFIG.pulsarRadius,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme[color!].light,
    opacity: 0.4,
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
    backgroundColor: theme[color!].main,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.default.extraLight,
    fontFamily: theme.fontFamily,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.default.light,
    position: 'absolute',
    top: 1,
  },
  labelContainer: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: theme.default.dark,
    borderRadius: 4,
  },
}));
