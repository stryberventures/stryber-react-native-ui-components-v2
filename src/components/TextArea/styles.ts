import {createUseStyles, isRTL} from '../Theme';

export default createUseStyles({
  textArea: {
    height: 203,
  },
  input: {
    height: 170,
    textAlign: isRTL ? 'right' : 'left',
  },
});
