var color = "#ec8193";
var sliderImg = $('.slider img');
window.onload = function() {
    var count = 0;
    var sliderPlay = sliderImg.eq(count);
    setInterval(function() {
        sliderPlay = sliderImg.eq(count);
        TweenMax.fromTo(sliderPlay, 3, {
            opacity: 1,
            ease: Linear.Power4
        }, {
            opacity: 0,
            ease: Linear.Power4
        })
        count++;
        if (count > 2) {
            count = 0;
        }
        sliderPlay = sliderImg.eq(count);
        TweenMax.fromTo(sliderPlay, 3, {
            opacity: 0,
            ease: Linear.Power4
        }, {
            opacity: 1,
            ease: Linear.Power4
        })
    }, 6000);
};
var hasTouch = 'ontouchstart' in window;
if (!hasTouch) {
    var headSpanRight = $('.head .right span');
    headSpanRight.on('mouseenter', function() {
        $(this).css("color", color);
        $(this).css("cursor", "pointer");
    }).on('mouseleave', function() {
        $(this).css("color", "black");
    });
    var singleImg = $('.pics img');
    singleImg.on('mouseenter', function() {
        var single = $(this).parents('.single');
        single.css("cursor", "pointer");
       single.addClass('trans');
    }).on('mouseleave', function() {
        var single = $(this).parents('.single');
        single.removeClass('trans');
    });
    var send = $('.connect span');
    send.on('mouseenter', function() {
        send.css("color", color);
        send.css("cursor", "pointer");
    }).on('mouseleave', function() {
        send.css("color", "white");
    });
    var icon = $('.connect .right .icon img');
    icon.on('mouseenter', function() {
        $(this).css("cursor", "pointer");
        TweenMax.to($(this), 1, {
            opacity: 1
        });
    }).on('mouseleave', function() {
        TweenMax.to($(this), 1, {
            opacity: .7
        });
    });
};
var placeholderValue;
var input = $('.connect .input');
input.on('focus', function() {
    placeholderValue = $(this).attr("placeholder");
    $(this).attr("placeholder", "");
}).on('blur', function() {
    $(this).attr("placeholder", placeholderValue);
});
