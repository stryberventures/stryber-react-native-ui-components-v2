import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  text: {
    fontFamily: theme.fontFamily,
    color: theme.colors.text.headline,
  },
  h1: {
    fontSize: 34,
    lineHeight: 40,
    letterSpacing: -0.02,
  },
  h2: {
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.02,
  },
  h3: {
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: -0.02,
  },
  h4: {
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: -0.02,
  },
  body1: {
    fontSize: 18,
    lineHeight: 28,
  },
  body2: {
    fontSize: 16,
    lineHeight: 24,
  },
  body3: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption1: {
    fontSize: 12,
    lineHeight: 14,
  },
  caption2: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.02,
  },
  components1: {
    fontSize: 16,
    letterSpacing: 0.02,
  },
  components2: {
    fontSize: 14,
    letterSpacing: 0.02,
  },
  components3: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.02,
  },
  buttonLabelMini: {
    fontSize: 10,
    lineHeight: 15,
  },
  buttonLabelLarge: {
    fontSize: 16,
    lineHeight: 24,
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
  regular: {
    fontWeight: '400',
  },
  medium: {
    fontWeight: '500',
  },
  semiBold: {
    fontWeight: '600',
  },
  bold: {
    fontWeight: '700',
  },
}));
