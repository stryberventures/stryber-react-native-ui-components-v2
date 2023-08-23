import React from 'react';
import useStyles from './styles';
import {Pressable, PressableProps} from 'react-native';
import Text from '../../Text';

interface ISelectItemProps extends PressableProps {
  active?: boolean;
  children: React.ReactNode;
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
      {...rest}>
      <Text variant="components1" style={styles.text}>
        {children}
      </Text>
    </Pressable>
  );
};

export default SelectItem;
