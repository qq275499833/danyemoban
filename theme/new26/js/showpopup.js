// 滑动滚动条
$(window).scroll(function(){
// 滚动条距离顶部的距离 大于 700px时
    if($(window).scrollTop() >= 770){
        $('.main_header').css('display','none');
        $('.shop').addClass('shop fixed');
    } else{
        $('.main_header').css('display','block');
        $('.shop').removeClass('fixed');
    }
    $('.dd').on('click',function () {

    });

});

//    點擊立即搶購顯示另一個頁面
function main_footer() {
    $('.main_content').css('display','none');
    $('.design').css('display','block');
    $('.buy').css('display','block');
    $('.qd').css('display','block');
    $('.gm').css('display','none');

}
//弹层
function show_specwin(){
    tools.show_win("#specWin","450px");
    hide_cartwin();
    hide_successwin();
}
function hide_specwin(){
    tools.close_win("#specWin");
}
function show_cartwin(){
    refresh_prod_ul();
    tools.show_win("#cartWin",'100%');
    hide_specwin();
    hide_successwin();
}
function hide_cartwin(){
    tools.close_win("#cartWin");
}

function show_successwin(){
    tools.show_win("#successWin",'100%');
    hide_specwin();
    hide_cartwin();
    $('.dt_content').css('display','none');
    $('.design').css('display','none');
    $('.buy1').css('display','block');

}
function hide_successwin(){
    tools.close_win("#successWin");
}
function show_cartisempty(){
    hide_cartwin();
    hide_specwin();
    $("#empty").show();
    $("#price").hide();
}
