console.log("JS is linked")

$(document).ready(function() {
  console.log("document is ready");
  $("#play-button").on("click", startGame);
  $(window).on("keydown", moveRigth);

//  $(window).on("keypress", stopWatch);


});

//moves swimers to the right when a key is pressed
//swimmer1 uses the L key
//swimmer2 uses the A key
function moveRigth(event){
  var scrollRight   = $(window).width(),
      elementOffset1 = $('#swimmer1').offset(),
      elementOffset2 = $('#swimmer2').offset();

    //if letter L is pressed the animation starts for swimmer1
    //animation stops if swimmer1 offset is 1050
    if(event.keyCode === 76){
      if(elementOffset1.left < 1050){
        $("#swimmer1").animate({
          marginLeft: "+=35px",
        }, 500 );
      }else{
        $( "#swimmer1" ).keydown(function() {
          console.log("swimmer1 stopped");
          $( "#swimmer1" ).stop();
          console.log("swimmer1 stopped");
          var stopTime1 = Date.now();
          stopGame(stopTime1);
          console.log(stopTime, " this is the stopTime for swimmer 2");

        });
      }
    }

    //if letter L is pressed the animation starts for swimmer1
    //animation stops if swimmer1 offset is 1050
    if(event.keyCode === 65){
      if(elementOffset2.left < 1050){
        $("#swimmer2").animate({
          marginLeft: "+=40px",
        }, 500);
      }else{
        $( "#swimmer2" ).keydown(function() {
          $( "#swimmer2" ).stop();
          var stopTime2 = Date.now();
          stopGame(stopTime2);
          console.log(stopTime, " this is the stopTime for swimmer 2");
        });
      }
    }
  }

function refreshPool(){
  location.reload();
}

function startGame(){
  var startTime = Date.now(),
      endTime,
      counting = false;
  console.log(startTime, " This is the time after play button is clicked");


}

// callback function used with setInterval
// calculates and displays time so far
// WITHOUT updating total
function showCurrentTotal(){
  // calculate time since we last pressed start
  var elapsedTime = (Date.now() - startTime)/1000;
  // display the total time so far
  $(".message").text( (total + elapsedTime) + " seconds" );
}

//sets up a new game
function Game(swimmer1, swimmer2){
  //console.log("a new game has started!");
  this.swimmer1 = swimmer1;
  this.swimmer2 = swimmer2;
}


function stopGame(time){
  console.log("inside stopGame");

}
//prototype for Game (gameStart and gameStop);
//prototype for isWinner?

///a form gets the name and creates a new swwimer.
//listen for form submit event.
function Swimmer(name, position, startTime, endTime){
  this.name = name;
  this.position = position;
  this.startTime = startTime;
  this.endTime = endTime;
}
Swimmer.prototype = new Game;
Swimmer.prototype.constructor = Swimmer;
var swimmer1 = new Swimmer(100, 8);

//
