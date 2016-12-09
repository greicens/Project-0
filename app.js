console.log("JS is linked")
$(document).ready(function() {
  console.log("document is ready");
  $("#swimmer1").on("click", moveRigth);
  $("#swimmer2").on("click", moveRigth);


});

function moveRigth(event){
  event.preventDefault();

  var scrollRight   = $(window).width(),
  elementOffset1 = $('#swimmer1').offset(),
  elementOffset2 = $('#swimmer2').offset();
  console.log(elementOffset2);

  console.log("inside moveRigth")
  if(elementOffset1.left < 896.5){
    console.log("inside if")
    $("#swimmer1").animate({
        marginLeft: "+=35px",
    }, 1000 );
  }else{
    $( "#swimmer1" ).click(function() {
    $( "#swimmer1" ).stop();
    });
  }
  if(elementOffset2.left < 896.5){
    $("#swimmer2").animate({
        marginLeft: "+=40px",
    }, 1000 );
  }
}
