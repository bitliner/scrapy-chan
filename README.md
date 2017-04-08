# scraps

Scraping made easy.

Scraps offers multiple modular utilities for scraping. 

They can be combined together to easily build and execute effective scraping.

# Installation

TBD

# Usage

```
pipe=[
  new Url('news.ycombinator.com'),
  new ScrapeSinglePage(),
  new Parse(),
  new Print()
];

Scraps(pipe)
  .on('end', ()=>{
    // end  
  })
  .on('error', (err)=>{
    // err
  });
```
