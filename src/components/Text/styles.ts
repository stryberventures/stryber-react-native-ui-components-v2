import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  text: {
    fontFamily: theme.fontFamily,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    color: theme.default.dark,
    lineHeight: 24,
  },
  description: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.default.dark,
    lineHeight: 18,
  },
  h1: {
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 60,
  },
  h2: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 48,
  },
  h3: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 36,
  },
  h4: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
  },
  caption: {
    fontSize: 12,
    fontWeight: '400',
    color: theme.default.dark,
    lineHeight: 18,
  },
  smallText: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
  footnote: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '400',
    color: theme.default.dark,
    lineHeight: 17,
  },
  labelHighlight: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
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
