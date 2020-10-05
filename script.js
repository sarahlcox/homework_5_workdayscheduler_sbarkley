$(document).ready(function(){
    var timeArr=[7,8,9,10,11,12,13,14,15,16,17];
    var currentTime=moment().format("HH"); //grab current time via military time
    console.log(currentTime)
    $(window).on('unload', function(){
        saveSettings();
        loadSettings();
    });
  //states current date and puts in header
    $("#currentDay").text(moment().format("LLLL"));

    // //set items in local storage. resource:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        var inputdata = Object.keys(localStorage);
        for (var i = 0; i < timeArr.length; i++) {
            // var userinput = localStorage.getItem(inputdata[i]);
            // var savetostorage = $("#" + inputdata[i]).find("textarea")
            // savetostorage.val(userinput);

            /*
            <div class="row time-block">
                <div class="col-md-1 hour">
                  5:00 PM
                </div>
                <textarea class="col-md-10 taskdata">
                </textarea>
                <button class="btn saveBtn col-md-1">
                  Save
                </button>
            </div>
             */
            //1. create code via html
            var d1=$("<div>");
            //<div></div>
            d1.attr("class","row time-block");
             //<div class="row time-block"></div>
            var d2=$("<div>");
            d2.attr("class", "col-md-1 hour");
            //AM : less than 12: timeArr[i]+AM 
            if(timeArr[i]<12){
                d2.text(timeArr[i]+" AM");
            }            //PM: greater than 12 : timeArr[i]-12=x PM:
            //if 12 : 12PM
            var textarea=$("<textarea>");
            var btn=$("<button>");
            btn.attr("class","btn saveBtn col-md-1 ");
            btn.attr("id",+timeArr[i]);
            // currentHour=8 timeArr[i]=currentHour: present
            if(currentTime== timeArr[i]){
                textarea.attr("class","col-md-10 taskdata present");
            }
            //future: currentHour> timeArr[i]

            if(currentTime>timeArr[i]){
                textarea.attr("class","col-md-10 taskdata future")

            }
            //past: current<timeArr[i]
            if (currentTime<timeArr[i]){
                textarea.attr("class","col-md-10 taskdata past")

            }
            btn.text("Save")
            //2.create variables
            //3.syle it
            //4.append to each other (parent and child)
            d1.append(d2);
            /*
            <div class="row time-block">
                <div class="col-md-1 hour">
                  5:00 PM
                </div>

            </div>
             */
            d1.append(textarea);
            d1.append(btn);

            //5.stick it to html page (.container)
            $(".container").append(d1);
        }
        // stop save button from submitting form to save data to text input area
        $(".saveBtn").on("click", function (e) {
            e.preventDefault();
             console.log($(this).attr("id"));
            // console.log($(this).parent().children()[1]);
             var userinput=$(this).parent().children()[1].attr("value");
             console.log(userinput)
            //trigger
            //grab vals
            //set to ls
            // var userinput = $(this).siblings(".taskdata").val();
            // var savetostorage = $(this).parent().attr("id");
    
            // localStorage.setItem(savetostorage, userinput);
        });

         
    
    
    });
//create fx that will input times into first col of the table from moment needs to repeat for every row
    //Color coding schedule dependant upon hour
    //Need to find amount of hours
    //Create a loop to input time into time column/ind.row
    //if then statement for past/present, probably input an interval timer here to update appearance of calendar

//create text input fx that will save to local storage in middle col  needs to repeat for every row
    //Rendering stored inputs after page refresh
 //Assign saveBtn click listener for user input and time stamp??
    // alert('Button clicked!');

    // //set items in local storage.
    // localStorage.setItem(time, text);
//empty row needs to be gray if time past, green if free, red if busy (toggle fx?)
    //Color coding schedule dependant upon hour

