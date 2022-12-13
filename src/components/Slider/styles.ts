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
    backgroundColor: theme.colors.neutralGray.medium300,
    borderRadius: 10,
    overflow: 'hidden',
  },
  rangeBar: {
    height: '100%',
    backgroundColor: theme.colors[color!].main500,
  },
  disabledRangeBar: {
    backgroundColor: theme.colors.neutralGray.medium300,
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
    backgroundColor: theme.colors.contrast.white,
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
    backgroundColor: theme.colors.neutralGray.light200,
  },
  tooltipText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.neutralGray.light100,
    textAlign: 'center',
    lineHeight: 16,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: theme.colors.neutralGray.light200,
    position: 'absolute',
    top: 0,
  },
  labelContainer: {
    paddingHorizontal: 4,
    paddingVertical: 2,
    backgroundColor: theme.colors.neutralGray.main500,
    borderRadius: 4,
  },
  disabledLabelContainer: {
    backgroundColor: theme.colors.neutralGray.medium300,
  },
}));
