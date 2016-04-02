var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 34.071489, lng: -118.400564}
  });
}






























// var map;


// function initMap() {

//   map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 11,
//     center: {lat: 34.071489, lng: -118.400564}
//   });


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

// }


//   var stores = [
//     ['Nasty Gal', 34.017339, -118.366452],
//     ['Fred Segal', 34.083729, -118.366409],
//     ['Intermix', 34.075957, -118.383448],
//     ['Kitson', 34.078322, -118.384752],
//     ['Barneys', 34.070506, -118.402262],
//     ['Sherman Oaks Galleria', 34.155500, -118.467376]
//   ];



