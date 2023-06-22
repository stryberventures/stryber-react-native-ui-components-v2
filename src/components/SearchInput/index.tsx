import React from 'react';
import Input, {IInputProps} from '../Input';
import {SearchIcon} from '../Icons';
import {useTheme} from '../Theme';
import useStyles from './styles';

export interface ISearchInputProps
  extends Omit<IInputProps, 'label' | 'variant'> {}

const SearchInput: React.FC<ISearchInputProps> = ({disabled, ...rest}) => {
  const {theme} = useTheme();
  const styles = useStyles();

  return (
    <Input
      leftContent={
        <SearchIcon
          fill={
            disabled ? theme.colors.text.disabled : theme.colors.text.secondary
          }
        />
      }
      variant="labelOutside"
      withRemoveButton={!disabled}
      disabled={disabled}
      errorStyle={styles.hintsMessage}
      hintStyle={styles.hintsMessage}
      {...rest}
    />
  );
};

export default SearchInput;
