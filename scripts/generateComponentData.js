var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var {parse} = require('react-docgen');
var chokidar = require('chokidar');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isFile())
}

function writeFile(filename, content) {
  fs.writeFile(path.join(__dirname, '../config', filename), content, function (err) {
    err ? console.log(err) : console.log(chalk.green("Component data saved."));
  });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getExampleFiles(componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName));
  } catch(error) {
    console.log(chalk.red(`No examples found for ${componentName}.`));
  }
  return exampleFiles;
}

function getExampleData(examplesPath, componentName) {
  var examples = getExampleFiles(componentName);
  return examples.map(file => {
    var filePath = path.join(examplesPath, componentName, file)
    var content = readFile(filePath)
    var info = parse(content);
    return {
      // By convention, component name should match the filename.
      // So remove the .js extension to get the component name.
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

function getComponentData(componentPath, examplePath, componentName) {
  var content = readFile(path.join(componentPath, componentName, componentName + '.js'));
  var info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(examplePath, componentName)
  }
}

function generate(componentsPath, examplesPath) {
  var componentData = getDirectories(componentsPath).map(componentName => {
    return getComponentData(componentsPath, examplesPath, componentName);
  });

  writeFile('componentData.js', "module.exports = " + JSON.stringify(componentData));
}

var examplesPath = path.join(__dirname, '../src', 'docs', 'examples');
var componentsPath = path.join(__dirname, '../src', 'components');

// Generate component metadata
generate(componentsPath, examplesPath);

// Regenerate component metadata anytime components or examples change.
chokidar.watch([examplesPath, componentsPath]).on('change', (event, path) => {
  generate(componentsPath, examplesPath);
});
