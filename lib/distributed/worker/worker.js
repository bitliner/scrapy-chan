const kue = require('kue');

const queue = kue.createQueue();
const paths = require('../');
const DownloadPageWithoutJs = require('../../DownloadPageWithoutJs');

queue.process(paths.downloadPageWithoutJsDistributely, (url, done) => {
  let uri;
  if (typeof url === 'string') {
    uri = url;
  }

  let stream;

  stream = DownloadPageWithoutJs();
  stream.on('data', (d) => {
    job.progress(d);
  });
  stream.on('error', () => {
    done(err);
  });
  stream.on('end', () => {
    done();
  });

  stream.write(uri);
  //   stream.end();



});