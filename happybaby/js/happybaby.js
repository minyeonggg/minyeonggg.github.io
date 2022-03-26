$(function(){ /* html 내용을 다 읽고 난 후 {}안 함수들을 실행시켜주세요 */
/* -------------------------------------------------------- */
$('.main_slider').slick({
    arrows:false,
    autoplay:true,
    fade:true,
    pauseOnHover:false,
    pauseOnFocus:false,
});
$('.main_slider').on('afterChange', function(e,s,c){
    // console.log(c); 슬라이더 순서의 숫자가 나온다
    $('.slider_dots ul li').eq(c).addClass('on').siblings().removeClass('on');
});/* main_slider > afterChange > {}안 함수들을 실행시켜주세요 */

$(window)/* 창 */.on('scroll'/* 스크롤 했을 때 */, function()/* 실행시켜주세요 */{
    var sct = $(window).scrollTop();
/*  console.log(sct); -> console 기록 남기는 명령어 */

    if (sct > 100) {
        $('#header').addClass('on')
    } else {
        $('#header').removeClass('on')
    }
});

$('#header .menu_open_btn').on('click',function(){
    $(this).toggleClass('on');
    $('#header .gnb_wrap').toggleClass('on');
});

const topLine = $('#header .top_line').clone();

$('#header .gnb_wrap nav').prepend(topLine);


/* -------------------------------------------------------- */
})