import {createUseStyles} from '../Theme';
import {ILinearProgress} from './index';

export default createUseStyles((theme, props: ILinearProgress) => ({
  root: {
    width: '100%',
  },
  progressContainer: {
    position: 'relative',
    overflow: 'hidden',
    height: 4,
    zIndex: 0,
    backgroundColor: theme.colors[props.color!].light100,
    borderRadius: props.shape === 'round' ? 4 : 0,
  },

  progressLine: {
    position: 'absolute',
    bottom: 0,
    top: 0,
    backgroundColor: theme.colors[props.color!].main500,
  },
}));
