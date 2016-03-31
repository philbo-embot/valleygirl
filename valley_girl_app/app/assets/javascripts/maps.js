var map;


function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 34.071489, lng: -118.400564}
  });


  var styles = [
    {
      stylers: [
        // { hue: "#00ffe6" },
        { hue: "#ee1289" },
        { saturation: 30 }
      ]
    },{
      featureType: "road",
      elementType: "geometry",
      stylers: [
        { lightness: 500 },
        { visibility: "simplified" }
      ]
    },{
      featureType: "road",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  map.setOptions({styles: styles});

  setMarkers(map);

}


  var stores = [
    ['Nasty Gal', 34.017339, -118.366452],
    ['Fred Segal', 34.083729, -118.366409],
    ['Intermix', 34.075957, -118.383448],
    ['Kitson', 34.078322, -118.384752],
    ['Barneys', 34.070506, -118.402262],
    ['Sherman Oaks Galleria', 34.155500, -118.467376]
  ];


function setMarkers(map) {

  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    var marker = new google.maps.Marker({
      position: {lat: store[1], lng: store[2]},
      map: map,
      title: store[0],
    }); // close marker
  } // close for loop
} //close set markers


 // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
    addMarker(event.latLng, map);
  });  // close event listener

  // map.event.addListener(map, 'click', function(event) {
  //   addMarker(event.latLng, map);
  // });


// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    map: map
  }); //close marker


}
    google.maps.event.addDomListener(window, 'load', initialize);
  // map.event.addDomListener(window, 'load', initialize);









// var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var labelIndex = 0;

// function initialize() {

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 11,
//     center: {lat: 34.071489, lng: -118.400564}
  
//   }); //close map

//   var styles = [
//     {
//       stylers: [
//         // { hue: "#00ffe6" },
//         { hue: "#ee1289" },
//         { saturation: 30 }
//       ]
//     },{
//       featureType: "road",
//       elementType: "geometry",
//       stylers: [
//         { lightness: 500 },
//         { visibility: "simplified" }
//       ]
//     },{
//       featureType: "road",
//       elementType: "labels",
//       stylers: [
//         { visibility: "off" }
//       ]
//     }
//   ];

//   map.setOptions({styles: styles});

//   setMarkers(map);

// } // close initialize



//   var stores = [
//     ['Nasty Gal', 34.017339, -118.366452],
//     ['Fred Segal', 34.083729, -118.366409],
//     ['Intermix', 34.075957, -118.383448],
//     ['Kitson', 34.078322, -118.384752],
//     ['Barneys', 34.070506, -118.402262],
//     ['Sherman Oaks Galleria', 34.155500, -118.467376]
//   ];


// function setMarkers(map) {

//   for (var i = 0; i < stores.length; i++) {
//     var store = stores[i];
//     var marker = new google.maps.Marker({
//       position: {lat: store[1], lng: store[2]},
//       map: map,
//       title: store[0],
//     });
//   }
// // }

// // Adds a marker to the map.
// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     label: labels[labelIndex++ % labels.length],
//     map: map
//   });




//   // This event listener calls addMarker() when the map is clicked.
//   google.maps.event.addListener(map, 'click', function(event) {
//     addMarker(event.latLng, map);
//   });


// }



// google.maps.event.addDomListener(window, 'load', initialize);


// }); //close map