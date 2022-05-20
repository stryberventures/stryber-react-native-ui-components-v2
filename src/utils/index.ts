export const validateInputValueLength = (value: string) => {
  if (value.length >= 40) {
    return value.slice(0, 40) + '...';
  }
};
