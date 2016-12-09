console.log("JS is linked")
$(document).ready(function() {
  console.log("document is ready");
  $("#swimmer1").on("click", moveRigth);
  $("#swimmer2").on("click", moveRigth);
});
// var scrollTop     = $(window).scrollTop(),
//     elementOffset = $('#bigDot').offset().top,
//     distance      = (elementOffset - scrollTop);


function moveRigth(event){
  event.preventDefault();

    $("#swimmer1").animate({
        marginLeft: "+=50px",
    }, 1000 );
    $("#swimmer2").animate({
        marginLeft: "+=50px",
    }, 1000 );

}
