/**
 * @description applies a mask to a string of digits
 * @param mask '+X(XXX)-XXXX'
 * @param value '12345'
 * @returns string '+1(234)-5'
 */
export const applyDigitMask = (value: string, mask: string): string => {
  let i = 0;
  const unmaskedValue = value.replace(/\D/g, '');
  const maskedValue = mask.replace(/[X\d]/g, maskChar => {
    const newValue =
      i < unmaskedValue.length ? unmaskedValue.charAt(i) : maskChar;
    i += 1;
    return newValue;
  });
  i = maskedValue.indexOf('X') >= 0 ? maskedValue.indexOf('X') : mask.length;

  return maskedValue.slice(0, i);
};
