$(function() {
    var topBtn = $('#pagetop');
    topBtn.hide();
    //スクロールが300に達したらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールでトップへもどる
    topBtn.click(function() {
        $('bodßy,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

$(function() {
    $('[href^="#"]').click(function() {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - 110;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});

//ヘッダーの高さ分だけコンテンツを下げる
$(function() {
    var height = $("#header").height();
    $("body").css("margin-top", height + 15); //15pxだけ余裕をもたせる
});


//ナビゲーションバーのレスポンシブ仕様
$(function() {
    $(".btn-gnavi").on("click", function() {
        // ハンバーガーメニューの位置を設定
        var rightVal = 0;
        if ($(this).hasClass("open")) {
            // 位置を移動させメニューを開いた状態にする
            rightVal = -300;
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).removeClass("open");
        } else {
            // メニューを開いたら次回クリック時は閉じた状態になるよう設定
            $(this).addClass("open");
        }

        $("#global-navi").stop().animate({
            right: rightVal
        }, 200);
    });
});