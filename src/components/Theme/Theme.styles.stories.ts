import {createUseStyles} from '.';

export default createUseStyles(theme => ({
  componentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    paddingBottom: 200,
  },
  contentWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    height: 156,
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    marginVertical: 10,
  },
  cardTop: {
    height: '50%',
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contrastWhiteColor: {
    color: theme.colors.contrast.white,
  },
  contrastBlackColor: {
    color: theme.colors.contrast.black,
  },
  cardBottom: {
    justifyContent: 'center',
    height: '50%',
    padding: 12,
  },
  color: {
    color: '#667085',
  },
  paletteTitle: {
    textTransform: 'capitalize',
    marginVertical: 20,
  },
  bothContrastWrapper: {
    flexDirection: 'row',
  },
}));
