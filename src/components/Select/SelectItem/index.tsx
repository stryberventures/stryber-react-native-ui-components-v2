import React from 'react';
import useStyles from './styles';
import {Text, Pressable, PressableProps} from 'react-native';

interface ISelectItemProps extends PressableProps {
  active?: boolean;
}

const SelectItem: React.FC<ISelectItemProps> = ({
  children,
  active,
  ...rest
}) => {
  const styles = useStyles();
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        pressed && styles.pressedContainer,
        active && styles.activeContainer,
      ]}
      {...rest}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default SelectItem;
