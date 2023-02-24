import React from 'react';
import {PressableProps, Pressable} from 'react-native';
import {EyeIcon} from '../../Icons';
import {useTheme} from '../../Theme';
import useStyles from './styles';

interface IEyeProps extends PressableProps {
  secured?: boolean;
}

const Eye: React.FC<IEyeProps> = ({secured, disabled, ...rest}) => {
  const {theme} = useTheme();
  const styles = useStyles();

  return (
    <Pressable
      style={styles.eye}
      disabled={disabled}
      testID="eye-test"
      {...rest}
    >
      <EyeIcon
        variant={secured ? 'closed' : 'open'}
        fill={
          disabled ? theme.colors.text.disabled : theme.colors.text.headline
        }
      />
    </Pressable>
  );
};

export default Eye;
