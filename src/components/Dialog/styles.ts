import {createUseStyles} from '../Theme';
import {StyleSheet} from 'react-native';

export default createUseStyles(theme => ({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    maxWidth: 420,
    minWidth: 320,
    marginHorizontal: '10%',
    padding: 24,
    backgroundColor: theme.colors.background.white,
    borderRadius: 12,
    shadowColor: '#101828',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 8,
  },
}));
