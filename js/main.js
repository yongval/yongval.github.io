// VARIABLES GLOBALES

// DOM READY
$(document).ready(function() {
    console.log("ready");
});



$(document).ready(function() {
    // Handle click event on list items
    $("#caroussel-wrapper_dots li").on("click", function() {
        // Remove active class from all dots
        $("#caroussel-wrapper_dots li").removeClass("active");
        // Add active class to the clicked dot
        $(this).addClass("active");

        // Calculate the index of the clicked dot
        var index = $(this).index();

        // Move the wrapper to show the corresponding image
        var translateValue = -Math.min(index * 500, 1500);
        $("#caroussel_wrapper").css("transform", "translateX(" + translateValue + "px)");
    });
});

$("#run-anim").click(function() {	
      	      
    var el     = $(this),  
        newone = el.clone(true);
              
    el.before(newone);
           
    $("." + el.attr("class") + ":last").remove();
   
});





