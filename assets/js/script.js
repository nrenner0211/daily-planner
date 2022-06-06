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

    function timeOfDay() {
        
        //get hours
        var timeNow = moment().hour();

        // timeblocks
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);

            //add classes per time
            if (blockTime < timeNow) {

                //remove old classes
                $(this).removeClass("present");
                $(this).removeClass("future");

                //add new class
                $(this).addClass("past");
                
            } else if (blockTime === timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }

    $("#hour8 .input").val(localStorage.getItem("hour8"));
    $("#hour9 .input").val(localStorage.getItem("hour9"));
    $("#hour10 .input").val(localStorage.getItem("hour10"));
    $("#hour11 .input").val(localStorage.getItem("hour11"));
    $("#hour12 .input").val(localStorage.getItem("hour12"));
    $("#hour13 .input").val(localStorage.getItem("hour13"));
    $("#hour14 .input").val(localStorage.getItem("hour14"));
    $("#hour15 .input").val(localStorage.getItem("hour15"));
    $("#hour16 .input").val(localStorage.getItem("hour16"));
    $("#hour17 .input").val(localStorage.getItem("hour17"));
    $("#hour18 .input").val(localStorage.getItem("hour17"));
    $("#hour19 .input").val(localStorage.getItem("hour17"));
    $("#hour20 .input").val(localStorage.getItem("hour17"));


    timeOfDay();
})


