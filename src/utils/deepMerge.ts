export function isObject(item: any) {
  return item && typeof item === 'object' && !Array.isArray(item);
}
/**
 * Deep merge of objects. If key is not an object, function takes value from target object
 * @param source mergeObject base object
 * @param target mergeObject
 */
export function merge(source: any, target: any) {
  const output = Object.assign({}, source);
  if (isObject(source) && isObject(target)) {
    Object.keys(target).forEach(key => {
      if (isObject(target[key])) {
        if (!(key in source)) {
          Object.assign(output, {[key]: target[key]});
        } else {
          output[key] = merge(source[key], target[key]);
        }
      } else {
        Object.assign(output, {[key]: target[key]});
      }
    });
  }
  return output;
}
