[中文文档](./README-ZH.md)

[![](https://img.shields.io/packagist/l/doctrine/orm.svg)](./LICENSE)
[![](https://img.shields.io/npm/v/webpack-mutipage-template.svg)](https://www.npmjs.com/package/webpack-mutipage-template)
[![](https://travis-ci.org/Aaron00101010/webpack-mutipage-template.svg?branch=master)](https://travis-ci.org/Aaron00101010/webpack-mutipage-template)

# Quick Start

```bash
npm i && npm run dev
```

# Feature

- Traverse entries, generate html, can introduce public html, such as header, footer.
- Generate a page containing all the build pages for easy overview and jump to the corresponding page.
- css sprite, which can put images that need to be integrated into a folder, and generate sprite images and scss style files for each directory. Implementation reference [webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith)。
- Code quality detection, introduces eslint, stylelint, uses git-hook to format the code before commit, guarantees the quality of the submitted code, and can also save the auto-formatted code with the editor plug-in (VSCode recommends using prettier).
- css autoprefix, the css attribute is automatically arranged in alphabetical order.
- webpack-analyzer visual code structure analysis for code file size optimization.
- Develop a webapck configuration file with nodemon. The configuration file is automatically executed when the configuration file changes, making it easy to modify the test configuration.
- Align the development model with the production environment by configuring routing

# CLI

```js
 "scripts": {
    //bundle
    "build": "webpack --config ./build/webpack.config.prod.js --progress --mode production",
    //development
    "dev": "webpack-dev-server --config ./build/webpack.config.dev.js --mode development --progress --open",
    //bunle analyzer
    "report": "webpack-bundle-analyzer ./temp/report.json",
    //develop webpack dev config
    "config:dev": "nodemon --watch ./build/*.js --exec \"npm run dev \"",
    //develop webpack build config
    "config:build": "nodemon --watch ./build/*.js --exec \"npm run build\"",
    //eslint
    "eslint": "eslint --fix ./",
    //style lint
    "stylelint": "stylelint --fix \"./src/**/*.scss\" \"./src/**/*.css\""
  },
```
