// ハンバーガーメニュー.
$(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('is_active');
        $('.nav_links').toggleClass('is_active');
    })
});

// ローディング画面.
$(function() {
    $(window).on('load', function() {
        setTimeout(function(){
            $('.loading').removeClass('is_active');
        }, 1000) ;
        setTimeout(function(){
            $('#hero').addClass('fade-in');
        }, 1000);
    });
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

// スクロール時に要素が現れるアニメーション.
$(function() {
    $(window).on('scroll', function () {
        $('.fade-target').each(function () {
            var targetPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
        
            if (scroll + windowHeight > targetPos + 50) {
                $(this).addClass('fade-in');
            }
        });
    });
});

// モーダルを開く
$(function() {
    $('.openModal').on('click', function () {
        var imgSrc = $(this).data('src');
        var imgNames = $(this).data('imgs').split(',');
        var title = $(this).data('title');
        var infoText = $(this).data('info');
        var tech = $(this).data('tech');
        var linkUrl = $(this).data('link');
    
        $('#modal').css('display', 'flex');
        for (var imgName of imgNames) {
            var text = '<img class="modal-image" src=' + imgSrc + imgName + ' >';
            $('#small-images').append(text)
        }
        $('#large-image').attr('src', imgSrc+imgNames[0])
        $('#modal-title').text(title);
        $('#modal-text').text(infoText);
        $('#modal-tech').text(tech);
        $('#modal-link').attr('href', linkUrl);
        $('#modal').fadeIn();
    });
});

// モーダルを閉じる
$(function() {
    $('#closeModal').on('click', function () {
        $('#modal').css('display', 'none');
    });
});

// モーダルの写真を拡大する.
$(function() {
    $('#small-images').on('click', '.modal-image', function() {
        // console.log($(this).children());
        console.log("!");
        var imgSrc = $(this).attr('src');
        $('#large-image').attr('src', imgSrc);
    });
});