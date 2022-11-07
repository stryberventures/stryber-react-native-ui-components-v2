import {createUseStyles} from '../Theme';
import {IDropdownPosition} from './index';

const DROPDOWN_OFFSET = 8;

export default createUseStyles(
  (theme, dropdownPosition: IDropdownPosition) => ({
    dropdown: {
      top: dropdownPosition.top + DROPDOWN_OFFSET,
      left: dropdownPosition.left,
      width: dropdownPosition.width,
      position: 'absolute',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: theme.default.main,
      borderRadius: 4,
      paddingHorizontal: 8,
      paddingVertical: 16,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    placeholderText: {
      color: theme.text.hint,
    },
    valueText: {
      color: theme.text.primary,
    },
    icon: {
      marginRight: 5,
    },
    invertedIcon: {
      transform: [{rotateX: '180deg'}],
    },
    disabledText: {
      color: theme.text.disabled,
    },
  }),
);
