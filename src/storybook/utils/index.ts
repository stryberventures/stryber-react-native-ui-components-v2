import {components, name} from '../../../export.config.json';
const componentsList = Object.keys(components);

export const replacePaths = (sources: string) => {
  return componentsList.reduce((acc, key) => {
    const regExp = new RegExp(`(\\.{2}\\/)+components/${key}(?![\\w\\d])`, 'g');
    return acc.replace(
      regExp,
      `${name}.${components[key as keyof typeof components]}`,
    );
  }, sources);
};
