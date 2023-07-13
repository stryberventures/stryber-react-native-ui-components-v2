import {createUseStyles} from '../Theme';
import {Platform} from 'react-native';

// TODO: Fix android dropdown scroll behaviour
const iosSpecificDropdownStyles =
  Platform.OS === 'ios'
    ? {
        position: 'absolute' as const,
        top: `${100}%` as const,
      }
    : {};

export default createUseStyles(theme => ({
  container: {
    zIndex: 2,
  },
  dropdown: {
    ...iosSpecificDropdownStyles,
    marginTop: 8,
    left: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: theme.colors.neutralGray.medium300,
    borderRadius: 4,
    maxHeight: 160,
  },
  content: {
    paddingVertical: 8,
  },
  icon: {
    marginRight: 5,
  },
  invertedIcon: {
    transform: [{rotateX: '180deg'}],
  },
  clearIcon: {
    marginRight: 15,
  },
  scrollView: {
    flex: 1,
  },
}));
