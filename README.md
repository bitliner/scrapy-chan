# scrapy-chan

Scraping made easy.

`scrapy-chan` offers multiple modular utilities for scraping. 

They can be combined together to easily build and execute effective scraping.

# Installation

`npm i --save scrapy-chan`

# Usage

**Single process**

```
let SC = require('scrapy-chan');

SC.Url('news.ycombinator.com')
  .pipe( SC.ScrapeSinglePageWithoutAjax() )
  .pipe( SC.Parse() )
  .pipe( SC.Print() )
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```

**Distributed**
```
let SC = require('scrapy-chan');

SC.Url('news.ycombinator.com')
  .pipe( SC.ScrapeSinglePageDistributely() ) // send url and receives Html
  .pipe( SC.Parse() )
  .pipe( SC.Print() )
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```

# Utilities

* [`Url`](#url)
* [`DownloadPageWithoutJs`](#downloadpagewithoutjs)
* [`ParseHackerNewsExample`](#parsehackernewsexample)
* [`PrintExample`](#printexample)

## Url

**Input**

* `urls` - a string or an array of URLs

## DownloadPageWithoutJs

**Input**

* `conf` - a string representing an URL - e.g. "http://news.ycombinator.com"

## ParseHackerNewsExample

**Input**

* `html` - a string representing an html page

## PrintExample

**Input**

* `objects` - an array of objects, where each object have a *title* and *link* fields