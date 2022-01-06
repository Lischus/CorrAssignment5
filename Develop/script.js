$(document).ready(function(){
    var blocksEl = document.querySelector(".container")

//var today = moment().hour();
$("#currentDay").text(moment().format("MMM Do, YYYY"));

function hourChecker () {
    var currentHour = moment().hour()
    $(".time-block").each(function(){
        var time = parseInt($(this).attr("id"));
        console.log(time)
        if (time < currentHour) {
            $(this).addClass("past")
        } else if (time === currentHour) {
            $(this).removeClass("past")
            $(this).addClass("present")
        } else {
            $(this).removeClass("past")
            $(this).removeClass("present")
            $(this).addClass("future")
        }
    })
}

//function saveSchedule(event) {
    //localStorage.setItem("9AM", "textarea.value")
//}

//gets the text to the local storage after hitting the button
$(".saveBtn").on("click", function() {
    //grabs the text from the text box next to the button
    var description = $(this).siblings(".description").val()
    //
    var timeBlock = $(this).parent().attr("id")
    console.log(description)
    localStorage.setItem(timeBlock, description)
})

//grabs local storage after refresh
$("#9 .description").val(localStorage.getItem("9"))
$("#10 .description").val(localStorage.getItem("10"))
$("#11 .description").val(localStorage.getItem("11"))
$("#12 .description").val(localStorage.getItem("12"))
$("#13 .description").val(localStorage.getItem("13"))
$("#14 .description").val(localStorage.getItem("14"))
$("#15 .description").val(localStorage.getItem("15"))
$("#16 .description").val(localStorage.getItem("16"))
$("#17 .description").val(localStorage.getItem("17"))
hourChecker()
});
//make sure if time < today then you want to add and remove classes of past, present and future

// time < today, time === today, time > today

//use $(this) a lot, including save button

//local storage always needs a key and value, the key will be the stuff in the text area, the value will be the 

//set item saves within local storage, get item retrieves what's already in local storage

//set item needs two conditions, get item needs one condition

//two conditions are key and value, one is key