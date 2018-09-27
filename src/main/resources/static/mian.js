$(function(){
    var webSocket = new WebSocket("ws://localhost:9999/websocket");
    $(".send").on("click",function(){
        var message= $(".message").val();
        message=$.trim(message);
        if(message){
            webSocket.send(message);
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

    webSocket.onopen = function(event){
        console.log("连接成功");
        console.log(event);
    };
    webSocket.onerror = function(event){
        console.log("连接失败");
        console.log(event);
    };
    webSocket.onclose = function(event){
        console.log("Socket连接断开");
        console.log(event);
    };
    webSocket.onmessage = function(event){
        $(".body").append("<span class='me'><span>"+event.data+"</span></span>");
        $(".body")[0].scrollTop=$(".body")[0].scrollHeight;
    }

})