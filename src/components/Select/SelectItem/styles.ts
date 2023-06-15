import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  pressedContainer: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
  text: {
    color: theme.colors.text.headline,
    lineHeight: 24,
  },
  activeContainer: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
}));
