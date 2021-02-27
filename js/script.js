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
    
    
    $(".card").hover(function() {
        $(".card-img-overlay",this).show();
     },function(){
        $(".card-img-overlay",this).hide();
     }
    )

    //contact input
    let name = document.getElementById.("#inputName").value;
let email = document.getElementById.("#inputEmail").value;
let textArea = document.getElementById.("#text-area").value;

function getInput() {
  let name = document.getElementById.("#inputName").value;
  alert("Dear $("name") we have received your message");
};
});
