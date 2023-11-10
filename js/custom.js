

$(function () {

    $(window).on('scroll', function () {
        const scrollHeight = $(window).scrollTop();
        console.log(scrollHeight);
        if (scrollHeight > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    });

    $('.mainSlide').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnActive: false,
    });
    
    $('.mainVisual .arrows .left').on('click', function(){
        // 슬라이드가 뒤로 가: slick 홈페이지 참조
        $('.mainSlide').slick('slickPrev')
    })
    
    
    $('.mainVisual .arrows .right').on('click', function(){
        // 슬라이드가 뒤로 가: slick 홈페이지 참조
        $('.mainSlide').slick('slickNext')
    });

    $('.img_box_wrap').slick({
        arrows: false,
        dots: true,
        slidesToShow:3,
        slidesToScroll: 3
    });
    
$('.tab li').on('click', function(e){
    // $(this) : click한 자신
    // $(this).index() : click한 자신의 고유번호

    e.preventDefault(); //a tag의 이벤트 자체를 멈춘다.
    
    const idx = $(this).index(); //0,1,2
    console.log('내가 클릭한 것의 번호:' , idx);

    //e1(idx): idx 번째 자식을 구해라.
    //siblings(): 나머지 형제를 구해라.
    $('.tab .content')
    .eq(idx)
    .addClass('on')
    .siblings()
    .removeClass('on');

    $(this)
    .addClass('on')
    .siblings()
    .removeClass('on');
});

$('.inner02 .arrows .left').on('click', function(){
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $('.img_box_wrap').slick('slickPrev')
})


$('.inner02 .arrows .right').on('click', function(){
    // 슬라이드가 뒤로 가: slick 홈페이지 참조
    $('.img_box_wrap').slick('slickNext')
});


});

