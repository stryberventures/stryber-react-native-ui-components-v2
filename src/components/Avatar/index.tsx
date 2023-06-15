import React from 'react';
import useStyles from './styles';
import {View, StyleProp, ViewStyle, Image} from 'react-native';
import {ProfileIcon} from '../Icons';

export interface IAvatarProps {
  size?: 'small' | 'medium' | 'large';
  src?: string;
  style?: StyleProp<ViewStyle>;
  status?: 'online' | 'offline';
  shape?: 'circle' | 'square';
}

const Avatar: React.FC<IAvatarProps> = ({
  src,
  size = 'medium',
  status,
  style,
  shape = 'circle',
}) => {
  const styles = useStyles(size, shape, status);

  const iconSizeMap = {
    small: 18,
    medium: 23,
    large: 27,
  };

  return (
    <View style={[styles.avatarWrapper, style]}>
      <View style={[styles.avatarContainer]}>
        {src ? (
          <Image source={{uri: src}} style={styles.image} />
        ) : (
          <ProfileIcon width={iconSizeMap[size]} height={iconSizeMap[size]} />
        )}
      </View>
      {!!status && (
        <View
          testID="gaia-avatar-status"
          style={[styles.status, styles[`${size}Status`]]}
        />
      )}
    </View>
  );
};

export default Avatar;
