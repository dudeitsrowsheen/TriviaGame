$(document).ready(function () {
    $("Button").click(function () {
        // $("#Button").on("click", gameStatus.startTimer);
        $(this).hide();
        gameStatus.startTimer();
    });

    // var = gameStatus
    // var = game
    // var = answer1
    // var = answer2
    // var = answer3

    var trivia = {
        displayQuestions: function () {
            //code to display questions
            console.log("displayQuestions()");
            var questionStorage = this;
            $.each(this.questions, function (i) {
                var q1 = questionStorage.questions[i];
                console.log(q1.q)
                console.log(q1.a)
                console.log(q1.correct)
                var questionBox = $('<div>').text(q1.q)
                for (var i = 0; i < q1.a.length; i++) {
                    var Button = $('<Button>').text(q1.a[i]);
                    Button.attr('data-val', i);
                    Button.click(function () {
                        q1.user = $(this).attr('data-val');
                        console.log(q1.user);
                    });
                    questionBox.append(Button);
                }
                $("#questions").append(questionBox)
            })

        },

        checkAnswers: function () {
            $.each(this.score, function () {
                
            })
            //some sort of loop to grade all questions on page
        },

        displayAnswerPage: function () {
            checkAnswers.displayAnswerPage();
            var score = 0;
            $.each(this.score, function () {
                if ($(this).user == -1) {
                    score -= 0;
                } else if ($(this).user == $(this).correct) {
                    score += 1;
                } else {
                    scoree += 0.5;
                }
            })

            $("#AnswerPage").display(); 
            $("#questions").empty();
            $("#timer").empty();
            if (score < 10) {//change based on how many q's you have (total possible score values)
                $("#unanswered").text("You don't watch Broad City biotch");
            } else if (score < 5) {
                $("#no").text("EXCUSE-AH-ME?");
            } else {
                $("#yes").text("YASSS QWEEN!");
            }
        },




        questions: [
            {
                user: -1,
                q: "Where does Abbi work",
                a: ["Soulstice", "Equinox", "Nap York", "Brooklyn Bulge"],
                correct: 0,//correct answer, starting at 0
            },
            {
                user: -1,
                q: "Whats is the name of Abbi's roomate we never see?",
                a: ["Nancy", "Elisa", "Ilana", "Melody"],
                correct: 3,
            },
            {
                user: -1,
                q: "Who is the boyfriend of Abbi's roomate?",
                a: ["Mikey", "Bevers", "Scotty", "Trey"],
                correct: 2,
            },
            {
                user: -1,
                q: "What part of NYC do Abbi and Ilana refer to as wasteland?",
                a: ["Upper East Side", "West Village", "Tribeca", "Garment District"],
                correct: 0,
            },
            {
                user: -1,
                q: "What is Trey's porn name?",
                a: ["Malcolm XXX", "Long Ranger", "Forest Rump", "Kirk Steele"],
                correct: 3,
            },
            {
                user: -1,
                q: "At Max's art gallery in Szn 3 Ep 1, who comments on Ilana's chain belt?",
                a: ["Ru Paul", "Whoopi Goldberg", "Har Mar Superstar", "Adam Levine"],
                correct: 2,
            },
            {
                user: -1,
                q: "What is Abbi and Ilana's favorite store to shop at?",
                a: ["Dollar General", "Targé Boutique", "Bed Bath and Beyond", "TJ Max"],
                correct: 3,
            },
            {
                user: -1,
                q: "What is the name of Lincoln's cooking blog?",
                a: ["Dental Dumpling", "The Al Dente Dentist", "The Deep Dish Dentist", "Dental Doughboy"],
                correct: 1,
            },
            {
                user: -1,
                q: "When Abbi goes to Kelly Ripa's house, what shoes must she put on once inside?",
                a: ["Her extra pair of Louboutin heels", "Water Proof Shoe Covers", "Sketchers Shape Ups", "No shoes allowed"],
                correct: 2,
            },


        ]
    }

    var gameStatus = {
        interval: null,
        timeRemaining: 5,

        startTimer: function () {
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            this.interval = setInterval(gameStatus.countdown, 1000);
            $("#first-Page").hide();
            trivia.displayQuestions();
            console.log("timer started");
        },


        countdown: function () {
            gameStatus.timeRemaining--;
            $("#timer").text("Time remaining: " + gameStatus.timeRemaining);
            if (gameStatus.timeRemaining <= 0) {
                gameStatus.stopTimer();
                // countdown = Math.max(1, countdown);
                $("#AnswerPage").text();
                $("#timer").empty();
            }
        },

        stopTimer: function () {
            clearInterval(this.interval);
            trivia.checkAnswers();
        },

    }

    // console.log(countdown);
    // console.log(gameStatus.timeRemaining);


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
});
