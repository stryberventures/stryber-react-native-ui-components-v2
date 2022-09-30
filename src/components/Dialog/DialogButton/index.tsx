import React from 'react';
import useStyles from './styles';
import {Text, Pressable, PressableProps} from 'react-native';

interface IDialogButtonProps extends PressableProps {}

const DialogButton: React.FC<IDialogButtonProps> = ({children, ...rest}) => {
  const [pressed, setPressed] = React.useState(false);
  const styles = useStyles();

  const handlePressIn = () => setPressed(true);
  const handlePressOut = () => setPressed(false);

  return (
    <Pressable onPressIn={handlePressIn} onPressOut={handlePressOut} {...rest}>
      <Text style={[styles.text, pressed && styles.pressedText]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default DialogButton;
