let through2 = require('through2');

function handleUrl(url, stream) {
  if (url.indexOf('https://') < 0) {
    url = 'https://' + url;
  }

  stream.write(url);
}

module.exports = function(url) {
  let stream;

  if (!url) {
    throw new Error('Please specify an URL as input parameter');
  }

  stream = through2.obj(function(url, encoding, done) {
    this.push(url);
    done();
  });

  if (!Array.isArray(url)) {
    url = [url];
  }

  url.forEach((url) => {
    handleUrl(url, stream)
  });

  return stream;
}