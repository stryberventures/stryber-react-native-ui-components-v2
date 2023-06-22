import React from 'react';
import useStyles from './styles';
import Input, {IInputProps} from '../../Input';
import {SearchIcon} from '../../Icons';
import {useTheme} from '../../Theme';

interface IMenuSearchProps extends IInputProps {}

const MenuSearch: React.FC<IMenuSearchProps> = ({
  placeholder = 'Search',
  style,
  variant: _,
  inputWrapperStyle,
  ...rest
}) => {
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <Input
      inputWrapperStyle={[styles.inputWrapper, inputWrapperStyle]}
      style={[styles.input, style]}
      variant="labelOutside"
      placeholder={placeholder}
      withRemoveButton
      leftContent={
        <SearchIcon width={20} height={20} fill={theme.colors.text.secondary} />
      }
      {...rest}
    />
  );
};

export default MenuSearch;
