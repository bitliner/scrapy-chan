# scraps

Scraping made easy.

Scraps offers multiple modular utilities for scraping. 

They can be combined together to easily build and execute effective scraping.

# Installation

TBD

# Usage

```
pipe=[
  new Url(),
  ,
  ,
  new Print()
];

new Url('news.ycombinator.com')
  .pipe(new ScrapeSinglePage())
  .pipe(new Parse())
  .pipe(new Print())
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```
