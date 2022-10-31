import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  text: {
    fontFamily: theme.fontFamily,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.default.dark,
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.default.dark,
  },
  h1: {
    fontSize: 48,
    fontWeight: '700',
  },
  h2: {
    fontSize: 32,
    fontWeight: '700',
  },
  h3: {
    fontSize: 24,
    fontWeight: '700',
  },
  h4: {
    fontSize: 20,
    fontWeight: '700',
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.default.dark,
  },
  smallText: {
    fontSize: 10,
    fontWeight: '400',
  },
  footnote: {
    fontSize: 10,
    fontWeight: '400',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.default.dark,
  },
  labelHighlight: {
    fontSize: 14,
    fontWeight: '500',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
}));
