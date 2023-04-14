// Script which compares versions of packages in build directory with versions in npm registry
// and publishes packages which versions are different
const shell = require('shelljs');
const fs = require('fs');
const {buildDir} = require('./buildConstants');

shell.config.silent = true;

const getNpmVersion = packageName => {
  return new Promise((resolve, reject) => {
    shell.exec(
      `npm view ${packageName} version`,
      {silent: true},
      (code, stdout, stderr) => {
        if (code === 0) {
          resolve(stdout);
        } else {
          // Check if package doesn't exist
          // If it doesn't exist, it means that it's a new package, and we can deploy it
          if (String(stderr).indexOf('npm ERR! 404') >= 0) {
            resolve('0.0.0');
          } else {
            reject(stderr);
          }
        }
      },
    );
  });
};

const getPackagesToDeploy = async () => {
  let dirs = [];
  const packagesToDeploy = [];
  try {
    dirs = fs.readdirSync(buildDir);
  } catch (e) {
    console.log('\x1b[31m', "Build directory doesn't exist");
    return [];
  }
  console.log('');
  console.log(
    '\x1b[36m',
    'Comparing built packages versions with npm versions...',
  );
  console.log('\x1b[0m');
  for (const dir of dirs) {
    const packagePath = `${buildDir}/${dir}/package.json`;

    if (fs.existsSync(packagePath)) {
      const packageFile = fs.readFileSync(packagePath, 'utf8');
      const packageObj = JSON.parse(packageFile);
      const {name, version: versionInPackage} = packageObj;
      const npmVersion = await getNpmVersion(name);
      if (String(npmVersion).trim() === String(versionInPackage).trim()) {
        console.log(`${name}@${versionInPackage} is up to date`);
      } else {
        packagesToDeploy.push({name, version: versionInPackage, dir});
      }
    }
  }

  return packagesToDeploy;
};

const deployPackages = packages => {
  if (packages.length) {
    console.log('');
    console.log(
      'Packages to deploy',
      packages.map(({name, version}) => `${name}@${version}`),
    );
    packages.forEach(({dir, name, version}) => {
      try {
        if (fs.existsSync(`${buildDir}/${dir}`)) {
          shell.cd(`${buildDir}/${dir}`);
          console.log('\x1b[1m');
          shell.exec('npm publish --access public', (code, out, err) => {
            if (code !== 0) {
              console.error(`Error publishing ${dir}`);
              console.error(err);
              return null;
            }
            console.log(
              '\x1b[32m',
              `${name}@${version} successfully published`,
            );
          });
          shell.cd('../../');
        } else {
          console.error(`Directory ${buildDir}/${dir} doesn't exist`);
        }
      } catch (e) {
        console.log('\x1b[31m', e);
      }
    });
  } else {
    console.log('\x1b[36m', 'No packages to deploy');
  }
};

getPackagesToDeploy().then(packages => {
  deployPackages(packages);
});
