# Nativescript Material Icons
This is a simple package which contains css classes for all material design icons and MaterialIcons font.

## Why This Plugin
To use any font icon in nativescript project, there is a great plugin [nativescript-fonticon](https://github.com/NathanWalker/nativescript-fonticon) and for angular native projects [nativescript-ng2-fonticon](https://github.com/NathanWalker/nativescript-ng2-fonticon).
That plugin requires a font file and a css file containing mapping of className and unicode of the icon.

[material-design-icons](https://github.com/google/material-design-icons) repository do not provide css file so we need to generate it.

This plugin provides the ready to use css file containing mapping of className and its unicode. This plugin also automatically copy the MaterialIcons-Regular.ttf file to `app/fonts` folder and `material-design-icons.css` file to `app/` directory. So you don't need to manually add those files. And upon uninstall of this plugin will remove those two files.