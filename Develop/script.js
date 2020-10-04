$(document).ready(function(){
    $(window).on('unload', function(){
        saveSettings();
        loadSettings();
    });
  //states current date and puts in header
$("#currentDay").text(moment().format("LLLL"));

    // //set items in local storage.


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
});//empty row needs to be gray if time past, green if free, red if busy (toggle fx?)
    //Color coding schedule dependant upon hour

