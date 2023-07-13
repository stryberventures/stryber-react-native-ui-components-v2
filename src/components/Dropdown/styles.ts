import {createUseStyles} from '../Theme';
import {IDropdownPosition} from './index';

const DROPDOWN_OFFSET = 7;

export default createUseStyles(
  (theme, dropdownPosition: IDropdownPosition) => ({
    dropdown: {
      top: dropdownPosition.top
        ? dropdownPosition.top + DROPDOWN_OFFSET
        : undefined,
      bottom: dropdownPosition.bottom
        ? dropdownPosition.bottom + DROPDOWN_OFFSET
        : undefined,
      left: dropdownPosition.left,
      width: dropdownPosition.width,
      position: 'absolute',
      overflow: 'hidden',
    },
    dropdownShadow: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 8,
      marginBottom: 12,
    },
    dropdownShadowContainer: {
      marginHorizontal: 6,
      backgroundColor: '#fff',
    },
    dropdownInner: {
      width: '100%',
      paddingBottom: 2,
      paddingTop: 8,
    },
    overlay: {
      width: '100%',
      height: '100%',
    },
    text: {
      lineHeight: 24,
    },
    placeholderText: {
      color: theme.colors.text.tint,
    },
    valueText: {
      color: theme.colors.text.headline,
    },
    icon: {
      marginRight: 5,
    },
    disabledText: {
      color: theme.colors.text.disabled,
    },
    emptyBlock: {
      height: 24,
    },
    errorIcon: {
      marginRight: theme.spacing['4'],
    },
  }),
);
