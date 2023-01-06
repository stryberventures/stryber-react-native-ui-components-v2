import {createUseStyles} from '../../../components/Theme';

export default createUseStyles((theme) => ({
  selectorContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1000,
  },
  itemContainer: {
    marginBottom: 5,
  },
  title: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: theme.fontFamily,
    color: 'black',
  },
  codeBoxContainer: {
    width: '100%',
    maxWidth: 700,
    '& pre': {
      padding: '11px 1rem',
      lineHeight: '18px',
      fontSize: 16,
      color: 'black',
    },
  },
}));
