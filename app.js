console.log("JS is linked")


$(document).ready(function() {
  console.log("document is ready");
  $(window).on("keydown", moveRigth);
  // $(window).on("keypress", stopWatch);


});

//moves swimers to the right when a key is pressed
//swimmer1 uses the L key
//swimmer2 uses the A key
function moveRigth(event){
  var scrollRight   = $(window).width(),
  elementOffset1 = $('#swimmer1').offset(),
  elementOffset2 = $('#swimmer2').offset();
  console.log(elementOffset2);

    if(event.keyCode === 76){
      if(elementOffset1.left < 1050){
        console.log("inside if")
        $("#swimmer1").animate({
          marginLeft: "+=35px",
        }, 1000 );
      }else{
        $( "#swimmer1" ).keydown(function() {
          $( "#swimmer1" ).stop();
        });
      }
    }

    if(event.keyCode === 65){
      if(elementOffset2.left < 1050){
        $("#swimmer2").animate({
          marginLeft: "+=40px",
        }, 1000 );
      }else{
        $( "#swimmer2" ).keydown(function() {
          $( "#swimmer2" ).stop();
        });
      }
    }
  }


// keeps track of time and display time on screen
function stopWatch(event){

}

//sets up a new game
function Game(swimmer1, swimmer2){
  this.swimmer1 = swimmer1;
  this.swimmer2 = swimmer2;
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
