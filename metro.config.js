// exclusionList is a function that takes an array of regexes and combines
// them with the default exclusions to return a single regex.
// please see: https://stackoverflow.com/a/41963217/8791773 for more info
const exclusionList = require('metro-config/src/defaults/exclusionList');
const {components} = require('./export.config.json');
const {buildDir} = require('./buildConstants');

// get all package.json files from build directory
const getComponentsBuildPath = () => {
  const componentsList = Object.keys(components);
  return componentsList.map(dir => `${buildDir}/${dir}/package.json`);
};

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    resolverMainFields: ['sbmodern', 'react-native', 'browser', 'main'],
    // exclude all package.json files from build directory
    blacklistRE: exclusionList(getComponentsBuildPath()),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
