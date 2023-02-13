import React, {ReactElement, useRef, useState} from 'react';
import useStyles from './styles';
import {
  View,
  Pressable,
  Modal,
  StyleProp,
  ViewStyle,
  TextStyle,
  ViewProps,
} from 'react-native';
import TooltipTriangle from './TooltipTriangle';
import TooltipCloseIcon from './TooltipCloseIcon';
import Text from '../Text';

export interface ITooltipProps extends ViewProps {
  variant?: 'light' | 'dark';
  arrow?: boolean;
  title?: string | ReactElement;
  content?: string | ReactElement;
  position?:
    | 'top'
    | 'topStart'
    | 'topEnd'
    | 'bottom'
    | 'bottomStart'
    | 'bottomEnd'
    | 'left'
    | 'leftStart'
    | 'leftEnd'
    | 'right'
    | 'rightStart'
    | 'rightEnd';
  wrapperStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  textStyle?: StyleProp<TextStyle>;
  onChange?: (isOpen?: boolean) => void;
  controlled?: boolean;
  visible?: boolean;
  withCloseButton?: boolean;
}

export interface IChildPosition {
  top: number;
  left: number;
  width: number;
  height: number;
}

export interface ITooltipSize {
  width: number;
  height: number;
}

const Tooltip: React.FC<ITooltipProps> = ({
  variant = 'light',
  arrow = false,
  title,
  content,
  position = 'top',
  children,
  wrapperStyle,
  style,
  onChange,
  titleStyle,
  textStyle,
  visible: isVisible = false,
  controlled,
  withCloseButton,
  ...rest
}) => {
  const childrenWrapperRef = useRef<View>(null);
  const [visible, setVisible] = useState(isVisible);
  const [childPosition, setChildPosition] = useState<IChildPosition>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const [tooltipSize, setTooltipSize] = useState<ITooltipSize>({
    width: 0,
    height: 0,
  });
  const styles = useStyles(
    childPosition,
    tooltipSize,
    withCloseButton,
    !!content,
    arrow,
  );

  const handleOpen = () => {
    childrenWrapperRef.current!.measure((x, y, width, height, pageX, pageY) => {
      setChildPosition({top: pageY, left: pageX, width, height});
    });
    setVisible(true);
    onChange && onChange(true);
  };

  const handleClose = () => {
    setVisible(false);
    onChange && onChange(false);
  };

  const renderTooltip = () => {
    return (
      <Modal
        visible={controlled ? isVisible : visible}
        transparent
        animationType="fade"
      >
        <Pressable style={styles.overlay} onPress={handleClose} />
        <View
          style={[styles.tooltip, styles[position], styles[variant], style]}
          onLayout={({nativeEvent}) => {
            setTooltipSize(nativeEvent.layout);
          }}
          {...rest}
        >
          {arrow && <TooltipTriangle variant={variant} position={position} />}
          <View style={styles.titleWrapper}>
            {title && typeof title === 'string' ? (
              <Text
                variant="components2"
                weight="medium"
                style={[styles[`${variant}Title`], titleStyle]}
              >
                {title}
              </Text>
            ) : (
              title
            )}
            {withCloseButton && <TooltipCloseIcon onPress={handleClose} />}
          </View>
          {content && typeof content === 'string' ? (
            <Text
              variant="components2"
              style={[styles[`${variant}Text`], textStyle]}
            >
              {content}
            </Text>
          ) : (
            content
          )}
        </View>
      </Modal>
    );
  };

  return (
    <>
      {renderTooltip()}
      <Pressable
        style={wrapperStyle}
        ref={childrenWrapperRef}
        onPressOut={handleOpen}
      >
        {children}
      </Pressable>
    </>
  );
};

export default Tooltip;
