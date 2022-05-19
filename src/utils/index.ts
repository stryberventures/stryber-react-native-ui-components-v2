export const validateInputValueLength = (value: any) => {
  if (typeof value === 'string' && value.length >= 40) {
    return value.slice(0, 40) + '...';
  }
  return value;
};
