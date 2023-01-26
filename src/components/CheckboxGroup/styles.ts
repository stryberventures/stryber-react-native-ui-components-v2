import {createUseStyles} from '../Theme';

export default createUseStyles(theme => ({
  childCheckboxContainer: {
    marginLeft: theme.spacing['24'],
  },
  parentCheckbox: {
    marginBottom: 20,
  },
  childCheckbox: {
    marginBottom: theme.spacing['16'],
  },
}));
