var newsfeed = {











} //end of newsfeed


var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=crypto-coins-news&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    });


var newurl = 'https://newsapi.org/v2/everything?' +
          'q=+cryptocurrency+AND(+bitcoin+OR+ethereum+OR+litcoin+OR+ripple+OR+zcash)&' +
          'sources=bbc-news,associated-press,buzzfeed,bloomberg,business-insider,crypto-coins-news,financial-times,engadget,the-economist,the-wall-street-journal,vice-news&' +
          'language=en&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

var req = new Request(newurl);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })




    //bitcoin, ethereum, ripple, litecoin, zcash

    //new searchon crcy

    //fx converter coin to crcy