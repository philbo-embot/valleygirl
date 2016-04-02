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


// function calcscore(){
//     var score = 0;
//     $(".calc:checked").each(function(){
//         score+=parseInt($(this).val(),10);
//     });
//     $("input[name=sum]").val(score)
// }
// $().ready(function(){
//     $(".calc").change(function(){
//         calcscore()
//     });

// });
var score = 0;
var display = null;

function calcscore(){


    $(".calc:checked").each(function(){
        score+=parseInt($(this).val());
    });  // close calc check funcion
    // $("input[name=sum]").val(score)
    // $("input[name=outcome]").val(display);

 } // close calcScore

	function outcome(){
		 calcscore()

		 // display = score;
		 // $("input[name=outcome]").val(display);
	   if (score >= 20) {
	    	display = "You're totally rad"
	    } else if (score => 10){
	    	display = "you should spend more time at the mall, but i'll still hang with you"
	    } else if (score < 10 ) {
	    	display = "you're so skanky"
	    } // closeelse if

	 $("input[name=sum]").val(score)
   $("#outcome").val(display);
	}; //close calcOutcome
// } // close calcScore

// 



  var stores = [
    ['Nasty Gal', 34.017339, -118.366452],
    ['Fred Segal', 34.083729, -118.366409],
    ['Intermix', 34.075957, -118.383448],
    ['Kitson', 34.078322, -118.384752],
    ['Barneys', 34.070506, -118.402262],
    ['Sherman Oaks Galleria', 34.155500, -118.467376]
  ];

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


//  // This event listener calls addMarker() when the map is clicked.
//   google.maps.event.addListener(map, 'click', function(event) {
//     addMarker(event.latLng, map);
//   });  // close event listener

//   // map.event.addListener(map, 'click', function(event) {
//   //   addMarker(event.latLng, map);
//   // });


// // Adds a marker to the map.
// function addMarker(location, map) {
//   // Add the marker at the clicked location, and add the next-available label
//   // from the array of alphabetical characters.
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   }); //close marker


// }
//     google.maps.event.addDomListener(window, 'load', initialize);
//   // map.event.addDomListener(window, 'load', initialize);




















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

//   var marker = new google.maps.Marker({
//     position: stores,
//     map: map,
//   });




// $().ready(function(){
//     $(".calc").change(function(){
//         calcscore()
//     });

// });


// $('#submit').onclick(
// // $().ready(function(){
//     $(".calc").change(function(){
//         calcscore();
//         calcoutcome();
// 		});  //close change
// );  //close onclick



// $('#submit').onclick(
// 	function calcoutcome(){
// 	   if (score >= 20) {
// 	    	outcome = "You're totally rad"
// 	    } else if (score => 10){
// 	    	outcome = "you should spend more time at the mall,but i'll still hang with you"
// 	    } else if (score < 10 ) {
// 	    	outcome = "you're so skanky"
// 	    }
// 	}
// 	$("input[name=outcome]").val(outcome);

// )




