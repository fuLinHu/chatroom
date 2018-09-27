$(function(){
    $(".send").on("click",function(){
        var message= $(".message").val();
        message=$.trim(message);
        if(message){
            $(".body").append("<span class='me'><span>"+message+"</span></span>");
            $(".body")[0].scrollTop=$(".body")[0].scrollHeight;
        }
    })
    $(".message").on("keyup",function(){
        var message= $(".message").val();
        message=$.trim(message);
        if(message){
            $(".send").addClass("active");
        }else{
            $(".send").removeClass("active");
        }
    })
})