
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

    // database.ref().on("value", function(snapshot) {
    // $("#testing").html("")
    // var masterSheet = snapshot.val();
    // console.log(masterSheet)
    // var data = masterSheet["masterSheet"][1]
    // $("#testing").append(data)

    // })

    database.ref().on("value", function(snapshot) {
        var headings = snapshot.val()["pageHeadings"];
        $("#nav-and-news").html(headings[3][1])

    })
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

        var newClassTile = $("<div class='class-tile " + sched[c][6] +"-color'>")
        var newClassTile_style = sched[c][2]
        var newClassTile_age = sched[c][3]
        var newClassTile_song = sched[c][4]
        var newClassTile_other = sched[c][5]
        var styling = sched[c][6]

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
    // $("#classes").html("")
    var classes = snapshot.val()["classes"];
    $("#section1 tab1").html = classes[0][0]

    // for (i in classes) {

    //     var newTextBlock = $("<div class='row'>")
    //     var newTextBlock_heading = classes[b][0]
    //     var newTextBlock_body1 = classes[b][1]
    //     var newTextBlock_body2 = classes[b][2]
    //     var newTextBlock_body3 = classes[b][3]
    //     var newTextBlock_image1 = classes[b][4]
    //     var newTextBlock_image2 = classes[b][5]
    //     var styling = classes[b][6]



    //     newTextBlock.append("<div class = 'col-md-2 classes-subheading "+ styling +"-color'>" + newTextBlock_heading + "</div>")
    //     var text_div = $("<div class = 'col-md-5 classes-block " + styling + "-background'>")
    //     if (newTextBlock_body1){
    //         text_div.append(newTextBlock_body1 + "<br><br>")
    //     }
    //     if (newTextBlock_body2){
    //         text_div.append(newTextBlock_body2 + "<br><br>")
    //     }
    //     if (newTextBlock_body3){
    //         text_div.append(newTextBlock_body3 + "<br><br>")
    //     }

    //     newTextBlock.append(text_div)
      
    //     var images_div = $("<div class='col-md-4'>")
    //     if (newTextBlock_image1){ 
    //         images_div.append("<img class='small-image' src='" + newTextBlock_image1 + "'></div>")
    //     }
 
    //     if (newTextBlock_image2){ 
    //         images_div.append("<img class='small-image' src='" + newTextBlock_image2 + "'></div>")
    //     }

    //     newTextBlock.append(images_div)

    //     console.log(newTextBlock)
    //     if (newTextBlock_heading){
    //         $("#classes").append(newTextBlock)

    //     }

    $(".classes-block:contains('ballet ')").addClass("ballet-background")


    
    });

    function openClass(className) {
    var i;
    var x = document.getElementsByClassName("class-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    document.getElementById(className).style.display = "block"; 


    }
    $(".tab-button").click(function() {
        var label = $(this).context.textContent
        console.log(label)
        openClass(label);
    });

    // $('#section1 #tab2').click(function (e) {
    //   e.preventDefault()
    //   $(this).tab('show')
    // })

    database.ref().on("value", function(snapshot) {
    $(".rp-announcements").html("")
    $("#reg-announce-heading").html("Registration &amp; Payment Announcements")
    var announce = snapshot.val()["regAnnounce"];
    for (var a in announce) {
        var newAnnounce = $('<div class = "rp-announcement">')
        var newAnnounce_headline = announce[a][0]
        var newAnnounce_body = announce[a][1]
        var newAnnounce_date = announce[a][2]
        
        newAnnounce.append("<h5 class = 'rp-announcement-headline'> " + newAnnounce_headline +  " </h5>")
        newAnnounce.append("<p> " + newAnnounce_body +  " </p>")
        newAnnounce.append('<p class="tiny-text date">' + newAnnounce_date +  '</p>')

        console.log(newAnnounce)
        if (newAnnounce_headline){
            $(".rp-announcements").prepend(newAnnounce)

        }

    }
    });

    database.ref().on("value", function(snapshot) {
    $("#news").html("")
    
    var newsItem = snapshot.val()["news"];
    for (var n in newsItem) {
        var newNewsItem = $('<div class="news-box">')
        var newNewsItem_headline = newsItem[n][0]
        var newNewsItem_body = newsItem[n][1]
        var newNewsItem_body2 = newsItem[n][2]
        var newNewsItem_link = newsItem[n][3]
        var newNewsItem_linktext = newsItem[n][4]
        var newNewsItem_image = newsItem[n][5]
        var newNewsItem_date = newsItem[n][6]
        
        newNewsItem.append("<h5 > " + newNewsItem_headline +  " </h5>")
        newNewsItem.append("<p> " + newNewsItem_body +  " </p>")
        newNewsItem.append("<p> " + newNewsItem_body2 +  " </p>")
        newNewsItem.append("<a href = " + newNewsItem_link +  ">" + newNewsItem_linktext+ "</p>")
        // Need to append image! 
        newNewsItem.append('<p class="tiny-text date">' + newNewsItem_date +  '</p>')

        console.log(newNewsItem)
        if (newNewsItem_headline){
            $("#news").prepend(newNewsItem)
            $("#news").prepend("<br>")

        }

    }
    });

    database.ref().on("value", function(snapshot) {
    $("#photos").html("")
    var photos = snapshot.val()["photos"];
    for (var p in photos) {
        var newPhoto = $("<div class='col-sm-5 col-md-3 thumbnail gallery-thumbnail'>")
        var newPhoto_link = photos[p][0]
        var newPhoto_caption = photos[p][1]
    
        newPhoto.append("<img class='gallery-image' src='" + newPhoto_link + "'>")
        
        if (newPhoto_link){
            $("#photos").prepend(newPhoto)

        }

    }
    });

    database.ref().on("value", function(snapshot) {
    $("#dsp-info").html("")
    var content = snapshot.val()["reg"];
    for (var row in content) {
        var newInfo = $("<div class='dsp-info-box'>")
        var newInfo_heading = content[row][0]
        console.log(newInfo_heading)
        var newInfo_body1 = content[row][1]
        var newInfo_body2 = content[row][2]
        var newInfo_body3 = content[row][3]
    
        newInfo.append("<h4> " + newInfo_heading + " </h4>")
        if (newInfo_body1){
            newInfo.append("<p> " + newInfo_body1 + " </p>")
        }
        if (newInfo_body2){
            newInfo.append("<p> " + newInfo_body2 + " </p>")
        }
        if (newInfo_body3){
            newInfo.append("<p> " + newInfo_body3 + " </p>")
        }

        if (newInfo_heading){
            $("#dsp-info").append(newInfo)

        }

    }
    });

    database.ref().on("value", function(snapshot) {
    // $("#contact").html("")
    var contact = snapshot.val()["contact"];
   
    var newContactInfo_headline = contact[0][0]
    var newContactInfo_text = contact[0][1]
    var newContactInfo_phone = contact[0][2]
    var newContactInfo_email = contact[0][3]
    var newContactInfo_facebook = contact[0][4]
    var newContactInfo_studiost = contact[0][5]
    var newContactInfo_studiotown = contact[0][6]
    
    $(".contact-headline").text(newContactInfo_headline)
    $(".contact-text").text(newContactInfo_text)
    $(".phone").text(newContactInfo_phone)
    $(".email").text(newContactInfo_email)
    $(".facebook").text(newContactInfo_facebook)
    $(".studiost").text(newContactInfo_studiost)
    $(".studiotown").text(newContactInfo_studiotown)


    });



    // <div class = "rp-announcement">
    //                   <h5 class = "rp-announcement-headline">Announcement 1 headline </h5>
    //                   <p> This section will contain details about the announcement named above. This section will contain details about the announcement named above. This section will contain details about the announcement named above.</p>
    //                   <p class="tiny-text date">01/01/01</p>
    //               </div>


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
        //       <h5>Thumbnail label</h3>
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