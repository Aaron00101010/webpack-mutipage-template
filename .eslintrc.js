const globalLibsVarsConfig = require('./build/global-js-lib-config')

for (key in globalLibsVarsConfig) {
  globalLibsVarsConfig[key] = true
}

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  extends: ['standard'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  globals: globalLibsVarsConfig
}
