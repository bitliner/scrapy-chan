# scrapy-chan

Scraping made easy.

Scraps offers multiple modular utilities for scraping. 

They can be combined together to easily build and execute effective scraping.

# Installation

`npm i --save scrapy-chan`

# Usage

```
let SC = require('scrapy-chan');

SC.Url('news.ycombinator.com')
  .pipe(SC.ScrapeSinglePageWithoutAjax())
  .pipe(SC.Parse())
  .pipe(SC.Print())
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```

# Utilities

TBD
