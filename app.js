console.log("JS is linked")
$(document).ready(function() {
  console.log("document is ready");
  $("#bigDot").on("click", moveRigth);
});
// var scrollTop     = $(window).scrollTop(),
//     elementOffset = $('#bigDot').offset().top,
//     distance      = (elementOffset - scrollTop);


function moveRigth(event){
  event.preventDefault();

    $("#bigDot").animate({
        marginLeft: "+=50px",
    }, 1000 );
}
