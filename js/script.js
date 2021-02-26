$(document).ready(function() {
 // what we do toggle
    $(".click1").click(function() {
        $("#content-show1").toggle();
        $(".content-hidden1").toggle();
        $(".content-hidden1").click(function() {
            // $("#content-show1").show();
            // $(".content-hidden1").hide();
        });
    });
    $(".click2").click(function() {
        $("#content-show2").toggle();
        $(".content-hidden2").toggle();
        $(".content-hidden2").click(function() {
            $("#content-show2").show();
            $(".content-hidden2").hide();
        });
        // $("#content-show2").hide();
    });
    $(".click3").click(function() {
        $("#content-show3").toggle();
        $(".content-hidden3").toggle();
        $(".content-hidden3").click(function() {
            $("#content-show3").show();
            $(".content-hidden3").hide();
        })
        // $("#content-show3").hide();
    });
// portfolio hover

   
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