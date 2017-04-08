let through2 = require('through2');
let request = require('request');
let cheerio = require('cheerio');

module.exports = function() {
  return through2.obj(
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