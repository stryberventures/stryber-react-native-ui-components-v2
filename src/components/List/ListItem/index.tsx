import React from 'react';
import useStyles from './styles';
import {
  View,
  Pressable,
  StyleProp,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';

interface IListItemProps {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  size?: 'small' | 'medium' | 'large';
  divider?: boolean;
  disabled?: boolean;
  selected?: boolean;
  testID?: string;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

const ListItem: React.FC<IListItemProps> = ({
  children,
  leftContent,
  rightContent,
  onPress,
  size = 'medium',
  selected,
  disabled,
  divider,
  testID,
  style,
}) => {
  const styles = useStyles();

  return (
    <Pressable
      style={({pressed}) => [
        styles.listItem,
        styles[size],
        pressed && styles.pressed,
        selected && styles.selected,
        divider && styles.divider,
        style,
      ]}
      disabled={disabled}
      onPress={onPress}
      testID={testID}>
      <View style={styles.content}>
        {!!leftContent && <View style={styles.leftContent}>{leftContent}</View>}
        {children}
      </View>
      {rightContent}
    </Pressable>
  );
};

export default ListItem;
