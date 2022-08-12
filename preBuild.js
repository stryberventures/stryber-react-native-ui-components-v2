const {components, name} = require('./export.config.json');
const fs = require('fs-extra');

// Returns components entries based on export.config.js

const getComponentsEntries = () => {
  const entry = {};
  Object.keys(components).forEach(dir => {
    entry[dir] = `./src/components/${dir}/index.tsx`;
  });

  return entry;
};

// Returns list of external libraries based on peerDependencies

const getComponentsExternals = () => {
  const componentsList = Object.keys(components);
  let libComponents = componentsList.map(dir => new RegExp(`.+${dir}$`, 'i'));
  const externalsSet = new Set(libComponents);

  componentsList.forEach(component => {
    try {
      const item = fs.readFileSync(
        `./src/components/${component}/package.json`,
        'utf8',
      );
      const packageObject = JSON.parse(item);
      const peers = Object.keys(packageObject.peerDependencies) || [];
      peers.forEach(peer => !peer.includes(name) && externalsSet.add(peer));
    } catch (e) {
      console.error(
        `package.json file in missed in ./src/components/${component}/package.json`,
      );
    }
  });

  return Array.from(externalsSet);
};

module.exports = {
  entry: getComponentsEntries(),
  externals: getComponentsExternals(),
};
