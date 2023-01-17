import {createUseStyles} from '../../Theme';

export default createUseStyles(theme => ({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  pressedContainer: {
    backgroundColor: theme.colors.neutralGray.light100,
  },
  text: {
    color: theme.colors.text.headline,
  },
  activeContainer: {
    backgroundColor: theme.colors.neutralGray.light200,
  },
}));
