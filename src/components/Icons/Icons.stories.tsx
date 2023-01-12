import React from 'react';
import * as Icons from '.';
import CenterView from '../../storybook/preview/CenterView';
import {Platform, View, ScrollView} from 'react-native';
import Text from '../Text';
import pkg from './package.json';
import {paymentMethodVariants as paymentMethodVariantsObj} from './IconList/PaymentMethodIcon';
import {socialVariants as socialVariantsObj} from './IconList/SocialIcon';
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
const paymentMethodVariants = Object.keys(paymentMethodVariantsObj);
const socialVariants = Object.keys(socialVariantsObj);
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
                  return (
                    <View style={styles.iconVariant} key={variant + idx}>
                      <Text variant="body3" style={styles.iconVariantText}>
                        {variant}:
                      </Text>
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

export const PaymentMethodIconVariants = () => {
  const styles = useStyles();
  return (
    <>
      <Text style={styles.title}>Payment Method Icon Variants:</Text>
      <View style={styles.singleContainer}>
        <View style={styles.iconsWrapper}>
          {paymentMethodVariants.map((variant, index) => (
            <Icons.PaymentMethodIcon
              key={index}
              width={60}
              height={50}
              variant={variant as keyof typeof paymentMethodVariantsObj}
            />
          ))}
        </View>
      </View>
    </>
  );
};

export const SocialIconVariants = () => {
  const styles = useStyles();
  return (
    <>
      <Text style={styles.title}>Payment Method Icon Variants:</Text>
      <View>
        <Text variant="body1" weight="semiBold" style={styles.subtitle}>
          Default:
        </Text>
      </View>
      <View style={styles.singleContainer}>
        <View style={styles.iconsWrapper}>
          {socialVariants.map((variant, index) => (
            <View key={index} style={styles.iconVariant}>
              <Icons.SocialIcon
                variant={variant as keyof typeof socialVariantsObj}
              />
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text variant="body1" weight="semiBold" style={styles.subtitle}>
          Filled:
        </Text>
      </View>
      <View style={styles.singleContainer}>
        <View style={styles.iconsWrapper}>
          {socialVariants.map((variant, index) => (
            <View key={index} style={styles.iconVariant}>
              <Icons.SocialIcon
                fill="#D0D5DD"
                variant={variant as keyof typeof socialVariantsObj}
              />
            </View>
          ))}
        </View>
        <View style={styles.iconsWrapper}>
          {socialVariants.map((variant, index) => (
            <View key={index} style={styles.iconVariant}>
              <Icons.SocialIcon
                fill="#667085"
                variant={variant as keyof typeof socialVariantsObj}
              />
            </View>
          ))}
        </View>
        <View style={styles.iconsWrapper}>
          {socialVariants.map((variant, index) => (
            <View key={index} style={styles.iconVariant}>
              <Icons.SocialIcon
                fill="#FFFFFF"
                variant={variant as keyof typeof socialVariantsObj}
              />
            </View>
          ))}
        </View>
        <View style={styles.iconsWrapper}>
          {socialVariants.map((variant, index) => (
            <View key={index} style={styles.iconVariant}>
              <Icons.SocialIcon
                fill="#E4E7EC"
                variant={variant as keyof typeof socialVariantsObj}
              />
            </View>
          ))}
        </View>
      </View>
    </>
  );
};
