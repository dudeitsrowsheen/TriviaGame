$(document).ready(function () {
    $("h2").click(function () {
        $(this).hide();
        // $("#start-button").on("click", gameStatus.startTimer);
        gameStatus.startTimer();
    });

    var gameStatus = {

        timeRemaining: 3,

        startTimer: function () {
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            setInterval(gameStatus.countdown, 1000);
            $("#first-Page").hide();
            trivia.displayQuestions();
            console.error(gameStatus.timer);
            console.log("timer started");
        },


        countdown: function () {
            gameStatus.timeRemaining--;
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            if (gameStatus.timeRemaining === 0); {
                gameStatus.stopTimer();
                // countdown = Math.max(1, countdown);
                $(timer).empty();
            }
        },

        stopTimer: function () {
            clearInterval();
            questions.checkAnswers();
        },
        displayAnswerPage: function (correct, incorrect, unanswered) {
            $("#answerPage").display();
            $("#questions").empty();
            $("#timer").empty();
            $("#yes").text("YASSS QWEEN!" + correct);
            $("#no").text("EXCUSE-AH-ME?" + incorrect);
            $("#unanswered").text("You don't watch Broad City" + unanswered);
        }
    }
    console.log(countdown);s
    console.log(gameStatus.timeRemaining);


    var game = {

        displayQuestions: function () {
            var container = $("#questions");
            var answerList = $(".check-answers");
            container.append('<h2>Lets go baby!</h2>');

            for (var i = 0; i < questionList.length; i++) {

                container.append('<div id="question">' + questionList[i].question + '</div>');

                var answer1 = questionList[i].answers[0];
                var answer2 = questionList[i].answers[1];
                var answer3 = questionList[i].answeers[2];



            }
        }
    }
})