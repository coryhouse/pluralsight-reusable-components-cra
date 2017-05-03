/* eslint-disable no-console */
var path = require('path');
var fse = require('fs-extra');

const files = [
  'README.md',
  'LICENSE'
];

Promise.all(
  files.map((file) => copyFile(file))
)
.then(() => createPackageFile());

function copyFile(file) {
  const libPath = resolveLibPath(file);
  return new Promise((resolve) => {
    fse.copy(
      file,
      libPath,
      (err) => {
        if (err) throw err;
        resolve();
      }
    );
  })
  .then(() => console.log(`Copied ${file} to ${libPath}`));
}

function resolveLibPath(file) {
  return path.resolve(__dirname, '../lib/', path.basename(file));
}

function createPackageFile() {
  return new Promise((resolve) => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
  .then((data) => JSON.parse(data))
  .then((packageData) => {
    const {
      author,
      version,
      description,
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
    } = packageData;

    // Note that I'm setting the name here
    // Note that I should also leave the private setting in canonical package.json
    // to avoid accidentally publishing from there, and change the name
    // to ps-react-build, to mimic material-ui.
    const minimalPackage = {
      name: 'pluralsight-reusable-components-cra',
      author,
      version,
      description,
      main: './index.js',
      keywords,
      repository,
      license,
      bugs,
      homepage,
      peerDependencies,
      dependencies,
    };

    return new Promise((resolve) => {
      const libPath = path.resolve(__dirname, '../lib/package.json');
      const data = JSON.stringify(minimalPackage, null, 2);
      fse.writeFile(libPath, data, (err) => {
        if (err) throw (err);
        console.log(`Created package.json in ${libPath}`);
        resolve();
      });
    });
  });
}
