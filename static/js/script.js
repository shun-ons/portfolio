// ハンバーガーメニュー.
$(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('is_active');
        $('.nav_links').toggleClass('is_active');
    })
});

// ローディング画面.
window.addEventListener('load', function() {
    setTimeout(function(){
        $('.loading').removeClass('is_active');
    }, 1000) 
});

// 画像のズーム.
$(function() {
    $('#my_work img').hover(
        function() {
            $(this).addClass('zoom');
        },
        function() {
            $(this).removeClass('zoom');
        }
    )
});