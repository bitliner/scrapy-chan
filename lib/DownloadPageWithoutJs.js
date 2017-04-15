const _stream = require('./utils/stream');

const request = require('request');

module.exports = function() {
  return _stream(
    function(url, encoding, done) {
      request
        .get(url, (err, res, body) => {
          if (err) {
            return done(err);
          }

          this.push(body);
          // this.emit('data', body)
          done();
        });
    });
}