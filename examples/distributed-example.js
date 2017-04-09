const SC = require('../');
const async = require('async');

let urls = ['news.ycombinator.com', 'news.ycombinator.com'];

async.each(urls, (url, done) => {
  SC.Url(url)
    .pipe(SC.DownloadPageWithoutJsDistributely({
      host: '192.168.99.100',
      port: '6379',
    })) // send url and receives Html
    .pipe(SC.ParseHackerNewsExample())
    .pipe(SC.Print())
    .on('end', () => {
      done()
    })
    .on('error', (err) => {
      done(err);
    });
}, (err) => {
  if (err) {
    return console.log('Error', err);
  }
  console.log('End');
});

