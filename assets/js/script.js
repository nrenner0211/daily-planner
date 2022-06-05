// time in header
var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm a');
$("#currentDay").html(currentTime);

$(document).ready(function() {
    //save event listener
    $(".saveBtn").on('click', function() {
        var text = $(this).siblings(".input").val();
        var time = $(this).parent().attr("id");

        //save to local storage
        localStorage.setItem(time, text);
    })
})