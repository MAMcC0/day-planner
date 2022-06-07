var userInput = $('.user-input'); 
var currentHour = (moment().hour());



function currentDayUpdate() {
    var currentDay = document.querySelector("#currentDay");
    var time = moment().format("dddd MMMM Do YYYY");
    currentDay.innerHTML = time;
}

function compareTime (){
    for (i = 9; i < 18 ; i++){
        var hourRow = $(`#military-time-${i}`);

        if(i < currentHour){
            hourRow.addClass("past")
        } else if ( i === currentHour){
            hourRow.addClass("present");
        } else if (i > currentHour){
           hourRow.addClass("future");
        }
        
    }
}
compareTime();
currentDayUpdate();
setInterval(currentDayUpdate, 1000);
setInterval(compareTime, 15000);


function storeInput (event){
    var target = $(event.target);
    var targetUI = target.siblings('.user-input').val();
    var trimUi = $.trim(targetUI);
    console.log(trimUi);
    console.log(targetUI);
    //$(".user-input").val().trim();
//   if (target.is(".saveBtn")) {
//       target.siblings('.user-input').val().trim();
      console.log(target);
      console.log(userInput);
  }




// target with reference to textarea set value to localstorage.getItem('key')



//save task functon

//use parent to target the specific hour based on the hour id
//local storage set time as key and value as textarea text (setItem)


//event listener to save to local storage
//key for each hour
$('.saveBtn').on('click', storeInput);