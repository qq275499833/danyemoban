
//关闭购买成功信息
function closeSuccess(){
    $(".after_buyNow").removeClass("show");
    $(".black_overlay").removeClass("show");
}
//打开购买成功信息
function show_successwin(){
    $(".after_buyNow").addClass("show");
    $(".black_overlay").addClass("show");
}
//弹出检查状态
function showStateSer(){
    $(".black_overlay").addClass("show");
    $(".state_show").addClass("show");
}
//关闭检查状态
function closeStateSer(){
    $(".black_overlay").removeClass("show");
    $(".state_show").removeClass("show");
}

//弹出规格选择和地址填写
function showOrder(){
    $("#page-order").addClass("show");
}

function closeOrder(){
    $("#page-order").removeClass("show");
}

var countdown =appData.countdown;
if(countdown){
    $("#countdown").show();
    var int=setInterval(GetRTime, 1000);
}
function GetRTime() {
    var EndTime = new Date(Date.parse(countdown.replace(/-/g,"/")));
    EndTime.setDate(EndTime.getDate());
    var NowTime = new Date();
    var t = EndTime.getTime() - NowTime.getTime();
    if(t<=0){
        $("#countdown").hide();
        int=window.clearInterval(int);
    }else {
        var d = 0;
        var h = 0;
        var m = 0;
        var s = 0;
        if (t >= 0) {
            d = Math.floor(t / 1000 / 60 / 60 / 24);
            h = Math.floor(t / 1000 / 60 / 60 % 24);
            m = Math.floor(t / 1000 / 60 % 60);
            s = Math.floor(t / 1000 % 60);
        }
        $('#timeHour').text(h);
        $('#timeMin').text(m);
        $('#timeSec').text(s);
        $('#day').text(d);
    }
}
//单页一级规格缺货
init_nocart_oos();