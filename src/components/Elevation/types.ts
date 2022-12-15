export enum ShadowVariant {
  extraLight = 'extraLight',
  light = 'light',
  medium = 'medium',
  heavy = 'heavy',
  extraHeavy = 'extraHeavy',
}

export type TShadowVariant = keyof typeof ShadowVariant;
