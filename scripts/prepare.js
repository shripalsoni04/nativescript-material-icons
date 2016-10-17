/**
 * For Dev Only.
 * Copies fontFile to the package from material-desigin-icons package and 
 * prepares css classes for all the icons based on codePoints provided by 
 * material-design-icons package.
 */
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var config = require('./config').dev;

var cwd = process.cwd() + '/';

function copyFontFile() {
  fs.writeFileSync(config.fontFileDestPath, fs.readFileSync(config.fontFileSrcPath));
}

function generateCSSClasses() {
  var lineReader = readline.createInterface({
    input: fs.createReadStream(config.codePointFilePath)
  });

  var writeStream = fs.createWriteStream(
    config.cssFileDestPath, { 'flags': 'w' }
  );

  lineReader.on('line', function (line) {
    var arrData = line.split(' ');
    var className = arrData[0].replace(/_/g, '-');
    var unicode = '\\u' + arrData[1];
    writeStream.write(
      '.' + config.classPrefix + '-' + className + ':before ' + '{\n  ' +
      'content: "' + unicode + '";\n' +
      '}\n\n');
  });

  lineReader.on('close', function () {
    writeStream.end();
  });
}

function main() {
  copyFontFile();
  generateCSSClasses();
}

main();