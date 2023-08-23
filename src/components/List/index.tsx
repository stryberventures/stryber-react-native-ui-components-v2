import React from 'react';
import ListItem from './ListItem';
import ListItemText from './ListItemText';
import {ScrollView, ScrollViewProps} from 'react-native';

export interface IListProps extends ScrollViewProps {}

const List: React.FC<IListProps> = ({children, ...rest}) => {
  return <ScrollView {...rest}>{children}</ScrollView>;
};

export {ListItem, ListItemText};

export default List;
