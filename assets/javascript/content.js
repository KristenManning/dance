
$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8J6gNDFLxiT-W3QgLpP83TQ6NJ5cWIeo",
    authDomain: "bsotd-website.firebaseapp.com",
    databaseURL: "https://bsotd-website.firebaseio.com",
    projectId: "bsotd-website",
    storageBucket: "",
    messagingSenderId: "16195132803"
  };
  firebase.initializeApp(config);

	var database = firebase.database();


	 //  $(document).on("click", ".btn-info", function() {

	 //  	window.location.replace($(this).data("href"));

		// });

	 //  $(document).on("click", "#LI", function() {

	 //  	window.location.replace("https://www.linkedin.com/in/kristen-manning-83b266104/");

		// });

	 //  $(document).on("click", "#GH", function() {

	 //  	window.location.replace("https://github.com/KristenManning");

		// });
});


// Firebase example: 

// $(document).ready(function() {
  

//   var config = {
//     apiKey: "AIzaSyDmb865vMlKLHHXklvpj9Qxt0MY-XCMTbc",
//     authDomain: "train-tracker-44c80.firebaseapp.com",
//     databaseURL: "https://train-tracker-44c80.firebaseio.com",
//     storageBucket: "train-tracker-44c80.appspot.com",
//     messagingSenderId: "14249277472"
//   };

//     firebase.initializeApp(config);

//     var database = firebase.database();

//   // When a new emotion is submitted, add it to the emotions array and run the display buttons function again to display it  
//   $(".btn-default").on("click", function() {
//     var now = moment().format('HH:mm');
//     var train = $("#u_train").val().trim();
//     var destination = $("#u_destination").val().trim();
//     var first_time = $("#u_first_time").val().trim();
//     var first_time_con = moment(first_time, "HH:mm").subtract(1, "years");
//     var frequency = $("#u_frequency").val().trim();

//     var diff_in_time = moment().diff(moment(first_time_con), "minutes");
//     var min_away = frequency - (diff_in_time % frequency);
//     var next_time = moment(now, "HH:mm").add(min_away, "minutes").format("HH:mm");
    
//     database.ref().push({
        
//       train: train,
//       destination: destination,
//       next_time: next_time,
//       min_away: min_away,
//       frequency: frequency,
//     })

//     return false
//   });

//   database.ref().on("value", function(snapshot) {
//     $("tbody").html("")
//     var outer_object = snapshot.val();
//     var keys_array = Object.keys(outer_object)
//     for (i in keys_array){
//       var nested_obj = outer_object[keys_array[i]]
//       $("tbody").append('<tr><td>'+nested_obj.train+'</td><td>'+nested_obj.destination+'</td><td>'+nested_obj.frequency+'</td><td>'+nested_obj.next_time+'</td><td>'+nested_obj.min_away+'</td></tr>');
    
//     }
//     })


  // });