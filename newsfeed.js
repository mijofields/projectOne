$(document).ready(function() {

var cryptos = ["bitcoin", "etheruem", "ripple", "litecoin", "zcash"];
var buttons = ["Headlines", "Bitcoin", "Ethereum", "Ripple", "Litecoin", "Zcash"];

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


          for ( i = 0; i < response.articles.length; i ++) {


            $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p><hr>');


          }; //end of for loop

        });

        
      };


      function buttonMaker () {


      for (i = 0; i < buttons.length; i ++) {

        var Btn = $("<button>");
        Btn.addClass("btn btn-success m-2 p-2").attr("data-currency", buttons[i]).text(buttons[i]);
        $("#news-buttons").append(Btn);

      } // end of for loop

      };  //end 0f buttons

$(document).on("click", ".btn", function() { //document cos dynamically created buttons

      event.preventDefault();

            if ($(this).attr("data-currency") === "Headlines" ) {

            $(".panel-title").text("CrypLife Headlines:");

            headlines();

          } else {


      $(".panel-title").text($(this).attr("data-currency") + " Headlines:"); 

var url = 'https://newsapi.org/v2/everything?' +
          'q=+'+ $(this).attr("data-currency")+ '&' +
          'sources=bbc-news,associated-press,buzzfeed,bloomberg,business-insider,crypto-coins-news,financial-times,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

          console.log(url);


          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {


          console.log(response);


          $("#newsfeed").empty();


          for ( i = 0; i < response.articles.length; i ++) {

            $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p><hr>');


          }; //end of for loop

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