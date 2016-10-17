/**
 * Removes font file from app/fonts path and css file from app/ path.
 */
var fs = require('fs');
var config = require('./config');

function removeFontFile() {
  try {
    fs.unlinkSync(config.fontFileDestPath);
  } catch (e) {
    // file does not exists
  }
}

function removeCSSFile() {
  try {
    fs.unlinkSync(config.cssFileDestPath);
  } catch (e) {
    // file does not exists
  }
}

function main() {
  removeFontFile();
  removeCSSFile();
}

main();