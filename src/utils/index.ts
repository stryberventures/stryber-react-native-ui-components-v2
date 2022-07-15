export const validateInputValueLength = (value: string) => {
  if (value.length >= 40) {
    return value.slice(0, 40) + '...';
  }
  return value;
};

export const isObjectEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};
