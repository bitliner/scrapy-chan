const kue = require('kue');

const queue = kue.createQueue();
const paths = require('../paths');
const DownloadPageWithoutJs = require('../../DownloadPageWithoutJs');

queue.process(paths.downloadPageWithoutJsDistributely, (job, done) => {
  let uri;
  let url = job.data;
  if (typeof url === 'string') {
    uri = url;
  }

  let stream;

  stream = DownloadPageWithoutJs();
  stream.on('data', (d) => {
    // sending progress...
    job.progress(0, 0, d);
  });
  stream.on('error', (err) => {
    // console.log('Error', err);
    done(err);
  });
  stream.on('finish', () => {
    // end of stream
    console.log('// end of stream')
    done();
  });

  stream.write(uri);
  stream.end();
  //   stream.end();



});