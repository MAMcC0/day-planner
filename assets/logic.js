

var userInput = $('.user-input'); 
var currentHour = moment().hour();
var nine = $('#military-time-9').val();
var ten = parseInt($("#10"));
var eleven = parseInt($("#11"));
var twelve = parseInt($("#12"));
var thirteen = parseInt($("#13"));
var fourteen = parseInt($("#14"));
var fifteen = parseInt($("#15"));
var sixteen = parseInt($("#16"));
var seventeen = parseInt($("#17"));
console.log(nine);

function currentDayUpdate() {
    var currentDay = document.querySelector("#currentDay");
    var time = moment().format("dddd MMMM Do YYYY");
    currentDay.innerHTML = time;
}


currentDayUpdate();
setInterval(currentDayUpdate, 1000);



//function to determine whether or not time has already passed
//color code in respons
//loop to go through all time blocks then compare each one to current hour var currentTime

//variable that stores that blocks hour grab by timeblock id in id parse string to integer
// if statements
// if (timebox < currentHour)
    //add pass class
//  else if (timebox > moment)
    //remove present
    //remove past
    // add future class

// if (timebox == moment)
    //remove past
    // add present


// function loading tast from local storage
// target with reference to textarea set value to localstorage.getItem('key')

//setInterval to run the hourcolor updating function every 15-30s


//does this onload in tandem with color code function


//save task functon
//reference to textarea and grab userinput via value
//store value as var
//event.target for save button

//use sibling method to target textarea
//use parent to target the specific hour based on the hour id
//local storage set time as key and value as textarea text (setItem)


//event listener to save to local storage
//key for each hour
// $('.saveBtn').on('click', function to save to local storage);