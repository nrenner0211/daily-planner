// time in header
var currentTime = moment().format('dddd, MMMM Do YYYY, h:mm a');
$("#currentDay").html(currentTime);


$(document).ready(function() {
    function timeAlert() {
        //get hours
        var timeNow = moment().hour();

        $("time-block").each(function() {
            var hourlyTime = parseInt($(this).attr("id").split("hour")[1]);

            //add classes per time
            if (hourlyTime < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            if (hourlyTime === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            } else {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
    })
}})

// function loadQuestion() {
//     //question appears onscreen
//     questionEl.textContent = quizQuestions[questionIndex].question;
//     //clears old answer choices
//     answerEl.innerHTML = ""; 

//     var questionChoices = quizQuestions[questionIndex].choices
//     var sortedChoices = questionChoices.sort().reverse();
//     console.log(sortedChoices);
//     for (var i in questionChoices) {
//         var item = questionChoices[i];
//         var answerBtn = document.createElement('button');
//         answerBtn.textContent = item;
//         answerBtn.classList.add("btn");
//         answerBtn.addEventListener("click", function () {
//             //when answer clicked, check answer
//             checkAnswer(this.textContent);
//         });
//         //add buttons to screen
//         answerEl.appendChild(answerBtn);
//     }
// };