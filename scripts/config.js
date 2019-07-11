var fs = require('fs');
var path = require('path');

var cwd = process.cwd() + '/';
var primaryDir = path.normalize(cwd + "../../");
var appDir = path.join(primaryDir,'src/');

var fontFileName = 'MaterialIcons-Regular.ttf';
var cssFileName = 'material-design-icons.css';

module.exports = {
  dev: {
      fontFileSrcPath: path.join(cwd, 'node_modules/material-design-icons/iconfont/',fontFileName),
      fontFileDestPath: path.join(cwd, fontFileName),
      codePointFilePath: './node_modules/material-design-icons/iconfont/codepoints',
      classPrefix: 'mdi',
      cssFileDestPath: path.join(cwd, cssFileName)
  },
  fontFileSrcPath: path.join(cwd, fontFileName),
  fontFileDestDir: path.join(appDir, 'fonts'), 
  fontFileDestPath: path.join(appDir, 'fonts/', fontFileName),
  cssFileSrcPath: path.join(cwd, cssFileName),
  cssFileDestPath: path.join(appDir, cssFileName)
};
