$(document).ready(function() {

var cryptos = ["bitcoin", "etheruem", "ripple", "litecoin", "zcash"];
var buttons = ["Crypto Coins News", "New York Times", "Bitcoin", "Ethereum", "Ripple", "Litecoin", "Zcash"];



var newsfeed = {



}; //end of newsfeed


var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=crypto-coins-news&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

var req = new Request(url); //this is for the fetch method, which I don't quite understand

  function headlines () {


    $("#newsfeed").empty();


   $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {


          console.log(response);  


          for ( i = 0; i < response.articles.length; i ++) {


            $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p>');

           
            setInterval("location.reload(true)", 300000);

          }; //end of for loop

        });

        
      };


      function buttonMaker () {


      for (i = 0; i < buttons.length; i ++) {

        var Btn = $("<button>");
        Btn.addClass("btn btn-success m-2 p-2").attr("data-currency", buttons[i]).text(buttons[i]);
        $("#news-buttons").append(Btn);

      } // end of for loop

      };  //end of buttons

$(document).on("click", ".btn", function ccynews () { //document cos dynamically created buttons

      event.preventDefault();
      
            if ($(this).attr("data-currency") === "Crypto Coins News" ) {

            $(".panel-title").text($(this).attr("data-currency") + " Headlines:");

            headlines();

          } else if ($(this).attr("data-currency") === "New York Times" )  { 

            setInterval("location.reload(true)", 300000);

        $(".panel-title").text($(this).attr("data-currency") + " Headlines:");

        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
        'api-key': "30372883e9d3418786ccec672e21332b",
        'q': "crypto",
        'sort': "newest"
          });
        $.ajax({
         url: url,
        method: 'GET',
        }).done(function(response) {

          $("#newsfeed").empty();
            console.log(response);
            console.log("length: "+ response.response.docs.length);

           for ( i = 0; i < response.response.docs.length; i ++) { 


            $("#newsfeed").append('<h3>' + response.response.docs[i].headline.main + '</h3><p><a href=' + response.response.docs[i].web_url + ' target="_blank" </a>' + response.response.docs[i].snippet + '</p></a><p>Published: '+ moment(response.response.docs[i].pub_date).format("MMM Do YYYY") + '</p>' );



           }

        }).fail(function(err) {
        throw err;
});





          } else {


      $(".panel-title").text($(this).attr("data-currency") + " Headlines:"); 

var url = 'https://newsapi.org/v2/everything?' +
          'q=crypto+AND+'+ '+'+ $(this).attr("data-currency")+ '&' +
          'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

           setInterval("location.reload(true)", 300000);

          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

         


          $("#newsfeed").empty();


          for ( i = 0; i < response.articles.length; i ++) {

            if (response.articles[i].description === "" ) {

              //prevents adverts getting through, adverts have no descriptions


            } else {

            $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p>' );

          }}; //end of for loop

        }) };

        

      });








      $.ajax({
          url: "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH,BTC,XRP,LTC,ZEC&tsyms=USD,EUR,GBP,JPY",
          method: "GET"
        }).done(function(response) {

        	console.log(response);

        });


         $.ajax({
          url: "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=60&aggregate=3&e=CCCAGG",
          method: "GET"
        }).done(function(response) {

        	console.log(response);

        });


        buttonMaker();
        headlines();



}); //end of document ready




    //bitcoin, ethereum, ripple, litecoin, zcash

    //new feed on crcy

    //search for news in particular ccy

    //fx converter coin to crcy