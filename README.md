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

SC('news.ycombinator.com')
  .pipe(SC.DownloadPageWithoutJs())
  .pipe(SC.ParseHackerNewsExample())
  .pipe(SC.Print())
  .on('finish', () => {
    console.log('End or scraping!');
  // end  
  })
  .on('error', (err) => {
    console.log('Ooooops', err);
  });
```

**Distributed**
```
let SC = require('scrapy-chan');

SC('news.ycombinator.com')
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

Each utility is a stream.

* [`DownloadPageWithoutJs`](#downloadpagewithoutjs) 
* [`ParseHackerNewsExample`](#parsehackernewsexample)
* [`PrintExample`](#printexample)



---



## DownloadPageWithoutJs

**Stream Input**

`conf: any` - a string representing an URL - e.g. "http://news.ycombinator.com"

**Stream Output**

`url: String` - a string representing an URL - e.g. "http://news.ycombinator.com"


```
SC.Url('news.ycombinator.com')
  .pipe( SC.DownloadPageWithoutJs() )
  .pipe( // this stream will )
```

## ParseHackerNewsExample

**Stream Input**

`html: String` - a string representing an html page

---

## PrintExample

**Stream Input**

`Array` - an array of objects, where each object have a *title* and *link* fields