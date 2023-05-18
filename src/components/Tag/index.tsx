import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import {
  Animated,
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';

import TagGroup, {useTagGroupContext} from './TagGroup';
import * as Icons from '../Icons';
import Text, {ITextProps} from '../Text';
import {useTheme} from '../Theme';
import {TTagValue} from './TagGroup';
import {useColorTransition} from '../../utils/useColorTransition';

export type TTagSize = 'small' | 'medium' | 'large';
type TTextVariant = Extract<
  Required<ITextProps>['variant'],
  'components1' | 'components2' | 'components3'
>;

type TOnChangeArgument = {
  value: TTagValue;
  selected: boolean;
};

export interface ITagProps extends Omit<PressableProps, 'onPress'> {
  value?: TTagValue;
  children: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'neutralGray';
  size?: TTagSize;
  shape?: 'square' | 'round';
  selected?: boolean;
  removable?: boolean;
  iconLeft?: React.FC<any>;
  iconRight?: React.FC<any>;
  onChange?: ({value, selected}?: TOnChangeArgument) => void;
  onRemove?: (value?: TTagValue) => void;
  style?: StyleProp<ViewStyle>;
}

const getTextVariant = (size: TTagSize): TTextVariant => {
  switch (size) {
    case 'large':
      return 'components1';
    case 'medium':
      return 'components2';
    case 'small':
      return 'components3';
    default:
      return 'components1';
  }
};

const getIconSize = (size: TTagSize): number => {
  switch (size) {
    case 'large':
      return 24;
    case 'medium':
      return 16;
    case 'small':
      return 12;
    default:
      return 24;
  }
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Tag: React.FC<ITagProps> = ({
  value = '',
  color = 'primary',
  size = 'large',
  shape = 'round',
  disabled,
  selected: initialSelected = false,
  removable = false,
  iconLeft: IconLeft,
  iconRight: IconRight,
  onChange,
  onRemove,
  children,
  style,
}) => {
  const {isTagSelected, addTag, removeTag} = useTagGroupContext(value);
  const {theme} = useTheme();

  const [selected, setSelected] = useState(isTagSelected || initialSelected);
  const [isRemoved, setIsRemoved] = useState(false);
  const [pressed, setPressed] = useState(false);
  const styles = useStyles(color, size);

  const {interpolation, runAnimation} = useColorTransition(
    selected,
    theme.colors[color].extraLight50,
    theme.colors[color].light200,
  );

  const iconSizeProps = {
    width: getIconSize(size),
    height: getIconSize(size),
  };

  const getTextColor = (isPressed: boolean) =>
    disabled
      ? theme.colors.text.disabled
      : selected
      ? theme.colors.contrast.white
      : isPressed
      ? theme.colors[color].medium300
      : theme.colors[color].main500;

  const handleToggleSelect = () => {
    setSelected(!selected);
    onChange && onChange({value, selected: !selected});
    if (!selected) {
      addTag(value);
    } else {
      removeTag(value);
    }
  };

  const handleRemove = () => {
    removeTag(value);
    setIsRemoved(true);
    onRemove && onRemove(value);
  };

  useEffect(() => {
    if (initialSelected) {
      addTag(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isRemoved) {
    return null;
  }

  const handlePressIn = () => setPressed(true);
  const handlePressOut = () => {
    setPressed(false);
    runAnimation();
  };

  return (
    <AnimatedPressable
      onPress={handleToggleSelect}
      disabled={disabled}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.tag,
        styles[shape],
        selected && styles.tagSelected,
        {backgroundColor: interpolation},
        disabled && styles.tagDisabled,
        style,
      ]}
    >
      {IconLeft && (
        <View style={styles.leftIcon}>
          <IconLeft {...iconSizeProps} fill={getTextColor(pressed)} />
        </View>
      )}
      <Text
        variant={getTextVariant(size)}
        style={{
          color: getTextColor(pressed),
          lineHeight: getIconSize(size),
        }}
      >
        {children}
      </Text>
      {IconRight && (
        <View style={styles.rightIcon}>
          <IconRight {...iconSizeProps} fill={getTextColor(pressed)} />
        </View>
      )}
      {removable && (
        <Pressable hitSlop={5} onPress={handleRemove} style={styles.rightIcon}>
          <Icons.CloseCircleIcon
            {...iconSizeProps}
            fill={getTextColor(pressed)}
          />
        </Pressable>
      )}
    </AnimatedPressable>
  );
};

export {TagGroup};

export default Tag;
