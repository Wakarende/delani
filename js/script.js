$(document).ready(function() {
 // what we do toggle
    // $("#click1").click(function() {
    //     $("#content-show1").toggle();
    //     $(".content-hidden1").toggle();
    // });
    $("#click2").click(function() {
        $("#content-show2").toggle();
        $(".content-hidden2").toggle();
    });
    $("#click3").click(function() {
        $("#content-show3").toggle();
        $(".content-hidden3").toggle();
    });
    $(function() {
        $(".click").on('click', function() {
            $(".content-show").toggle();
            $(".content-hidden").toggle();
            var panelId = $(this).attr("data-panelid");
            var panelId2 =$(this).attr("data-panel");
            // $(".content-hidden").on('click', function() {
            //     $(".content-hidden").toggle()
            // })
            // var panelId2 = $(this).attr("data-panelid1");
            // $('#' + panelId).toggle();

            alert(panelId)
            alert(panelId2)
            
            // $('#' + panelId).toggle();
        });
    });
    $(".card").hover(function() {
        $(".card-img-overlay",this).show();
     },function(){
        $(".card-img-overlay",this).hide();
     }
    )

});
