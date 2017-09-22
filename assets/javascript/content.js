
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

        document.documentElement.style.setProperty('--newsColor', headings[5][1]);
        document.documentElement.style.setProperty('--navColor', headings[5][2]);
        document.documentElement.style.setProperty('--pageHeadingColor', headings[5][3]);
        document.documentElement.style.setProperty('--balletColor', headings[7][1]);
        document.documentElement.style.setProperty('--tapColor', headings[7][2]);
        document.documentElement.style.setProperty('--jazzColor', headings[7][3]);
        document.documentElement.style.setProperty('--comboColor', headings[7][4]);
        document.documentElement.style.setProperty('--pointeColor', headings[7][5]);
        document.documentElement.style.setProperty('--standardTextColor', headings[9][1]);
        document.documentElement.style.setProperty('--enlargedParagraphColor', headings[9][2]);
        document.documentElement.style.setProperty('--mottoColor', headings[9][3]);
        document.documentElement.style.setProperty('--classButtonColor', headings[9][4]);
        document.documentElement.style.setProperty('--policiesText', headings[9][5]);
        document.documentElement.style.setProperty('--policiesHeading', headings[9][6]);
        
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

    for (var i in instructors) {
      if (instructors[i][0] && instructors[i][0] != "FullName"){
        // new box 
        var newInstructor = $("<div class='col-md-4'>")

        var instructorImage =$("<div class='instructor-box'>")
        instructorImage.append("<img id='instr"+i+"' class='instructor-image' data-switch='assets/images/logo.jpg' data-hold='assets/images/" + instructors[i][1] + "' src='assets/images/" + instructors[i][1] + "'>")

        // name & role 
        var newInstructor_name = "<a data-target='#modal-"+i+"' data-toggle='modal' href='#modal-"+i+"'><h5> " + instructors[i][0] + " </h5></a>"
        var newInstructor_role = "<p>" + instructors[i][2] + "</p>"
        var instructorInfo = $("<div class='instructor-info'>")
        instructorInfo.append(newInstructor_name)
        instructorInfo.append(newInstructor_role)
        instructorImage.append(instructorInfo)

        
        // $("#instr"+i).on({'click': function(){
        //     alert("hi")
        //     $("#instr"+i).attr('src','assets/images/logo.jpg');
        //     }
        // });
   

        // create bio modal 
        var newInstructor_bio = ""
        for (var b = 3; b < 8; b++) {
            if (instructors[i][b]){
                newInstructor_bio = newInstructor_bio + "<p>" + instructors[i][b] + "</p>"
            }
        }
        var newInstructor_modal = '<div id="modal-'+i+'"class="modal fade" role="dialog"> <div class="modal-dialog"> <div class="modal-content"><div class="modal-header"> <button type="button" class="close" data-dismiss="modal">&times;</button> <h4 class="modal-title">'+instructors[i][0]+'</h4></div><div class="modal-body">' + newInstructor_bio +'</div></div></div> </div>'



        newInstructor.html(instructorImage)
        $("#modals").append(newInstructor_modal)
        $("#instructors").append(newInstructor)
        }
      }

    })

    $(document).on("mouseenter", ".instructor-image", function(e) {
        $(this).attr("src", $(this).data("switch"))
        $(this).data("switch", $(this).data("hold"))
        $(this).data("hold", $(this).attr("src"))
    });

    $(document).on("mouseleave", ".instructor-image", function(e) {
        $(this).attr("src", $(this).data("switch"))
        $(this).data("switch", $(this).data("hold"))
        $(this).data("hold", $(this).attr("src"))
    });


    database.ref().on("value", function(snapshot) {
    $("#schedule").html("")
    var sched = snapshot.val()["schedule"];

    var reset_tiles = function(){
        $(".class-tile").html("")
        $(".class-tile").removeClass( "default-background" )
        $("#displayed-style").text("")
    }

    var display_all_classes = function(sched){
        reset_tiles()

        for (var c in sched) {

        
        var day = sched[c][0]
        var time =sched[c][1]

        var tile_style = sched[c][2]
        var tile_age = sched[c][3]
        var tile_song = sched[c][4]
        var tile_other = sched[c][5]
        var styling = sched[c][6]

        var tile = $(time + " > " + day + " > .class-tile")
        tile.append("<h6><b>"+ tile_style + "</b></h6>")
        tile.append("<h6>"+ tile_age + "</h6>")
        tile.append("<p class='song tiny-text'>"+ tile_song + "</p>")
        tile.append("<p class='tiny-text'>"+ tile_other + "</p>")
        tile.addClass( styling + "-background" )

        }

    }
    

    var filter_by = function(dance_style) {
        reset_tiles()
        for (var c in sched) {
            var day = sched[c][0]
            var time =sched[c][1]
            if (sched[c][6] == dance_style){
                var tile_style = sched[c][2]
                var tile_age = sched[c][3]
                var tile_other = sched[c][5]
                var styling = sched[c][6]
                var tile = $(time + " > " + day + " > .class-tile")
                tile.html("")
                tile.append("<h4>"+ tile_age + "</h4>")
                tile.append("<p class='tiny-text'>"+ tile_other + "</p>")
                tile.addClass( styling + "-background" )
            }
            else{
                var tile = $(time + " > " + day + " > .class-tile")
                tile.addClass( "default-background" )
            }
            
        }
        $("#displayed-style").text(tile_style + " Offerings by Age/Grade")


    }

    var filter_by_combo = function(style1, style2) {
        reset_tiles()
        for (var c in sched) {
            var day = sched[c][0]
            var time =sched[c][1]
            var check_style = sched[c][2]
            if (sched[c][6] == "combo" && check_style.includes(style1) && check_style.includes(style2)){

                var tile_style = sched[c][2]
                var tile_age = sched[c][3]
                var tile_other = sched[c][5]
                var styling = sched[c][6]
                var tile = $(time + " > " + day + " > .class-tile")
                tile.html("")
                tile.append("<h4>"+ tile_age + "</h4>")
                tile.append("<p class='tiny-text'>"+ tile_other + "</p>")
                tile.addClass( styling + "-background" )
            

            }else{
                var tile = $(time + " > " + day + " > .class-tile")
                tile.addClass( "default-background" )
            }
            
        }
        $("#displayed-style").text(tile_style + " Offerings by Age/Grade")


    }
    
    $('#ballet-filter').on("click", function() {
          filter_by("ballet")
    });

    $('#tap-filter').on("click", function() {
          filter_by("tap")
    });

    $('#jazz-filter').on("click", function() {
          filter_by("jazz")
    });

    $('#ballet-jazz-combo-filter').on("click", function() {
          filter_by_combo("Ballet", "Jazz")
    });

    $('#pointe-filter').on("click", function() {
          filter_by("pointe")
    });

    $('#tap-jazz-combo-filter').on("click", function() {
          filter_by_combo("Tap", "Jazz")
    });

    $('#all-filter').on("click", function() {
          display_all_classes(sched)
    });


    display_all_classes(sched)
    
    });

    database.ref().on("value", function(snapshot) {
        var about_us = snapshot.val()["about"];


        var etiquette = ["dancer", "studio", "waiting-room", "changing-room", "recital"]
      
        function display_buttons(){
          $(".buttons-div").html("")
            for (e in etiquette){
            $(".buttons-div").append('<button class="btn btn-etiquette" data-etiquetteType="'+ parseInt(parseInt(e) + 3)+'">'+about_us[parseInt(e)+3][0]+'</button><br>')
          }
        }

        display_buttons()

        $('.buttons-div').on("click", ".btn-etiquette", function() {
          $(".btn-etiquette").css("background-color", "var(--pageHeadingColor)" )
          $(this).css("background-color", "var(--classButtonColor)" )

          var etiquetteType = $(this).data().etiquettetype;
          console.log($(this).val())
          $("#about-subheading-etiquette").html($(this).text() + " Etiquette")
          for (var i = 1; i < 7; i++) {
            $(".tabbed-content-" + i).html(about_us[etiquetteType][i])
          }
          if (about_us[etiquetteType][7]){
            $(".tabbed-content-7").html("<img class='small-image' src="+about_us[etiquetteType][7]+">")
          }else{
            $(".tabbed-content-" + i).html("")
          }
        });

        $("#about-subheading-etiquette").html(about_us[3][0] + " Etiquette")
        for (var i = 1; i < 7; i++) {
            $(".tabbed-content-" + i).html(about_us[3][i])
            if (about_us[3][7]){
                $(".tabbed-content-" + i).html("<img scr="+about_us[3][7]+">")
              }
        }

    // section 1 content 
    $("#about-overview").html("<h5>"+about_us[0][1]+"</h5>")


    // section 2 content 
    $("#about-section-2").html("")
        for (var i = 1; i < 5; i++) {
            var new_content = about_us[1][i]
            if (new_content){
                $("#about-section-2").append("<h5>" + new_content + "</h5>")
        }

    }
    
        
    });

    database.ref().on("value", function(snapshot) {
        var classes = snapshot.val()["classes"];

        var display_class_choices = function(){
            $(".dance-classes").html('      <div class="col-md-6"><div id="classes-subheading-ballet"><button id="1" class="class-btn"></button> </div></div><div class="col-md-6"><div id="classes-subheading-tap"><button id="2"  class="class-btn"></button></div></div><div class="col-md-6"><div id="classes-subheading-jazz"><button id="3" class="class-btn"></button></div></div><div class="col-md-6"><div id="classes-subheading-pointe"><button id="4" class="class-btn"></button></div></div>')

            for (var i = 1; i < 5; i++) {
            $("#"+i).text(classes[i][0])
            }


        }

        display_class_choices()

        $('.dance-classes').on("click", ".class-btn", function() {
            $("#class-type").html($(this).text())
            $(".dance-classes").html("<div class='col-md-12'>" + classes[parseInt($(this).context.id)][1] + "</div>")
        });

        $('#exit-icon').on("click", function() {
            display_class_choices()
        });
        // for (var i = 1; i < 6; i++) {
        //     $("#"+i).text(classes[i][0])
        // }
        // $('.dance-class-buttons').on("click", ".class-btn", function() {
        //     $("#class-type").text($(this).text())
        //     $(".class-btn").css("color", "var(--classButtonColor")
        //     $(this).css("color", "var(--mottoColor")
        //     $("#dance-class-content").html(classes[parseInt($(this).context.id)][1])
              
        // });

        // $("#dance-class-content").html(classes[1][1])

        // $("#classes-overview").html("<ul>")

        // $("#class-type").text(classes[1][0])
        // for (var i = 7; i < 17; i++){
        //     if (classes[i][1]){
        //         $("#classes-overview").append("<li> "+ classes[i][1] + "</li><br>")
        //     }
        // }
    
    });


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
        var newPhoto = $("<div class='col-sm-2 col-md-1 gallery-image-box'>")
        var newPhoto_link = photos[p][0]
    
        newPhoto.append("<img class='gallery-image' src='" + newPhoto_link + "'>")
        
        if (newPhoto_link){
            $("#photos").prepend(newPhoto)
        }

    }
    });

    $(document).on("mouseenter", ".gallery-image", function(e) {
        $("#feat-photo").attr("src", $(this).attr("src"))

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