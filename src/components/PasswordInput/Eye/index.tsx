import React from 'react';
import {PressableProps, Pressable} from 'react-native';
import {EyeIcon, EyeSlashIcon} from '../../Icons';
import {SvgProps} from 'react-native-svg';
import {useTheme} from '../../Theme';
import useStyles from './styles';

interface IEyeProps extends PressableProps {
  secured?: boolean;
}

const Eye: React.FC<IEyeProps> = ({secured, disabled, ...rest}) => {
  const {theme} = useTheme();
  const iconProps: SvgProps = {
    fill: disabled
      ? theme.colors.text.disabled
      : theme.colors.neutralGray.medium500,
  };
  const styles = useStyles();

  return (
    <Pressable
      style={styles.eye}
      disabled={disabled}
      testID="eye-test"
      {...rest}
    >
      {secured ? <EyeIcon {...iconProps} /> : <EyeSlashIcon {...iconProps} />}
    </Pressable>
  );
};

export default Eye;
