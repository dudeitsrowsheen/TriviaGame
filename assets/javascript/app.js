$(document).ready(function(){
        $("h2").click(function(){
          $(this).hide();
        }
        );

    //     event += parseInt($(this).attr('value'));

    // });

    var gameStatus = {

        timeRemaining: 120,

        startTimer: function () {
            $("#timer").text("Hurry! " + gameStatus.timeRemaining);
            setInterval(gameStatus.countdown, 1000);
            $("#homePage").hide();
            trivia.displayQuestions();
            console.log(gameStatus.startTimer)
        },


        countdown: function () {
            gameStatus.timeRemaining--;
            $("#timer").text("Time remaining: " + gameState.timeRemaining);
            if (gameStatus.timeRemaining === 0) {
                gameState.stopTimer();
                $("#timer").empty();
                console.log(countdown);
            }
        },

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
    
