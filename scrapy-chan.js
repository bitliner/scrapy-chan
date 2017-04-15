'use strict';


let ScrapyChan = function(urls) {
  return require('./lib/Url')(urls);
};

Object.assign(ScrapyChan, {
  DownloadPageWithoutJs: require('./lib/DownloadPageWithoutJs'),
  ParseHackerNewsExample: require('./lib/ParseHackerNewsExample'),
  Print: require('./lib/Print'),
  DownloadPageWithoutJsDistributely: require('./lib/distributed/client/DownloadPageWithoutJsDistributely'),
  _stream: require('./lib/utils/stream'),
});





module.exports = ScrapyChan;

