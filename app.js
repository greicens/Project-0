console.log('JS is linked')

$(document).ready(function() {
  console.log('document is ready');
  $('#play-button').on('click', startGame);
  $(window).on('keydown', moveRigth);
});

//moves swimers to the right when a key is pressed
//swimmer1 uses the L key
//swimmer2 uses the A key
function moveRigth(event){
  var scrollRight   = $(window).width(),
      elementOffset1 = $('#swimmer1').offset(),
      elementOffset2 = $('#swimmer2').offset();

    //if letter L is pressed the animation starts for swimmer1
    //animation stops if swimmer1 offset is 1030

    if(event.keyCode === 76){

      if(elementOffset1.left < 1030){
        $('#swimmer1').animate({
          marginLeft: "+=35px",
        }, 500 );
      }else{
        $('#swimmer1').keydown(function() {
          console.log('swimmer1 stopped');
          $('#swimmer1').stop();
          console.log('swimmer1 stopped');
          var stopTime1 = Date.now();
          stopGame(stopTime1);
          console.log(stopTime, ' this is the stopTime for swimmer 2');

        });
      }
    }

    //if letter L is pressed the animation starts for swimmer1
    //animation stops if swimmer1 offset is 1030
    if(event.keyCode === 65){
      if(elementOffset2.left < 1030){
        $('#swimmer2').animate({
          marginLeft: '+=40px',
        }, 500);
      }else{
          $( '#swimmer2').stop();
          var stopTime2 = Date.now();
          stopGame(stopTime2);
          console.log(stopTime2, ' this is the stopTime for swimmer 2');
        }
      }
    }


function refreshPool(){
  location.reload();
}

function startGame(){
  var startTime = Date.now(),
      endTime;
  console.log(startTime, ' This is the time after play button is clicked');
  swimmer1Clock.timeoutTick();
  swimmer2Clock.timeoutTick();

}



//sets up a new game
function Game(swimmer1, swimmer2){
  console.log('a new game has started!');
  this.swimmer1 = swimmer1;
  this.swimmer2 = swimmer2;
}


function stopGame(time){
  console.log('inside stopGame');
  swimmer2Clock.timeoutStop();


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

function Clock() {
  this.totalSeconds = 0,

  this.getSeconds = function(){
    var seconds = this.totalSeconds % 60;

    if(seconds <  10){
      seconds = '0' + seconds;
    }
    return '' + seconds;
  },

  this.getMinutes = function(){
    var minutes = Math.floor((this.totalSeconds / 60) % 60);

    if(minutes < 10){
      minutes = '0' + minutes;
    }
    return  '' + minutes;
  },

  this.getHours = function(){
    var hours = Math.floor(this.totalSeconds / 3600);

    if(hours < 10){
      hours = '0' + hours;
    }
    return '' + hours;
  },

  this.printTime = function(){
     console.log(this.getMinutes()+ ':' +
     this.getSeconds() );

  },

  this.timeoutTick = function(startSeconds){

      if(startSeconds !== undefined){
        this.totalSeconds = startSeconds;
      }
      this.totalSeconds++;
      this.printTime();
     setTimeout(this.timeoutTick.bind(this), 1000);
    },

  this.timeoutStop = function(){
    console.log('time stoped');
    clearTimeout()
    //I dont know what goes iside clearTimeout)

  }

};

var swimmer1Clock = new Clock;
swimmer1Clock.printTime =  function(){$('#swimmer1-time').text( this.getMinutes()+ ':' +
 this.getSeconds())};
var swimmer2Clock = new Clock;
swimmer2Clock.printTime =  function(){$('#swimmer2-time').text( this.getMinutes()+ ':' +
 this.getSeconds())};
