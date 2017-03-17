var fs = require('fs');
var path = require('path');
var chalk = require('chalk');
var {parse} = require('react-docgen')

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
}

function getFiles(srcpath) {
  return fs.readdirSync(srcpath).filter(file => fs.statSync(path.join(srcpath, file)).isFile())
}

function writeFile(filename, content) {
  fs.writeFile(path.join(__dirname, '../src', 'docs', filename), content, function (err) {
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
  let examples = getExampleFiles(componentName);
  return examples.map(file => {
    let filePath = path.join(examplesPath, componentName, file)
    let content = readFile(filePath)
    let info = parse(content);
    return {
      // Remove the .js extension. Assume the component's name matches the filename.
      name: file.slice(0, -3),
      description: info.description,
      code: content
    };
  });
}

function getComponentData(componentPath, examplePath, componentName) {
  const content = readFile(path.join(componentPath, componentName, componentName + '.js'));
  let info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(examplePath, componentName)
  }
}

function generate(componentsPath, examplesPath) {
  const componentData = getDirectories(componentsPath).map(componentName => {
    return getComponentData(componentsPath, examplesPath, componentName);
  });

  writeFile('componentData.js', "/* eslint-disable */\n export default " + JSON.stringify(componentData));
}

const examplesPath = path.join(__dirname, '../src', 'docs', 'examples');
const componentsPath = path.join(__dirname, '../src', 'components');
generate(componentsPath, examplesPath);
