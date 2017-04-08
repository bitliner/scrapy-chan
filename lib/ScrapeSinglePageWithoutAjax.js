let through2 = require('through2');
let request = require('request');

module.exports = function() {
  return through2.obj(
    function(url, encoding, done) {
      request
        .get(url, (err, res, body) => {
          if (err) {
            return done(err);
          }

          this.push(body);
          done();
        });
    });
}