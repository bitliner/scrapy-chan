const _stream = require('../../utils/stream');
const kue = require('kue');
const pino = require('pino')();


module.exports = function(path) {

  const queue = kue.createQueue();

  return _stream(function(conf, encoding, done) {

    pino.info('Conf', conf);

    // console.log('conf', conf);

    let job = queue
      .create(path, conf)
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
            console.log('progress', data)
            console.log('this.push', this.push)
            this.push(data);
          })
          .on('failed', (err) => {
            done(err);
          });
      });




  });
}