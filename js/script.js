$(document).ready(function() {
    // what we do toggle
    $(".click1").click(function() {
        $("#content-show1").toggle();
        $(".content-hidden1").toggle();
    });
    $(".click2").click(function() {
        $("#content-show2").toggle();
        $(".content-hidden2").toggle();
    });
    $(".click3").click(function() {
        $("#content-show3").toggle();
        $(".content-hidden3").toggle();
    });
    
    //portfolio hover
    $(".card").hover(function() {
        $(".card-img-overlay",this).show();
     },function(){
        $(".card-img-overlay",this).hide();
     }
    )

    // contact input
    
});
