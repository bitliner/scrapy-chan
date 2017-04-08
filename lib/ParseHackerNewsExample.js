let _stream = require('./utils/stream');
let request = require('request');
let cheerio = require('cheerio');

module.exports = function() {
  return _stream(
    function(htmlCode, encoding, done) {
      let $ = cheerio.load(htmlCode);
      let result = [];

      // parse objects
      $('.storylink')
        .each(function() {
          let $el = $(this);


          result.push({
            title: $el.text().trim(),
            link: $el.attr('href')
          });
        });

      // push to next stream
      result.forEach((parsedObj) => {
        this.push(parsedObj);
      });

      done();
    });
}