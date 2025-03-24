// ハンバーガーメニュー.
$(function() {
    $('.burger').click(function() {
        $('.burger').toggleClass('is_active');
        $('.nav_links').toggleClass('is_active');
    })
});

// ローディング画面.
$(window).on('load', function() {
    setTimeout(function(){
        $('.loading').removeClass('is_active');
    }, 1000) ;
    setTimeout(function(){
        $('#hero').addClass('fade-in');
    }, 1000);
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

// 開く
$('.openModal').on('click', function () {
    var imgSrc = $(this).data('img');
    var infoText = $(this).data('info');
    var linkUrl = $(this).data('link');
  
    $('#modal').css('display', 'flex');
    $('#modal-image').attr('src', imgSrc);
    $('#modal-text').text(infoText);
    $('#modal-link').attr('href', linkUrl);
    $('#modal').fadeIn();
  });
  
// 閉じる
$('#closeModal').on('click', function () {
    $('#modal').css('display', 'none');
});
  