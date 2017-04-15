let _stream = require('./utils/stream');
let request = require('request');
var pino = require('pino')();
var emojic = require('emojic')


module.exports = function() {
  return _stream(
    function(obj, encoding, done) {
      console.log(emojic.ghost, ' >>> Title', obj.title);
      console.log(emojic.link, ' >>> Link', obj.link);
      console.log('');

      this.push(obj);

      done();
    });
}