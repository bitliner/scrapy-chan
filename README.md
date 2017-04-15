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

It executes a GET request to download the Html content identified by an URL. 

**Stream Input**

`url: String` - a string representing an URL - e.g. "http://news.ycombinator.com"

**Stream Output**

`html: String` - a string representing the html code for an input URL - e.g. "http://news.ycombinator.com"

**Example**

```
SC('news.ycombinator.com')
  .pipe( SC.DownloadPageWithoutJs() )
  .pipe( // this stream will receive the html content of 'news.ycombinator.com' )
```

## ParseHackerNewsExample

It parses news (*title* and *link*) from HackerNews.

**Stream Input**

`html: String` - a string representing an html page

**Stream Output**

`objects: Array[]` - Array of parsed elements

**Example**

```
SC('news.ycombinator.com')
  .pipe( SC.DownloadPageWithoutJs() )
  .pipe( SC.ParseHackerNewsExample )
  .pipe( // this stream will receive a set of objects from SC.ParseHackerNewsExample )
```


---

## PrintHackerNewsExample

It prints to the console news (*title* and *link*) from HackerNews.

* **Stream Input**: `Array` - an array of objects, where each object have a *title* and *link* fields
* **Stream Output**: `Array` - the same Array received as input