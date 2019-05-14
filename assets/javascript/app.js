$(document).ready(function () {
    $("h2").click(function () {
        $(this).hide();
    }
    );

    var gameStatus = {

        timeRemaining: 120,

        startTimer: function () {
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            setInterval(gameStatus.countdown, 1000);
            $("#firstPage").hide();
            questions.displayQuestions();
            // console.log(gameStatus.startTimer)
        },


        countdown: function () {
            gameStatus.timeRemaining--;
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            if (gameStatus.timeRemaining === 0) {
                gameStatus.stopTimer();
                $("#timer").empty();
                // console.log(countdown);
            }
        },

        stopTimer: function () {
            clearInterval();
            questions.checkAnswers();
        },

        // $("#timer").html("<h2>" + number + "</h2>");


        showEndPage: function (numCorrect, numIncorrect, numUnanswered) {
            $("#secondPage").show();
            $("#questions").empty();
            $("#timer").empty();
            $("#timer").hide();
            $("#correct").text("correct (YASSS QWEEN!): " + numCorrect);
            $("#incorrect").text("incorrect (BITCH WHAT?): " + numIncorrect);
            $("#unanswered").text("unanswered (I mean you tried..): " + numUnanswered);
        }
    }

    var questions = {

        displayQuestions: function () {
            var divContainer = $("#questions");
            var answerGroup = $(".form-check");
            divContainer.append('<h2>How well do you know Broad City?</h2>');

            for (var i = 0; i < questionList.length; i++) {

                divContainer.append('<div id="question">' + questionBank[i].question + '</div>');

                var answer1 = questionBank[i].answers[0];
                var answer2 = questionBank[i].answers[1];
                var answer3 = questionBank[i].answers[2];

            }

        }
    }

});

 // $(document)on.("click",); 

    // $(document).ready(function () {
    // click: function(event)
    //         $("#start-button").hide();
    //         startTrivia();
    //         timer.start();
    //         $(".done").show();
    //     }