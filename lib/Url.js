const _stream = require('./utils/stream');

const pino = require('pino')();

function handleUrl(url, stream) {
  if (url.indexOf('https://') < 0) {
    url = 'https://' + url;
  }

  pino.info('Sending url', url);

  stream.write(url);
}
/**
 * @examples
 */
module.exports = function Url(url) {
  let stream;

  if (!url) {
    throw new Error('Please specify an URL as input parameter');
  }

  stream = _stream(function(url, encoding, done) {
    this.push(url);
    done();
  });


  if (!Array.isArray(url)) {
    url = [url];
  }

  pino.info('Sending url', url);
  url.forEach((url) => {
    handleUrl(url, stream)
  });
  stream.end();

  return stream;
}