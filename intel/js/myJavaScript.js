var color = "#0171c5";
var orange = "#FFA800";
var color1 = "#00bcf2";

back = $('.back');
back.on("touchstart", function() {
    back.find('img').attr("src", "images/btn-tophover002x.png");
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv1").offset().top
    })
})
back.on('touchend', function() {
    back.find('img').attr("src", "images/btn-top002x.png");
})

var div2_go = $('.dv2_inner_container1');
div2_go.on('touchstart', function() {
    div2_go.find('.circle').find("img")
        .attr("src", "images/circle1002xOver.png");
    div2_go.find('.tag1').find("img")
        .css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv3").offset().top
    })
})
div2_go.on('touchend', function() {
    div2_go.find('.circle').find("img")
        .attr("src", "images/circle1002x.png");
    div2_go.find('.tag1').find("img")
        .css("background-color", color);
})

var div2_home = $('.dv2_inner_container2');
div2_home.on('touchstart', function() {
    div2_home.find('.circle').find("img")
        .attr("src", "images/circle2002xOver.png");
    div2_home.find('.tag').find("img")
        .css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv4").offset().top
    })
})
div2_home.on('touchend', function() {
    div2_home.find('.circle').find("img")
        .attr("src", "images/circle2002x.png");
    div2_home.find('.tag').find("img")
        .css("background-color", color1);
})

var chooseTablet = $('.dv3 .a4');
chooseTablet.on('touchstart', function() {
    chooseTablet.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv7").offset().top
    })
})
chooseTablet.on('touchend', function() {
    chooseTablet.find('img').css("background-color", color1);
})

var notTheRightFit = $('.dv3 .a5');
notTheRightFit.on('touchstart', function() {
    notTheRightFit.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv4").offset().top
    })
})
notTheRightFit.on('touchend', function() {
    notTheRightFit.find('img').css("background-color", color1);
})

var chooseLaptop = $('.dv4 .a4');
chooseLaptop.on('touchstart', function() {
    chooseLaptop.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv8").offset().top
    })
})
chooseLaptop.on('touchend', function() {
    chooseLaptop.find('img').css("background-color", color);
})

var both = $('.dv4 .a5');
both.on('touchstart', function() {
    both.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv5").offset().top
    })
})
both.on('touchend', function() {
    both.find('img').css("background-color", color);
})

var choose2InOne = $('.dv5 .a4');
choose2InOne.on('touchstart', function() {
    choose2InOne.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv9").offset().top
    })
})
choose2InOne.on('touchend', function() {
    choose2InOne.find('img').css("background-color", color1);
})

var chooseDesktop = $('.dv6 .a4');
chooseDesktop.on('touchstart', function() {
    chooseDesktop.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv11").offset().top
    })
})
chooseDesktop.on('touchend', function() {
    chooseDesktop.find('img').css("background-color", color1);
})

var chooseAllInOne = $('.dv6 .a7');
chooseAllInOne.on('touchstart', function() {
    chooseAllInOne.find('img').css("background-color", orange);
    TweenMax.to('html,body', 1, {
        scrollTop: $(".dv10").offset().top
    })
})
chooseAllInOne.on('touchend', function() {
    chooseAllInOne.find('img').css("background-color", color1);
})

var leagal = $('.dv15 .a6');
leagal.on('touchstart', function() {
    leagal.find("img").attr("src", "images/btn-legalhover002x.png");
    $('.dv15 .a4,.dv15 .a5').css("visibility", "visible");
})
leagal.on('touchend', function() {
    leagal.find("img").attr("src", "images/btn-legal002x.png");
})

var closeBtn = $('.dv15 .a5');
closeBtn.on('touchstart', function() {
    closeBtn.find("img").attr("src", "images/closebtnhover002x.png");
    $('.dv15 .a4,.dv15 .a5').css("visibility", "hidden");
})
closeBtn.on('touchend', function() {
    closeBtn.find("img").attr("src", "images/closebtn002x.png");
})

TweenMax.from('.dv1 .a1', 2, {
    opacity: "0"
})

TweenMax.from('.dv1 .a2', 2, {
    delay: .5,
    opacity: 0
})

TweenMax.from('.dv1 .a3', 1, {
    delay: .8,
    opacity: 0,
    x: 200
})

TweenMax.from('.dv1 .a4,.dv2', 1, {
    delay: 1.8,
    opacity: 0
})

