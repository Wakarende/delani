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
// portfolio hover

    $(".card").hover(
        function(){
            $(".card-body").slideDown();
        },
     function(){
         $(".card-body").slideUp();
     }
    );
   
});










































//  let cardTotal = (
//         $(".card").toArray().length
//     );
//     for(let cardNumber = 1; cardNumber <= cardTotal; cardNumber ++) {
//         $("#portfolio1 $(cardNumber)").hover(function() {
//             $('#portfolio1 $(cardNumber)> .card-body').show();
//         })
//     }
//    $("#showing").hover( {
     
//    })