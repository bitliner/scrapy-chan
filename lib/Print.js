let through2 = require('through2');
let request = require('request');
var pino = require('pino')();
var emojic = require('emojic')


module.exports = function() {
  return through2.obj(
    function(obj, encoding, done) {
      console.log(emojic.ghost, ' >>> Title', obj.title);
      console.log(emojic.link, ' >>> Link', obj.link);
      console.log('')
      //   console.log(emojic.ghost, obj.title, emojic.link, obj.link);
      done();
    });
}