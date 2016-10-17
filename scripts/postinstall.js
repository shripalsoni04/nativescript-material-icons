/**
 * Copies font file to app/fonts path and css file to app/ path.
 */
var fs = require('fs');
var config = require('./config');

function copyFontFile() {
  fs.writeFileSync(config.fontFileDestPath, fs.readFileSync(config.fontFileSrcPath));
}

function copyCSSFile() {
  fs.writeFileSync(config.cssFileDestPath, fs.readFileSync(config.cssFileSrcPath));
}

function main() {
  copyFontFile();
  copyCSSFile();
}

main();