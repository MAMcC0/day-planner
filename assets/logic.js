var userInput = $('.user-input');
var currentHour = (moment().hour());


// gets the current day
function currentDayUpdate() {
    var currentDay = document.querySelector("#currentDay");
    var time = moment().format("dddd MMMM Do YYYY");
    currentDay.innerHTML = time;
}
///compares time based on id of the rows
function compareTime() {
    for (i = 9; i < 18; i++) {
        var hourRow = $(`#military-time-${i}`);

        if (i < currentHour) {
            hourRow.addClass("past")
        } else if (i === currentHour) {
            hourRow.addClass("present");
        } else if (i > currentHour) {
            hourRow.addClass("future");
        }

    }
}
compareTime();
currentDayUpdate();
setInterval(currentDayUpdate, 1000);
setInterval(compareTime, 15000);

// display message that it saved, then saves to local storage and then displays it
function savedInput(event) {
    setInterval(displaySaved,10000);
    
    function displaySaved(){
     if($("#save-msg").hasClass("hide")){
        $("#save-msg").removeClass("hide").addClass("show");
     }
    }
    function fadeOut(){
        if($("#save-msg").hasClass("show")){
            $("#save-msg").removeClass("show").addClass("hide");
        }
    }
    setTimeout(fadeOut, 5000);


    var target = event.target;
    var targetInput = $(target).siblings('.user-input').val();
    var trimmedInput = $.trim(targetInput);
    var hours = $(target).parent('.time-block').attr('id');
    console.log(hours);
        localStorage.setItem(hours, trimmedInput);
    }
    
    $('#military-time-9 .user-input').val(localStorage.getItem("military-time-9"));
    $('#military-time-10 .user-input').val(localStorage.getItem("military-time-10"));
    $('#military-time-11 .user-input').val(localStorage.getItem("military-time-11"));
    $('#military-time-12 .user-input').val(localStorage.getItem("military-time-12"));
    $('#military-time-13 .user-input').val(localStorage.getItem("military-time-13"));
    $('#military-time-14 .user-input').val(localStorage.getItem("military-time-14"));
    $('#military-time-15 .user-input').val(localStorage.getItem("military-time-15"));
    $('#military-time-16 .user-input').val(localStorage.getItem("military-time-16"));
    $('#military-time-17 .user-input').val(localStorage.getItem("military-time-17"));


    $('.saveBtn').on('click', savedInput);

