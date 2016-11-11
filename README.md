# Nativescript Material Icons
This is a simple package which contains css classes for all material design icons and MaterialIcons font.

## Why This Plugin
To use any font icons in nativescript project, there is a great plugin [nativescript-fonticon](https://github.com/NathanWalker/nativescript-fonticon) for vanilla nativescript project and [nativescript-ng2-fonticon](https://github.com/NathanWalker/nativescript-ng2-fonticon) for angular native projects. 
That plugin requires a font file and a css file containing mapping of className and unicode of the icon.

[material-design-icons](https://github.com/google/material-design-icons) repository do not provide css file so we need to generate it manually.

This plugin provides the ready to use css file containing mapping of className and its unicode. This plugin also automatically copy the MaterialIcons-Regular.ttf file to `app/fonts` folder and `material-design-icons.css` file to `app/` directory. So you don't need to manually add those files. Also, upon uninstall of this plugin, it will remove those two files.

## Usage
`npm install nativescript-material-icons --save`

## How to Use
Check this [step-by-step tutorial](http://shripalsoni.com/blog/material-font-icons-in-nativescript-angular-apps/) on how to use material design font icons in your nativescript angular applications. 