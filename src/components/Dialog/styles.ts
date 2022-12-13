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
    width: '80%',
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: theme.colors.background.white,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: theme.colors.neutralGray.main500,
  },
  buttonWrapper: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    marginLeft: 12,
  },
}));
