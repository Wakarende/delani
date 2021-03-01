$(document).ready(function() {
    // what we do toggle
    $(".click1").click(function() {
        $("#content-show1").toggle(500);
        $(".content-hidden1").toggle(500);
    });
    $(".click2").click(function() {
        $("#content-show2").toggle(500);
        $(".content-hidden2").toggle(500);
    });
    $(".click3").click(function() {
        $("#content-show3").toggle(500);
        $(".content-hidden3").toggle(500);
    });
    
    //portfolio hover
    $(".card").hover(function() {
        $(".card-img-overlay",this).fadeIn();
     },function(){
        $(".card-img-overlay",this).slideUp();
     }
    );

    // contact input
    const name = document.getElementById("mce-NAME");
    const email = document.getElementById("mce-EMAIL");
    const text = document.getElementById("mce-MESSAGE");
    const form = document.getElementById("mc-embedded-subscribe-form")

    form.addEventListener('submit' ,(e) => {
        e.preventDefault()
        if(name.value && email.value && text.value) {
            alert ("Hello " + name.value + "." + " Thank you for contacting us. We will get back to you as soon as possible.");
        }
    });
});
