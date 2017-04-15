let SC = require('../');


SC('news.ycombinator.com')
  .pipe(SC.DownloadPageWithoutJs())
  .pipe(SC.ParseHackerNewsExample())
  .pipe(SC.PrintHackerNewsExample())
  .on('finish', () => {
    console.log('End or scraping!');
  // end  
  })
  .on('error', (err) => {
    console.log('Ooooops', err);
  });