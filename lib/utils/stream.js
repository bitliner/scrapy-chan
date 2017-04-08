const through2 = require('through2');

module.exports = function(fn) {
  return through2.obj(fn);
}