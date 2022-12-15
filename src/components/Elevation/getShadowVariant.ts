import {ShadowVariant, TShadowVariant} from './types';
import {ShadowProps} from 'react-native-shadow-2';

interface IShadowVariant {
  parentShadow: ShadowProps;
  childShadow: ShadowProps;
}

export const getShadowVariant = (variant: TShadowVariant): IShadowVariant => {
  const mediumShadow: IShadowVariant = {
    parentShadow: {
      distance: 8,
      startColor: 'rgba(102, 112, 133, 0.15)',
      offset: [0, 4],
    },
    childShadow: {
      distance: 3,
      startColor: 'rgba(102, 112, 133, 0.2)',
      offset: [0, 1],
    },
  };
  switch (variant) {
    case ShadowVariant.extraLight:
      return {
        parentShadow: {
          distance: 2,
          startColor: 'rgba(102, 112, 133, 0.2)',
          offset: [0, 1],
        },
        childShadow: {
          distance: 3,
          offset: [0, 1],
          startColor: 'rgba(102, 112, 133, 0.15)',
        },
      };
    case ShadowVariant.light:
      return {
        parentShadow: {
          distance: 2,
          startColor: 'rgba(102, 112, 133, 0.2)',
          offset: [0, 1],
        },
        childShadow: {
          distance: 6,
          offset: [0, 2],
          startColor: 'rgba(102, 112, 133, 0.15)',
        },
      };
    case ShadowVariant.medium:
      return mediumShadow;
    case ShadowVariant.heavy:
      return {
        parentShadow: {
          distance: 10,
          startColor: 'rgba(102, 112, 133, 0.15)',
          offset: [0, 6],
        },
        childShadow: {
          distance: 3,
          offset: [0, 2],
          startColor: 'rgba(102, 112, 133, 0.2)',
        },
      };
    case ShadowVariant.extraHeavy:
      return {
        parentShadow: {
          distance: 12,
          startColor: 'rgba(102, 112, 133, 0.15)',
          offset: [0, 8],
        },
        childShadow: {
          distance: 4,
          offset: [0, 4],
          startColor: 'rgba(102, 112, 133, 0.2)',
        },
      };
    default:
      return mediumShadow;
  }
};
