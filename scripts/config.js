var fs = require('fs');
var path = require('path');

var cwd = process.cwd() + '/';
var primaryDir = path.normalize(cwd + "../../");
var appDir = primaryDir + 'app/';

var fontFileName = 'MaterialIcons-Regular.ttf';
var cssFileName = 'material-design-icons.css';

module.exports = {
  dev: {
      fontFileSrcPath: cwd + 'node_modules/material-design-icons/iconfont/' + fontFileName,
      fontFileDestPath: cwd + fontFileName,
      codePointFilePath: './node_modules/material-design-icons/iconfont/codepoints',
      classPrefix: 'mdi',
      cssFileDestPath: cwd + cssFileName
  },
  fontFileSrcPath: cwd + fontFileName,
  fontFileDestDir: appDir + 'fonts', 
  fontFileDestPath: appDir + 'fonts/' + fontFileName,
  cssFileSrcPath: cwd + cssFileName,
  cssFileDestPath: appDir + cssFileName
};