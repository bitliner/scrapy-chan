# scrapy-chan

Scraping made easy.

Scraps offers multiple modular utilities for scraping. 

They can be combined together to easily build and execute effective scraping.

# Installation

`npm i --save scrapy-chan`

# Usage

```
let ScrapyChan=require('scrapy-chan');

ScrapyChan.Url('news.ycombinator.com')
  .pipe(ScrapyChan.ScrapeSinglePageWithoutAjax())
  .pipe(ScrapyChan.Parse())
  .pipe(ScrapyChan.Print())
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```

# Utilities

TBD
