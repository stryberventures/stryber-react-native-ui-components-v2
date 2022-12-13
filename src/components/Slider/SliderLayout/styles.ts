import {createUseStyles} from '../../Theme';
import {SLIDER_CONFIG} from '../constants';

export default createUseStyles(theme => ({
  rangeBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftLabelContainer: {
    marginRight: 8,
  },
  rightLabelContainer: {
    marginLeft: 8,
  },
  labelsBottomContainer: {
    flexDirection: 'row',
    marginTop: SLIDER_CONFIG.buttonRadius - SLIDER_CONFIG.barHeight / 2 + 4,
  },
  leftBottomLabelContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  rightBottomLabelContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  labelText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.neutralGray.light100,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
