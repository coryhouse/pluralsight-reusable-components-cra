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
    err ? console.log(err) : console.log(chalk.green("Example data saved."));
  });
}

function readFile(filePath, callback) {
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    err ? console.log(err) : callback(data);
  });
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

function generate(componentsPath, examplesPath, callback) {
  const componentData = [];
  const directories = getDirectories(componentsPath);
  const numDirectories = directories.length;
  let numDirectoriesProcessed = 0;

  directories.map(componentName => {
    readFile(path.join(componentsPath, componentName, componentName + '.js'), content => {
      let info = parse(content);
      let component = {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: []
      };

      let examples = getExampleFiles(componentName);
      let numExamples = examples.length;
      if (numExamples === 0) numDirectoriesProcessed++;
      let numExamplesProcessed = 0;
      examples.map(file => {
        let examplePath = path.join(examplesPath, componentName, file)
        readFile(examplePath, content => {
          let info = parse(content);
          component.examples.push({
            name: file.slice(0, -3), //Remove the .js extension,
            path: path.join('examples', componentName), // TODO: Make this configurable or move to Examples.js.
            description: info.description,
            code: content
          });
          numExamplesProcessed++;
          let componentProcessingComplete = numExamplesProcessed == numExamples;
          if (componentProcessingComplete) {
            numDirectoriesProcessed++;
            componentData.push(component);
            let jobComplete = numDirectoriesProcessed == numDirectories;
            if (jobComplete) callback(componentData);
          }
        });
      });
    });
  });
}

const examplesPath = path.join(__dirname, '../src', 'docs', 'examples');
const componentsPath = path.join(__dirname, '../src', 'components');
generate(componentsPath, examplesPath, componentData => {
    writeFile('componentData.js', "export default " + JSON.stringify(componentData));
});
