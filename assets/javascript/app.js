$(document).ready(function () {
    $("h2").click(function () {
        $(this).hide();
    }
    );

    var gameStatus = {

        timeRemaining: 120,

        startTimer: function () {
            $("#timer").text("You got this! 2:00 mins!" + gameStatus.timeRemaining);
            setInterval(gameStatus.countdown, 1000);
            $("#firstPage").hide();
            trivia.displayQuestions();
            console.log(gameStatus.startTimer)
        },


        countdown: function () {
            gameStatus.timeRemaining--;
            $("#timer").text("You got this! 2:00 mins!" + gameState.timeRemaining);
            if (gameStatus.timeRemaining === 0) {
                gameStatus.stopTimer();
                $("#timer").empty();
                console.log(countdown);
            }


        },
        stopTimer: function () {
            clearInterval();
            trivia.checkAnswers();
        },

        // $("#timer").html("<h2>" + number + "</h2>");


        // showEndPage: function(numCorrect, numIncorrect, numUnanswered) {
        //     $("#secondPage").show();
        //     $("#questions").empty();
        //     $("#timer").empty();
        //     $("#timer").hide();
        //     $("#correct").text("correct (YASSS QWEEN!): " + numCorrect);
        //     $("#incorrect").text("incorrect (BITCH WHAT?): " + numIncorrect);
        //     $("#unanswered").text("unanswered (I mean you tried..): " + numUnanswered);
        //   }



        // $(document)on.("click",); 

        // $(document).ready(function () {
        // click: function(event)
        //         $("#start-button").hide();
        //         startTrivia();
        //         timer.start();
        //         $(".done").show();
        //     },
    }

});

