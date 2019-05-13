$(document).ready(function(){
    $("#start-button").on("click",gameState.start)

});


   
    var gameState = {
        
    timeRemaining: 120,

startbutton: function(){
    $("#timer").text("Hurry! " + gameTime.timeRemaining);
    setInterval(gameT.countdown, 1000);
    
}


   }
   
   
   
    timer = { 

        time = 120

        start: function 
    }



