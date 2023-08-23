import React from 'react';
import useStyles from './styles';
import List, {ListItem, ListItemText} from '../List';
import MenuSearch from './MenuSearch';
import {View, ViewProps} from 'react-native';

export interface IMenuProps extends ViewProps {
  size?: 'small' | 'medium' | 'large';
}

const Menu: React.FC<IMenuProps> = ({
  children,
  style,
  size = 'medium',
  ...rest
}) => {
  const styles = useStyles();
  return (
    <View style={[styles.menu, styles[size], style]}>
      <List style={[styles.list]} {...rest}>
        {children}
      </List>
    </View>
  );
};

export {ListItem as MenuItem, ListItemText as MenuItemText, MenuSearch};

export default Menu;
