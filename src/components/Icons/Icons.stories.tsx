import React from 'react';
import * as Icons from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View, ScrollView} from 'react-native';
import Text from '../Text';
import pkg from './package.json';
import {paymentMethodVariants as paymentMethodVariantsArr} from './PaymentMethodIcon';
import {socialVariants as socialVariantsArr} from './SocialIcon';
import useStyles from './Icons.styles.stories';

export default {
  title: 'Icons',
  decorators: Platform.OS === 'web' ? null : [CenterView],
  parameters: {
    pkg,
  },
};

const arrowVariants = ['down', 'up', 'left', 'right'];
const eyeVariants = ['open', 'closed'];
const countVariants = ['minus', 'plus'];
const loadVariants = ['download', 'upload'];
const moreVariants = ['vertical', 'horizontal'];
const singleVariants = ['default'];
const paymentMethodVariants = Object.keys(paymentMethodVariantsArr);
const socialVariants = Object.keys(socialVariantsArr(''));
const commonVariants = ['default', 'filled'];

const mapIconVariants = (Icon: React.FC<any>) => (variant: string) => ({
  variant,
  Icon,
});

const displayIcon = (name: keyof typeof Icons, Icon: React.FC<any>) => {
  if (name.includes('Arrow')) {
    return arrowVariants.map(mapIconVariants(Icon));
  }
  if (name === 'EyeIcon') {
    return eyeVariants.map(mapIconVariants(Icon));
  }
  if (name === 'CountIcon') {
    return countVariants.map(mapIconVariants(Icon));
  }
  if (name === 'LoadIcon') {
    return loadVariants.map(mapIconVariants(Icon));
  }
  if (name === 'MoreIcon') {
    return moreVariants.map(mapIconVariants(Icon));
  }
  if (name === 'CloseIcon') {
    return singleVariants.map(mapIconVariants(Icon));
  }
  if (name === 'SearchIcon') {
    return singleVariants.map(mapIconVariants(Icon));
  }
  if (name === 'PaymentMethodIcon') {
    return paymentMethodVariants.map(mapIconVariants(Icon));
  }
  if (name === 'SocialIcon') {
    return socialVariants.map(mapIconVariants(Icon));
  }
  return commonVariants.map(mapIconVariants(Icon));
};

export const AllIcons = () => {
  const styles = useStyles();
  const getIconsArr = () => {
    const iconsArr = [];
    for (let key in Icons) {
      if (!key.includes('Deprecated')) {
        iconsArr.push({name: key, Icon: Icons[key as keyof typeof Icons]});
      }
    }
    return iconsArr;
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.title}>All Icons:</Text>
        {getIconsArr().map(({name, Icon}, index) => (
          <View key={name + index} style={styles.iconWrapper}>
            <Text weight="semiBold">{name} variants:</Text>
            <View style={styles.iconVariantsWrapper}>
              {displayIcon(name as keyof typeof Icons, Icon)?.map(
                ({variant, Icon: IconVariant}, idx) => {
                  if ((name as keyof typeof Icons) === 'SocialIcon') {
                    return (
                      <View
                        key={variant + idx}
                        style={styles.socialVariantWrapper}
                      >
                        <View style={styles.socialIconVariant}>
                          <Text variant="body3">{variant}(type color):</Text>
                          <IconVariant variant={variant} />
                        </View>
                        <View style={styles.socialIconVariant}>
                          <Text variant="body3">{variant}(type plain):</Text>
                          <IconVariant variant={variant} type="plain" />
                        </View>
                      </View>
                    );
                  }
                  return (
                    <View style={styles.iconVariant} key={variant + idx}>
                      <Text variant="body3">{variant}:</Text>
                      <IconVariant variant={variant} />
                    </View>
                  );
                },
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};
