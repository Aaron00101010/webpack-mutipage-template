[![](https://img.shields.io/packagist/l/doctrine/orm.svg)](./LICENSE)
[![](https://img.shields.io/npm/v/webpack-mutipage-template.svg)](https://www.npmjs.com/package/webpack-mutipage-template)
[![](https://travis-ci.org/Aaron00101010/webpack-mutipage-template.svg?branch=master)](https://travis-ci.org/Aaron00101010/webpack-mutipage-template)

# Quick Start

```bash
npm i && npm run dev
```

# Feature

- 遍历创建 entry,生成 html,可以引入公共 html,如 header,footer。
- 生成包含所有构建页面的列表 html，方便总览，跳转对应页面。
- css sprite,可以将需要整合的图片放入一个文件夹，针对每个目录生成 sprite 图片,scss 样式文件。实现使用参考[webpack-spritesmith](https://www.npmjs.com/package/webpack-spritesmith)。
- 代码质量检测，引入 eslint，stylelint，利用 git-hook 在 commit 前对代码时进行格式化，保证提交代码质量，也可以配合编辑器插件实现保存自动格式化代码（VSCode 推荐使用 prettier）。
- css autoprefix,css 属性按照字母顺序自动排列。
- webpack-analyzer 可视化代码结构分析，有利于代码文件大小优化。
- 利用 nodemon 开发 webapck 配置文件当配置文件变动时自动执行配置文件，方便修改测试配置。
- 通过配置路由，使开发模式与生产环境保持一致。

# CLI

```js
 "scripts": {
   //打包
    "build": "webpack --config ./build/webpack.config.prod.js --progress --mode production",
    //开发
    "dev": "webpack-dev-server --config ./build/webpack.config.dev.js --mode development --progress --open",
    //代码大小分析
    "report": "webpack-bundle-analyzer ./temp/report.json",
    //修改测试开发webpack配置
    "config:dev": "nodemon --watch ./build/*.js --exec \"npm run dev \"",
    //修改测试打包webpack配置
    "config:build": "nodemon --watch ./build/*.js --exec \"npm run build\"",
    //格式化，检查js代码
    "eslint": "eslint --fix ./",
    //格式化，检查css代码
    "stylelint": "stylelint --fix \"./src/**/*.scss\" \"./src/**/*.css\""
  },
```
