


//add active class on navebar link and remove it from sibling
$(".fixed-bar ul li a i").click(function(){

    $(".fixed-bar ul li a i").removeClass("active");

    $(this).addClass("active");
})

