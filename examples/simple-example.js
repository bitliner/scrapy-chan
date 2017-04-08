let Scraps = require('../');

Scraps.Url('news.ycombinator.com')
  .pipe(Scraps.ScrapeSinglePageWithoutAjax())
  .pipe(Scraps.ParseHackerNewsExample())
  .pipe(Scraps.Print())
  .on('finish', () => {
    console.log('End or scraping!');
  // end  
  })
  .on('error', (err) => {
    console.log('Ooooops', err);
  });