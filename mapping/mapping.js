$(document).ready(function() {


      var map;
      var infowindow;

      function initMap() {
        var dallas = {lat: 32.7767, lng:-96.7970};

        map = new google.maps.Map(document.getElementById('map'), {
          center: dallas,
          zoom: 13
        });

        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch({
          location: dallas,
          radius: 15000,
          type: ['bitcoin atm']
        }, callback);
      }

      function callback(results, status) {

      	console.log(results);

        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
          }
        }
      }

      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }


      initMap();

  })




// 	var map;
// var service;
// var infowindow;

// function initialize() {

//   var dallas = new google.maps.LatLng(32.7767,-96.7970);

//   map = new google.maps.Map(document.getElementById('map'), {
//       center: dallas,
//       zoom: 11
//     });

//   var request = {
//     location: dallas,
//     radius: '1000',
//     type: ['restaurant']
//   };

//   service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(request, callback);
// }

// function callback(results, status) {

// 	console.log(results);
//   if (status == google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       var place = results[i];
//       createMarker(results[i]);
//     }
//   }
// };



// map = new google.maps.Map(document.getElementById('map'), {

//   center: {lat: 32.7767, lng: -96.7970},
//   zoom: 11
// })


// console.log(map);
