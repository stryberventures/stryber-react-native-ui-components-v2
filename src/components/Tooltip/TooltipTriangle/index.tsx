import React from 'react';
import useStyles from './styles';
import {View} from 'react-native';
import TooltipIcon from './TooltipIcon';
import {useTheme} from '../../Theme';
import {ITooltipProps} from '../index';

interface ITooltipTriangleProps {
  position: ITooltipProps['position'];
}

const TooltipTriangle: React.FC<ITooltipTriangleProps> = ({
  position = 'top',
}) => {
  const {theme} = useTheme();
  const styles = useStyles();
  return (
    <View style={[styles.iconWrapper, styles[position]]}>
      <TooltipIcon
        fill={theme.colors.background.white}
        style={styles[`${position}Icon` as const]}
      />
    </View>
  );
};

export default TooltipTriangle;
