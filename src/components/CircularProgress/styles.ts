import {createUseStyles} from '../Theme';

export default createUseStyles((theme, props) => ({
  root: {
    width: props.size,
    height: props.size,
    transform: [
      {
        rotateZ: props.variant === 'determinate' ? '-90deg' : '0deg',
      },
    ],
  },
}));
