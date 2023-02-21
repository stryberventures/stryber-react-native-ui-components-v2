import {createUseStyles} from '../../Theme';
import {ICounterIconProps} from './index';

export default createUseStyles((theme, color: ICounterIconProps['color']) => ({
  container: {
    width: 24,
    height: 24,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPressed: {
    backgroundColor: theme.colors[color!].light100,
  },
}));
