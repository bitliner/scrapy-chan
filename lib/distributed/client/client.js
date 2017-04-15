const _stream = require('../../utils/stream');
const kue = require('kue');
const pino = require('pino')();
const queue = kue.createQueue();


module.exports = function(path) {
  return _stream(function(conf, encoding, done) {
    pino.info('Conf', conf);

    // console.log('conf', conf);

    let job = queue
      .create(path, conf)
      .removeOnComplete(true)
      .save((err) => {
        if (err) {
          return done(err);
        }

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




  });
}