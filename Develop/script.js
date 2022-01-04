$(document).ready(function(){
    var blocksEl = document.querySelector(".container")

//var today = moment().hour();
$("#currentDay").text(moment().format("MMM Do, YYYY"));

$(".time-block").each(function(){
    var time = parseInt($(this).attr("id"));
    console.log(time)
})
localStorage.setItem("9AM", "textarea.value")
});

//make sure if time < today then you want to add and remove classes of past, present and future

// time < today, time === today, time > today

//use $(this) a lot, including save button

//local storage always needs a key and value, the key will be the stuff in the text area, the value will be the 

//set item saves within local storage, get item retrieves what's already in local storage

//set item needs two conditions, get item needs one condition

//two conditions are key and value, one is key