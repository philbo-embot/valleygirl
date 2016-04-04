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

// window.onload = function(){

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

//window.onload = function(){



var marker = null;
var store = null;
var lat = null;
var lng = null;
var infowindow = null;
var content = null;
var icon = '../images/shopping_bag.png';
var stores = [
    ['Nasty Gal', 34.017339, -118.366452, '1254 3rd St Promenade Santa Monica, CA 90401'],
    ['Fred Segal', 34.083729, -118.366409],
    ['Intermix', 34.075957, -118.383448],
    ['Kitson', 34.078322, -118.384752],
    ['Sherman Oaks Galleria', 34.155500, -118.467376],
    ['Barneys', 34.070506, -118.402262]
];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 34.071489, lng: -118.400564}
    }); // close map

    setMarkers(map,stores)

  }


function setMarkers(map,store){
  for (i = 0; i < stores.length; i++)
  {  

    store = stores[i][0]
    lat = stores[i][1]
    lng = stores[i][2]
    address = stores[i][3]

    latlngset = new google.maps.LatLng(lat, lng);

    marker = new google.maps.Marker({  
      map: map, title: store , position: latlngset, icon: icon
        });
    map.setCenter(marker.getPosition())


    content = store;   

    infowindow = new google.maps.InfoWindow()

    google.maps.event.addListener(marker,'click', (function(marker,content,infowindow){ 
        return function() {
            infowindow.setContent(content);
            infowindow.open(map,marker);
        };
    })(marker,content,infowindow));  

    }; //close for loop

  }
  


// location.reload();  //this is to get the maps to autoload, but this makes maps markers disappear.


















// var stores = [
//     ['Nasty Gal', 34.017339, -118.366452],
//     ['Fred Segal', 34.083729, -118.366409],
//     ['Intermix', 34.075957, -118.383448],
//     ['Kitson', 34.078322, -118.384752],
//     ['Sherman Oaks Galleria', 34.155500, -118.467376],
//     ['Barneys', 34.070506, -118.402262]
// ];


// var map;
// var marker;
// var info;
// var content;
// var icon = '../images/shopping_bag.png';
// var infowindow;
// var store;


// function initMap() {

//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 11,
//         center: {lat: 34.071489, lng: -118.400564}
//     }); // close map


//     function setMarkers(map) {
//     //console.log(marker);  undefined
//         for (var i = 0; i < stores.length; i++) {
//             store = stores[i];
//             marker = new google.maps.Marker({
//                 position: {lat: store[1], lng: store[2]},
//                 map: map,
//                 icon: icon
//             }); // close marker
            
//             content = store[0]


//         } // close for loop

//     } //close set markers

//     setMarkers(map, stores);


//         google.maps.event.addListener(marker, 'click', function(){
//             console.log('hello');
//             infowindow.setContent(store[0]);
//             console.log(store[0])
//             infowindow.open(map,marker);
//         });

//         infowindow = new google.maps.InfoWindow({
//             content: store[0]

//         });

// }  // close initMap
//}


