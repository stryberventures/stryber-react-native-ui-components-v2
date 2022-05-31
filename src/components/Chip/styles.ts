import {createUseStyles} from '../Theme';
import {IChipProps} from './index';

export default createUseStyles((theme, color: IChipProps['color']) => ({
  container: {
    borderRadius: 8,
    backgroundColor: theme[color!].main,
    paddingVertical: 6,
    paddingHorizontal: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  outlinedContainer: {
    backgroundColor: theme[color!].contrast,
    borderWidth: 1,
    borderColor: theme[color!].main,
  },
  pressed: {
    backgroundColor: theme[color!].dark,
  },
  outlinedPressed: {
    backgroundColor: theme.default.extraLight,
  },
  disabled: {
    backgroundColor: theme.default.light,
  },
  outlinedDisabled: {
    borderColor: theme.default.main,
  },
  text: {
    color: theme[color!].contrast,
    fontWeight: '500',
    marginHorizontal: 8,
  },
  disabledText: {
    color: theme.text.hint,
  },
  outlinedText: {
    color: theme[color!].main,
  },
}));
