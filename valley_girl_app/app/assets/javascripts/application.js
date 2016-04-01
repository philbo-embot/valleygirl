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




