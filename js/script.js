$(document).ready(function() {
    $(".click1").click(function() {
        $(".content-hidden1").toggle();
        $("#content-show1").hide();
    })
    $(".click2").click(function() {
        $(".content-hidden2").toggle();
        $("#content-show2").hide();
    })
    $(".click3").click(function() {
        $(".content-hidden3").toggle();
        $("#content-show3").hide();
    })
});