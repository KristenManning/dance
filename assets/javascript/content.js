
$(document).ready(function() {
  console.log("hi")
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

    // database.ref().on("value", function(snapshot) {
    // $("#testing").html("")
    // var masterSheet = snapshot.val();
    // console.log(masterSheet)
    // var data = masterSheet["masterSheet"][1]
    // $("#testing").append(data)

    // })

    database.ref().on("value", function(snapshot) {
        var headings = snapshot.val()["pageHeadings"];
        for (h in headings[2]){
          console.log(headings[2][h])
          $(headings[2][h]).html("<h1>" + headings[1][h] + "</h1>")

        }


    })

    database.ref().on("value", function(snapshot) {
    $("#instructors").html("")
    var instructors = snapshot.val()["instructors"];
    console.log("instructors = ")
    console.log(instructors)

    for (var i in instructors) {
      if (instructors[i][0] && instructors[i][0] != "FullName"){
        console.log(i)
        console.log()
        var newInstructor = $("<div class='col-sm-5 col-md-3 thumbnail'>")
        var newInstructor_name = instructors[i][0]
        var newInstructor_image = instructors[i][1]
        console.log(newInstructor_image)
        var newInstructor_role = instructors[i][2]
        var newInstructor_bios = [instructors[i][3], instructors[i][4], instructors[i][5], instructors[i][6], instructors[i][7]]
        newInstructor.html("<img src='assets/images/" + newInstructor_image + "'><h3> " + newInstructor_name + " </h3> <h5>" + newInstructor_role + "</h5>")
        for (b in newInstructor_bios){
          if (newInstructor_bios[b]){
            newInstructor.append("<p>" + newInstructor_bios[b] + "</p>")
          }
        }
        console.log(newInstructor)
        $("#instructors").append(newInstructor)
        }
      }

    })

    database.ref().on("value", function(snapshot) {
    $("#schedule").html("")
    var sched = snapshot.val()["schedule"];
    for (var c in sched) {

        var newClassTile = $("<div class='class-tile'>")
        var newClassTile_style = sched[c][2]
        var newClassTile_age = sched[c][3]
        var newClassTile_song = sched[c][4]
        var newClassTile_other = sched[c][5]

        newClassTile.append("<h4>"+ newClassTile_style + "</h4>")
        newClassTile.append("<h6>"+ newClassTile_age + "</h6>")
        newClassTile.append("<h6 class='song'>"+ newClassTile_song + "</h6>")
        newClassTile.append("<p class='tiny-text'>"+ newClassTile_other + "</p>")

        console.log(newClassTile)
        if (newClassTile_style){
            $(sched[c][1] + ">" + sched[c][0]).append(newClassTile)
        }

    }
    });

    database.ref().on("value", function(snapshot) {
    $("#about").html("")
    var about_us = snapshot.val()["about"];
    for (var b in about_us) {

        var newTextBlock = $("<div class='row'>")
        var newTextBlock_heading = about_us[b][0]
        var newTextBlock_body1 = about_us[b][1]
        var newTextBlock_body2 = about_us[b][2]
        var newTextBlock_body3 = about_us[b][3]
        var newTextBlock_body4 = about_us[b][4]
        var newTextBlock_image1 = about_us[b][5]
        var newTextBlock_image2 = about_us[b][6]
        var newTextBlock_image3 = about_us[b][7]
        var newTextBlock_image4 = about_us[b][8]


        newTextBlock.append("<div class = 'col-md-12 about-subheading'>" + newTextBlock_heading + "</div>")
        var text_div = $("<div class = 'col-md-7 about-block'>")
        if (newTextBlock_body1){
            text_div.append(newTextBlock_body1 + "<br><br>")
        }
        if (newTextBlock_body2){
            text_div.append(newTextBlock_body2 + "<br><br>")
        }
        if (newTextBlock_body3){
            text_div.append(newTextBlock_body3 + "<br><br>")
        }
        if (newTextBlock_body4){
            text_div.append(newTextBlock_body4)
        }

        newTextBlock.append(text_div)
      
        var images_div = $("<div class='col-md-4'>")
        if (newTextBlock_image1){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image1 + "'></div>")
        }
 
        if (newTextBlock_image2){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image2 + "'></div>")
        }

        if (newTextBlock_image3){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image3 + "'></div>")
        }

        if (newTextBlock_image4){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image4 + "'></div>")
        }
        
        newTextBlock.append(images_div)

        console.log(newTextBlock)
        if (newTextBlock_heading){
            $("#about").append(newTextBlock)

        }

    }
    });

    database.ref().on("value", function(snapshot) {
    $("#classes").html("")
    var about_us = snapshot.val()["classes"];
    for (var b in about_us) {

        var newTextBlock = $("<div class='row'>")
        var newTextBlock_heading = about_us[b][0]
        var newTextBlock_body1 = about_us[b][1]
        var newTextBlock_body2 = about_us[b][2]
        var newTextBlock_body3 = about_us[b][3]
        var newTextBlock_image1 = about_us[b][4]
        var newTextBlock_image2 = about_us[b][5]


        newTextBlock.append("<div class = 'col-md-2 classes-subheading'>" + newTextBlock_heading + "</div>")
        var text_div = $("<div class = 'col-md-5 classes-block'>")
        if (newTextBlock_body1){
            text_div.append(newTextBlock_body1 + "<br><br>")
        }
        if (newTextBlock_body2){
            text_div.append(newTextBlock_body2 + "<br><br>")
        }
        if (newTextBlock_body3){
            text_div.append(newTextBlock_body3 + "<br><br>")
        }

        newTextBlock.append(text_div)
      
        var images_div = $("<div class='col-md-4'>")
        if (newTextBlock_image1){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image1 + "'></div>")
        }
 
        if (newTextBlock_image2){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image2 + "'></div>")
        }

        newTextBlock.append(images_div)

        console.log(newTextBlock)
        if (newTextBlock_heading){
            $("#classes").append(newTextBlock)

        }

    }
    });



    database.ref().on("value", function(snapshot) {
    $("#classes").html("")
    var about_us = snapshot.val()["classes"];
    for (var b in about_us) {

        var newTextBlock = $("<div class='row'>")
        var newTextBlock_heading = about_us[b][0]
        var newTextBlock_body1 = about_us[b][1]
        var newTextBlock_body2 = about_us[b][2]
        var newTextBlock_body3 = about_us[b][3]
        var newTextBlock_image1 = about_us[b][4]
        var newTextBlock_image2 = about_us[b][5]


        newTextBlock.append("<div class = 'col-md-2 classes-subheading'>" + newTextBlock_heading + "</div>")
        var text_div = $("<div class = 'col-md-5 classes-block'>")
        if (newTextBlock_body1){
            text_div.append(newTextBlock_body1 + "<br><br>")
        }
        if (newTextBlock_body2){
            text_div.append(newTextBlock_body2 + "<br><br>")
        }
        if (newTextBlock_body3){
            text_div.append(newTextBlock_body3 + "<br><br>")
        }

        newTextBlock.append(text_div)
      
        var images_div = $("<div class='col-md-4'>")
        if (newTextBlock_image1){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image1 + "'></div>")
        }
 
        if (newTextBlock_image2){ 
            images_div.append("<img class='small-image' src='" + newTextBlock_image2 + "'></div>")
        }

        newTextBlock.append(images_div)

        console.log(newTextBlock)
        if (newTextBlock_heading){
            $("#classes").append(newTextBlock)

        }

    }
    });


    <div class = "rp-announcement">
                      <h5 class = "rp-announcement-headline">Announcement 1 headline </h5>
                      <p> This section will contain details about the announcement named above. This section will contain details about the announcement named above. This section will contain details about the announcement named above.</p>
                      <p class="tiny-text date">01/01/01</p>
                  </div>


    // var instructors = {0: {0: "Caley", 1: "caley.jpg", 2: "Manager", 3: "Caley Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. "}, 
    //           1: {0: "Barbara", 1: "mrsg.jpg", 2: "Owner", 3: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ",  4: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ",  5: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. "}, 
    //           2: {0: "Caley", 1: "caley.jpg", 2: "Manager", 3: "Caley Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. "}, 
    //           3: {0: "Caley", 1: "caley.jpg", 2: "Manager", 3: "Caley Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here."}, 
    //           4: {0: "Caley", 1: "caley.jpg", 2: "Manager", 3: "Caley Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ", 4: "Lorem ipsum text here is what's here.  Lorem ipsum text here is what's here. "}, 
    //           5: {0: "Barbara", 1: "mrsg.jpg", 2: "Owner", 3: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ",  4: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ",  5: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. ", 6: "Barbara Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. Lorem ipsum text here is what's here. "}, 
    //         }



        //       <div class="thumbnail">
        //     <img src="..." alt="...">
        //     <div class="caption">
        //       <h3>Thumbnail label</h3>
        //       <p>...</p>
        //       <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
        //     </div>
        //   </div>
        // </div>

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