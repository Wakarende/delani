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
    const name = document.getElementById("inputName");
    const email = document.getElementById("inputEmail");
    const text = document.getElementById("message");
    const form = document.getElementById("myForm")

    form.addEventListener('submit' ,(e) => {
        e.preventDefault()
        if(name.value && email.value && text.value) {
            alert ("Hello " + name.value + "." + " Thank you for contacting us. We will get back to you as soon as possible.");
        }
    });
// function submit(){
//     event.preventDefault();
//     const name = document.getElementById("inputName").value;
//     const email = document.getElementById("inputEmail").value;
//     const message = document.getElementById("message").value;

//     if(name && email && message){
//         alert("Hello " + name + "thank you for contacting us. We will get back to you shortly.");
        
//     }else if(name && email) {
//         alert("Hello " + name + "." + "leave a message if you want us to have a message.");
//     }else {
//         alert("Please input all the fields");
//     }
// };

    //contact input
    // $("#myForm").submit(function(event) {
    //     event.preventDefault();
    //     let formName = $("inputName").val();
    //     const formEmail = $("inputEmail").val();
    //     const formMessage = $("message").val();

    //     if( formName && formEmail && formMessage ){
    //         alert("Hello " +  + ". We have received your message. We will get back to you shortly." )
    //     }else {

    //     }
            
    
    // });
//     let name = document.getElementById.("#inputName").va;
// let email = document.getElementById.("#inputEmail").value;
// let textArea = document.getElementById.("#text-area").value;

// function getInput() {
//   let name = document.getElementById.("#inputName").value;
//   alert("Dear $name we have received your message");
// };
// const myForm = document.getElementById("myForm");
// myForm.addEventListener("submit") {
//     FormData.preventDefault()
// });
});
