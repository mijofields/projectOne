// $(document).ready(function() {

// var cryptos = ["bitcoin", "etheruem", "ripple", "litecoin", "zcash"];
// var buttons = ["Crypto Coins News", "New York Times", "Bitcoin", "Ethereum", "Ripple", "Litecoin", "Zcash"];



// var newsfeed = {



// }; //end of newsfeed

//            // setInterval("location.reload(true)", 10000);  this is for page update, incorporate


// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'sources=crypto-coins-news&' +
//           'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

// var req = new Request(url); //this is for the fetch method, which I don't quite understand

//   function headlines () {


//     $("#newsfeed").empty();


//    $.ajax({
//           url: url,
//           method: "GET"
//         }).done(function(response) {


//           console.log(response);  


//           for ( i = 0; i < response.articles.length; i ++) {


//             $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p>');


//           }; //end of for loop

//         });

        
//       };


//       function buttonMaker () {


//       for (i = 0; i < buttons.length; i ++) {

//         var Btn = $("<button>");
//         Btn.addClass("btn btn-success m-2 p-2").attr("data-currency", buttons[i]).text(buttons[i]);
//         $("#news-buttons").append(Btn);

//       } // end of for loop

//       };  //end of buttons

// $(document).on("click", ".btn", function ccynews () { //document cos dynamically created buttons

//       event.preventDefault();
      
//             if ($(this).attr("data-currency") === "Crypto Coins News" ) {

//             $(".panel-title").text($(this).attr("data-currency") + " Headlines:");

//             headlines();

//           } else if ($(this).attr("data-currency") === "New York Times" )  { 


//         $(".panel-title").text($(this).attr("data-currency") + " Headlines:");

//         var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//         url += '?' + $.param({
//         'api-key': "30372883e9d3418786ccec672e21332b",
//         'q': "crypto",
//         'sort': "newest"
//           });
//         $.ajax({
//          url: url,
//         method: 'GET',
//         }).done(function(response) {

//           $("#newsfeed").empty();
//             console.log(response);
//             console.log("length: "+ response.response.docs.length);

//            for ( i = 0; i < response.response.docs.length; i ++) { 


//             $("#newsfeed").append('<h3>' + response.response.docs[i].headline.main + '</h3><p><a href=' + response.response.docs[i].web_url + ' target="_blank" </a>' + response.response.docs[i].snippet + '</p></a><p>Published: '+ moment(response.response.docs[i].pub_date).format("MMM Do YYYY") + '</p>' );



//            }

//         }).fail(function(err) {
//         throw err;
// });





//           } else {


//       $(".panel-title").text($(this).attr("data-currency") + " Headlines:"); 

// var url = 'https://newsapi.org/v2/everything?' +
//           'q=crypto+AND+'+ '+'+ $(this).attr("data-currency")+ '&' +
//           'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
//           'language=en&' +
//           'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';


//           $.ajax({
//           url: url,
//           method: "GET"
//         }).done(function(response) {

         


//           $("#newsfeed").empty();


//           for ( i = 0; i < response.articles.length; i ++) {

//             if (response.articles[i].description === "" ) {

//               //prevents adverts getting through, adverts have no descriptions


//             } else {

//             $("#newsfeed").append('<h3>' + response.articles[i].title + '</h3><p><a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p>' );

//           }}; //end of for loop

//         }) };

        

//       });


$(document).ready(function() {


    var numberOfArticles = 4;

function bitcoin () {


console.log("bitcoin working");


  var url = 'https://newsapi.org/v2/everything?' +
          'q=crypto+AND+bitcoin&' +
          'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'sortBy=publishedAt&' + 
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';


          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

         console.log(response);


          $("#newsfeed1").empty();


          for ( i = 0; i < response.articles.length ; i++) { //need to fix this issue a counter on real articles

            if (response.articles[i].description === "" 
               ) {

              //prevents adverts getting through, adverts have no descriptions


            } else {

            $("#newsfeed1").append('<div class="newsitem"><h3>' + response.articles[i].title + '</h3>' + '<p>' + '<a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p></div>' );

          }}; //end of for loop

        }) }; //end of bitcoin


