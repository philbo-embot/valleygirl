// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks



/////////////////////////////////////////////////////
// JAVASCRIPT FOR QUIZ
/////////////////////////////////////////////////////

var score = 0;
var display = null;

function calcscore(){

    $(".calc:checked").each(function(){
        score+=parseInt($(this).val());
    });  // close calc check funcion
 } // close calcScore

	function outcome(){
		 calcscore()

		 // display = score;
		 // $("input[name=outcome]").val(display);
	   if (score >= 20) {
	    	display = "You're totally rad"
	    } else if (score > 10){
	    	display = "you should spend more time at the mall, but i'll still hang with you"
	    } else {
	    	display = "you're so skanky"
	    } // closeelse if
	 $("input[name=sum]").val(score)

   $("#outcome").val(display);
	}; //close calcOutcome









/////////////////////////////////////////////////////
// JAVASCRIPT FOR MAP
/////////////////////////////////////////////////////

  var stores = [
    ['Nasty Gal', 34.017339, -118.366452],
    ['Fred Segal', 34.083729, -118.366409],
    ['Intermix', 34.075957, -118.383448],
    ['Kitson', 34.078322, -118.384752],
    ['Barneys', 34.070506, -118.402262],
    ['Sherman Oaks Galleria', 34.155500, -118.467376]
  ];



var map;
var marker;
var info;

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 34.071489, lng: -118.400564}
  });

// function initialize() {
//   var mapOptions = {
//           center: new google.maps.LatLng(34.071489, -118.400564),
//           zoom: 8,
//           mapTypeId: google.maps.MapTypeId.NORMAL,
//           panControl: true,
//           scaleControl: false,
//           streetViewControl: true,
//           overviewMapControl: true
//         };
//         // initializing map
//         map = new google.maps.Map(document.getElementById("#map"),mapOptions);


// }


//COMMENTING OUT PINK MAP
  // var styles = [
  //   {
  //     stylers: [
  //       // { hue: "#00ffe6" },
  //       { hue: "#ee1289" },
  //       { saturation: 30 }
  //     ]
  //   },{
  //     featureType: "road",
  //     elementType: "geometry",
  //     stylers: [
  //       { lightness: 500 },
  //       { visibility: "simplified" }
  //     ]
  //   },{
  //     featureType: "road",
  //     elementType: "labels",
  //     stylers: [
  //       { visibility: "off" }
  //     ]
  //   }
  // ];

  // map.setOptions({styles: styles});

  setMarkers(map);

}

///////////////////////////////////////////////////////////////////////////////////////////
// THESE 2 GROUPS WORK FOR THE GOOGLE DOCS YELLOW STARS

//   var goldStar = {
//     path: 'M 125,5 155,90 245,90 175,145 200,230 125,180 50,230 75,145 5,90 95,90 z',
//     fillColor: 'yellow',
//     fillOpacity: 0.8,
//     scale: 1,
//     strokeColor: 'gold',
//     strokeWeight: 14
//   };


//  function setMarkers(map) {

//   for (var i = 0; i < stores.length; i++) {
//     var store = stores[i];
//     var marker = new google.maps.Marker({
//       position: {lat: store[1], lng: store[2]},
//       icon: goldStar,
//     	 map: map,
//       title: store[0]
//     }); // close marker
//   } // close for loop
// } //close set markers






/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
// THIS WORKS FOR THE DEFAULT PINS

// function setMarkers(map) {

//   for (var i = 0; i < stores.length; i++) {
//     var store = stores[i];
//     var marker = new google.maps.Marker({
//       position: {lat: store[1], lng: store[2]},
//     	 map: map,
//       title: store[0],
//     }); // close marker
//   } // close for loop
// } //close set markers

//////////////////////////////////////////////////////////////////////////////////////////


// WORKING CODE FOR THE SHOPPING BAG ICON


var icon = 
	'../images/shopping_bag.png';



function setMarkers(map) {

  for (var i = 0; i < stores.length; i++) {
    var store = stores[i];
    marker = new google.maps.Marker({
      position: {lat: store[1], lng: store[2]},
      icon: icon,
    	map: map,
      title: store[0]
    }); // close marker
  } // close for loop
} //close set markers




//JOSH'S ADD MARKER FUNCTION

// var addMarkers = function(map) {

// 	//ajax call to get location data
// 	$.ajax('/locations/json').
// 		done(function(result) {
// 			// add location markers
// 			for (var i=0; i < result.length; i++) {
// 				marker = new google.maps.Marker ({
// 				    map: map,
// 				    icon: '../img/money_bag_sm.png',
// 				    position: { lat: result[i].lat, lng: result[i].lng },
// 				    title: result[i].name
// 				});
// 		  };
// 		});
// } // end addMarkers

function createInfoWindow(text){
  var infowindow = new google.maps.InfoWindow({
    content: text
  });
  return infowindow;
}


function initialize() {
// add infowindow when clicking on the simple marker marker
info = createInfoWindow("Congratulations!");
google.maps.event.addListener(marker, 'click', function() {
  info.open(map,marker);
});

}




