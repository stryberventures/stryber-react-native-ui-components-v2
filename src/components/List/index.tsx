import React from 'react';
import useStyles from './styles';
import {
  FlatListProps,
  FlatList,
  ListRenderItem,
  Pressable,
  View,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text from '../Text';

export interface IListItem {
  title: string;
  subtitle?: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onPress?: () => void;
  testID?: string;
  style?: StyleProp<ViewStyle>;
}

export interface IListProps
  extends Omit<FlatListProps<IListItem>, 'data' | 'renderItem'> {
  listItems: IListItem[];
}

const List: React.FC<IListProps> = ({listItems, ...rest}) => {
  const styles = useStyles();

  const renderItem: ListRenderItem<IListItem> = ({
    item: {
      title,
      subtitle,
      rightContent,
      leftContent,
      onPress,
      ...restItemProps
    },
  }) => (
    <Pressable style={styles.listItem} onPress={onPress} {...restItemProps}>
      <View style={styles.content}>
        {!!leftContent && <View style={styles.leftContent}>{leftContent}</View>}
        <View>
          <Text variant="components2" weight="medium" style={styles.title}>
            {title}
          </Text>
          <Text variant="components2" style={styles.subtitle}>
            {subtitle}
          </Text>
        </View>
      </View>
      {rightContent}
    </Pressable>
  );

  return (
    <FlatList
      keyExtractor={(_, index) => index.toString()}
      data={listItems}
      renderItem={renderItem}
      {...rest}
    />
  );
};

export default List;
