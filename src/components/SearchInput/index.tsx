import React from 'react';
import Input, {IInputProps} from '../Input';
import {SearchIcon} from '../Icons';
import {useTheme} from '../Theme';

export interface ISearchInputProps
  extends Omit<IInputProps, 'label' | 'variant'> {}

const SearchInput: React.FC<ISearchInputProps> = ({disabled, ...rest}) => {
  const {theme} = useTheme();

  return (
    <Input
      leftContent={
        <SearchIcon
          fill={
            disabled
              ? theme.colors.neutralGray.light200
              : theme.colors.neutralGray.main500
          }
        />
      }
      variant="labelOutside"
      withRemoveButton={!disabled}
      disabled={disabled}
      {...rest}
    />
  );
};

export default SearchInput;
