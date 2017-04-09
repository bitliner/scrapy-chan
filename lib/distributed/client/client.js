const _stream = require('../../utils/stream');
const kue = require('kue');


module.exports = function(path) {

  const queue = kue.createQueue();

  return _stream(function(conf, encoding, done) {

    let job = queue
      .create(path, conf)
      .save(function(err) {
        if (err) {
          return done(err);
        }
      });

    job
      .on('complete', (result) => {
        this.push(result);
        done();
      })
      .on('progress', (progress, data) => {
        this.push(data);
      })
      .on('failed', (err) => {
        done(err);
      });


  });
}