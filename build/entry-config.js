const glob = require('glob');
const path = require('path')

const entries = glob.sync('../src/**/*.js');

const entriesArr = [];

const htmlTemplateArr = [];

console.log(entries);


module.exports = {
  entriesArr,
  htmlTemplateArr
}