function ethereum () {

  console.log("ethereum working");


  var url = 'https://newsapi.org/v2/everything?' +
          'q=crypto+AND+ethereum&' +
          'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'sortBy=publishedAt&' + 
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';


          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

         console.log(response);


          $("#newsfeed2").empty();


          for ( var i = 0; i < response.articles.length ; i++) { //need to fix this issue a counter on real articles
    
            if (response.articles[i].description === "" ) {

            } else {


            $("#newsfeed2").append('<div class="newsitem"><h3>' + response.articles[i].title + '</h3>' + '<p>' + '<a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p></div>' );

          }}; //end of for loop

        }) }; //end of ethereum


        function litecoin () {


          console.log("litecoin working");


  var url = 'https://newsapi.org/v2/everything?' +
          'q=crypto+AND+litecoin&' +
          'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'sortBy=publishedAt&' + 
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';


          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

         console.log(response);


          $("#newsfeed3").empty();


          for ( i = 0; i < response.articles.length ; i++) { //need to fix this issue a counter on real articles
              
            if (response.articles[i].description === "" 
              ) {

              //prevents adverts getting through, adverts have no descriptions


            } else {

            $("#newsfeed3").append('<div class="newsitem"><h3>' + response.articles[i].title + '</h3>' + '<p>' + '<a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p></div>' );

          }}; //end of for loop

        }) }; //end of litecoin

                function ripple () {

                  console.log("ripple working");


  var url = 'https://newsapi.org/v2/everything?' +
          'q=crypto+AND+ripple&' +
          'sources=bbc-news,cnbc,associated-press,buzzfeed,bloomberg,hacker-news,business-insider,the-huffington-post,crypto-coins-news,financial-times,reuters,engadget,the-economist,the-wall-street-journal,google-news,next-big-future&' +
          'language=en&' +
          'sortBy=publishedAt&' + 
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';


          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

         console.log(response);


          $("#newsfeed4").empty();


          for ( i = 0; i < response.articles.length ; i++) { //need to fix this issue a counter on real articles

            if (response.articles[i].description === "" 
              ) {

              //prevents adverts getting through, adverts have no descriptions


            } else {

           $("#newsfeed4").append('<div class="newsitem"><h3>' + response.articles[i].title + '</h3>' + '<p>' + '<a href=' + response.articles[i].url+ ' target="_blank" </a>' + response.articles[i].description + '</p></a><p>Published: '+ moment(response.articles[i].publishedAt).format("MMM Do YYYY") + '</p></div>' );

          }}; //end of for loop

        }) }; //end of ripple


    $(".jump").on("click", function() {


      console.log("working");
      $(this).attr("data-id");
      var news = $(this).attr("data-id");

      if ( news === "bitcoin")  {


        bitcoin();


      } else if ( news = "ethereum") {

        ethereum();

      } else if ( news === "litecoin"){

        litecoin();
      } else {

        ripple();

      }});


     function newsTicker() {


          $('.marquee').marquee({
        duration: 7500,
        pauseOnHover: true
});

          $(".marquee").bind('finished', function(){

          console.log("finished is working");

          var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=crypto-coins-news&' +
          'apiKey=dc3fcd25bb3c4841be7cd4109d6d1273';

          $.ajax({
          url: url,
          method: "GET"
        }).done(function(response) {

          console.log(response);

          $(".marquee").marquee('destroy');

            var newsTicker = '<a href=' + response.articles[0].url+ ' target="_blank" </a>' + response.articles[0].title + ', ' 
              + '<a href=' + response.articles[1].url+ ' target="_blank" </a>' + response.articles[1].title + ',  '
              + '<a href=' + response.articles[2].url+ ' target="_blank" </a>' + response.articles[2].title + ',  '
              + '<a href=' + response.articles[3].url+ ' target="_blank" </a>' + response.articles[3].title + ',  '
              + '<a href=' + response.articles[4].url+ ' target="_blank" </a>' + response.articles[4].title + ',  ' 
              + '<a href=' + response.articles[5].url+ ' target="_blank" </a>' + response.articles[5].title + ',  '
              + '<a href=' + response.articles[6].url+ ' target="_blank" </a>' + response.articles[6].title + ',  '
              + '<a href=' + response.articles[7].url+ ' target="_blank" </a>' + response.articles[7].title + ',  '
              + '<a href=' + response.articles[8].url+ ' target="_blank" </a>' + response.articles[8].title + ',  '
              + '<a href="https://newsapi.org" target="_blank" </a>' + "Powered by News API" ;


            console.log(newsTicker);


        $(".marquee").html(newsTicker);


        $('.marquee').marquee({
        duration: 7500,
        pauseOnHover: true
});




        }); //end of done






          }); //end of finished

 }; //end of newsticker






 //end of function


  bitcoin();
  ethereum();
  litecoin();
  ripple();
  newsTicker();


});
        

