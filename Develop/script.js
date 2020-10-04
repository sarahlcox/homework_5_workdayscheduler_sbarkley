$(document).ready(function(){
    $(window).on('unload', function(){
        saveSettings();
        loadSettings();
    });
  //states current date and puts in header
    $("#currentDay").text(moment().format("LLLL"));

    // //set items in local storage. resource:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
        var inputdata = Object.keys(localStorage);
        for (let i = 0; i < inputdata.length; i++) {
            var userinput = localStorage.getItem(inputdata[i]);
            var savetostorage = $("#" + inputdata[i]).find("textarea")
            savetostorage.val(userinput);
        }
        //stop save button from submitting form to save data to text input area
        $(".saveBtn").on("click", function (e) {
            e.preventDefault();
            // console.log(this);
            var userinput = $(this).siblings(".taskdata").val();
            var savetostorage = $(this).parent().attr("id");
    
            localStorage.setItem(savetostorage, userinput);
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

