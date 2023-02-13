import React from 'react';
import useStyles from './styles';
import {View} from 'react-native';
import TooltipIcon from './TooltipIcon';
import {useTheme} from '../../Theme';
import {ITooltipProps} from '../index';

interface ITooltipTriangleProps {
  position: ITooltipProps['position'];
  variant: ITooltipProps['variant'];
}

const TooltipTriangle: React.FC<ITooltipTriangleProps> = ({
  position = 'top',
  variant = 'light',
}) => {
  const {theme} = useTheme();
  const styles = useStyles();
  const fill =
    variant === 'light'
      ? theme.colors.background.extraLightGrey
      : theme.colors.neutralGray.extraDark900;
  return (
    <View style={[styles.iconWrapper, styles[position]]}>
      <TooltipIcon fill={fill} style={[styles[`${position}Icon` as const]]} />
    </View>
  );
};

export default TooltipTriangle;
