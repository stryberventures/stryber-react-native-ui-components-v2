import {createUseStyles} from '../Theme';

export default createUseStyles({
  title: {textAlign: 'center', fontSize: 24, fontWeight: '700'},
  iconWrapper: {
    marginVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#9747FF',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 20,
  },
  iconVariantsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  iconVariant: {
    alignItems: 'center',
    margin: 10,
  },
  socialVariantWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialIconVariant: {
    marginVertical: 10,
    width: '50%',
    alignItems: 'center',
  },
});
