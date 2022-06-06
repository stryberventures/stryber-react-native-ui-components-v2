import {createUseStyles} from '../../Theme';
import {StyleSheet} from 'react-native';
import {TOOLTIP_TRIANGLE_HEIGHT} from './TooltipIcon';

const TRIANGLE_OFFSET = 2;

export default createUseStyles({
  iconWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  top: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    bottom: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
  },
  topStart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
    paddingHorizontal: 12,
  },
  topEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    bottom: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
    paddingHorizontal: 12,
  },
  bottom: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
  },
  bottomStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    top: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
    paddingHorizontal: 12,
  },
  bottomEnd: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    top: -TOOLTIP_TRIANGLE_HEIGHT + TRIANGLE_OFFSET,
    paddingHorizontal: 12,
  },
  left: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    right: -TOOLTIP_TRIANGLE_HEIGHT - TRIANGLE_OFFSET,
  },
  leftStart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    right: -TOOLTIP_TRIANGLE_HEIGHT - TRIANGLE_OFFSET,
    paddingVertical: 12,
  },
  leftEnd: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    right: -TOOLTIP_TRIANGLE_HEIGHT - TRIANGLE_OFFSET,
    paddingVertical: 12,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    left: -TOOLTIP_TRIANGLE_HEIGHT - TRIANGLE_OFFSET,
  },
  rightStart: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    left: -TOOLTIP_TRIANGLE_HEIGHT - TRIANGLE_OFFSET,
    paddingVertical: 12,
  },
  rightEnd: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    left: -TOOLTIP_TRIANGLE_HEIGHT - 2,
    paddingVertical: 12,
  },
  topIcon: {},
  topStartIcon: {},
  topEndIcon: {},
  bottomIcon: {
    transform: [{rotate: '180deg'}],
  },
  bottomStartIcon: {
    transform: [{rotate: '180deg'}],
  },
  bottomEndIcon: {
    transform: [{rotate: '180deg'}],
  },
  leftIcon: {
    transform: [{rotate: '270deg'}],
  },
  leftStartIcon: {
    transform: [{rotate: '270deg'}],
  },
  leftEndIcon: {
    transform: [{rotate: '270deg'}],
  },
  rightIcon: {
    transform: [{rotate: '90deg'}],
  },
  rightStartIcon: {
    transform: [{rotate: '90deg'}],
  },
  rightEndIcon: {
    transform: [{rotate: '90deg'}],
  },
});
