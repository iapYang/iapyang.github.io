//xxx
var $video, vp;
var $videoContainer = $('.video-container');

var L_radioshack = $('.leavebehind .radioshack');
var L_title = $('.leavebehind .title');
var L_phone = $('.leavebehind .phone');
var L_logo = $('.leavebehind .logo-container');
var L_learnMore = $('.leavebehind .learnMore');
var L_at = $('.leavebehind .at');
var L_sp = $('.leavebehind .sp');
var L_vr = $('.leavebehind .vr');
var L_outter = $('.leavebehind .outter');

var A_radioshack = $('.interactive .radioshack');
var A_phone = $('.interactive .phone-container');
var A_title1 = $('.interactive .title div:nth-child(1)');
var A_title2 = $('.interactive .title div:nth-child(2)');
var A_title3 = $('.interactive .title div:nth-child(3)');
var A_logo1 = $('.interactive .logo-container div:nth-child(1)');
var A_logo2 = $('.interactive .logo-container div:nth-child(2)');
var A_at = $('.interactive .at');
var A_sp = $('.interactive .sp');
var A_vr = $('.interactive .vr');
var A_learnMore = $('.interactive .learnMore');
var A_outter = $('.interactive .opc');

var content = $('.interactive .content');

var counter;

UT_CM.$ad_choices = $('#ad_choices');
UT_CM.closeBtnClass = 'rotate-ani'; //rotate-ani & opacity-ani & none
UT_CM.ignoreIDArray = ['ut_open', 'ut_close', 'ad_choices'];
UT_CM.ignoreWraps = '#ut_open, #ut_close, .utvp_controls, .placeholder';





UT_CM.trackingList = [
    ['COLLAPSED_BACKGROUND', 1, '.leavebehind .bg'],
    ['EXPANDED_BACKGROUND', 5, '.interactive .bg'],
    ['COLLAPSED_LOGO',2,'.leavebehind .radioshack'],
    ['COLLAPSED_CTA',3,'.leavebehind .learnMore'],
    ['COLLAPSED_PRODUCT',4,'.leavebehind .phone'],
    ['EXPANDED_LOGO', 6, '.interactive .radioshack'],
    ['EXPANDED_CTA', 7, '.interactive .learnMore'],
    ['EXPANDED_PRODUCT', 8, '.interactive .phone-container']
];


function expandAnimation1() {
    TweenMax.fromTo(A_radioshack, 1, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    });
    TweenMax.fromTo(A_phone, 1, {
        opacity: 0,
        rotationY: 45,
    }, {
        opacity: 1,
        rotationY: 0,
        delay: 1.5
    });
    TweenMax.fromTo(A_title1, 0.5, {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        delay: 2,
        x: 0
    });
    TweenMax.fromTo(A_title2, 0.5, {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        delay: 2.1,
        x: 0
    });
    TweenMax.fromTo(A_title3, 0.5, {
        opacity: 0,
        x: -50
    }, {
        opacity: 1,
        delay: 2.2,
        x: 0
    });
    TweenMax.fromTo(A_logo1, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.4,
    });
    TweenMax.fromTo(A_logo2, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.3,
    });
    TweenMax.fromTo(A_learnMore, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.5,
    });
    TweenMax.fromTo(A_at, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.6,
    });
    TweenMax.fromTo(A_sp, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.6,
    });
    TweenMax.fromTo(A_vr, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.6,
    });
}

function expandAnimation2() {
    TweenMax.fromTo(A_radioshack, 1, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    });
    TweenMax.fromTo(A_title1, 0.5, {
        opacity: 0,
        y: -0.5
    }, {
        opacity: 1,
        delay: 1.5,
        y: 0
    });
    TweenMax.fromTo(A_title2, 0.5, {
        opacity: 0,
        y: -0.5
    }, {
        opacity: 1,
        delay: 1.6,
        y: 0
    });
    TweenMax.fromTo(A_title3, 0.5, {
        opacity: 0,
        y: -0.5
    }, {
        opacity: 1,
        delay: 1.7,
        y: 0
    });
    TweenMax.fromTo(A_phone, 1, {
        opacity: 0,
        rotationY: 45,
    }, {
        opacity: 1,
        rotationY: 0,
        delay: 2
    });
    TweenMax.fromTo(A_logo1, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.3,
    });
    TweenMax.fromTo(A_logo2, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.1,
    });
    TweenMax.fromTo(A_learnMore, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.4,
    });
    TweenMax.fromTo(A_at, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.5,
    });
    TweenMax.fromTo(A_sp, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.6,
    });
    TweenMax.fromTo(A_vr, 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        delay: 2.7,
    });
}

function collapseAnimation() {
    TweenMax.fromTo(L_phone, 0.5, {
        opacity: 0,
        y: 10
    }, {
        opacity: 1,
        y: 0,
        delay: 0.5
    });
    TweenMax.fromTo(L_radioshack, 3, {
        opacity: 0,
    }, {
        opacity: 1
    });
    TweenMax.fromTo(L_title, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1
    });
    TweenMax.fromTo(L_logo, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.1
    });
    TweenMax.fromTo(L_learnMore, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.2
    });
    TweenMax.fromTo(L_at, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.2
    });
    TweenMax.fromTo(L_sp, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.3
    });
    TweenMax.fromTo(L_vr, 0.5, {
        opacity: 0
    }, {
        opacity: 1,
        delay: 1.4
    });
}

function Phone_galary() {
    //1+2
    TweenMax.fromTo('.content1', 0.5, {
        x: "0%"
    }, {
        x: "-100%",
        delay: 3
    });
    TweenMax.fromTo('.content2', 0.5, {
        x: "0%",
        width:"110%"
    }, {
        x: "-100%",
        width:"100%",
        delay: 3
    });
    //2+3
    TweenMax.fromTo('.content3', 0.5, {
        x: "0%",
        width:"110%"
    }, {
        x: "-100%",
        width:"100%",
        delay: 4.5
    });
    TweenMax.fromTo('.content2', 0.5, {

    }, {
        x: "-200%",
        delay: 4.5
    });
    //3+4
    TweenMax.fromTo('.content4', 0.5, {
        x: "0%",
        width:"110%"
    }, {
        x: "-100%",
        width:"100%",
        delay: 6
    });
    TweenMax.fromTo('.content3', 0.5, {

    }, {
        x: "-200%",
        delay: 6
    });
    //4+5
    TweenMax.fromTo('.content4', 0.5, {

    }, {
        x: "-200%",
        delay: 7.5
    });
    TweenMax.fromTo('.content5', 0.5, {
        x: "0%",
        width:"110%"
    }, {
        x: "-100%",
        width:"100%",
        delay: 7.5
    });
}

function Phone_galary_reset() {
    TweenMax.fromTo('.content', 0.5, {

    }, {
        x: "0%"
    });
}

UT_CM.openAnimation = function() {
    // setInterval(function() {
    //     undertone.creative.trackEvent("event", "id");
    // }, 5000);

    //do opening animating
    initVideo();
    setTimeout(fixVideo, 10);
    var choice = ($window.width() > 550);
    if (choice) {
        expandAnimation1();
    } else {
        expandAnimation2();
    }
    Phone_galary();
};




UT_CM.expandAd = function() {
    //console.log('=== expandAd ===');
    TweenMax.killTweensOf(A_outter);
    TweenMax.killTweensOf(L_outter);
    Phone_galary_reset();
    A_outter.css('opacity', 0);
    var choice = ($window.width() > 550);
    if (choice) {
        expandAnimation1();
    } else {
        expandAnimation2();
    }

    Phone_galary();
};

UT_CM.afterExpandAd = function() {
    //console.log('=== afterExpandAd ===');

};

UT_CM.collapseAd = function() {
    //console.log('=== collapseAd ===');

    TweenMax.killTweensOf(A_outter);
    TweenMax.killTweensOf(L_outter);
    TweenMax.killTweensOf('.content');
    L_outter.css('opacity', 0);
    collapseAnimation();

};

UT_CM.afterCollapseAd = function() {
    //console.log('=== afterCollapseAd ===');
};

UT_CM.resizeAd = function(width, height) {
    //console.log(width, height);
    $video && fixVideo();
    if (platform.isMobile && !platform.isiPhone && width > height && vp) {
        vp.pause();
    }
};


/* Extended  UTCommonModule End*/

function initVideo() {

    var sourceMp4 = platform.isMobile ? 'video/videomobile.mp4' : 'video/video.mp4';

    var startCover = 'video/firstFrame.jpg';
    var endCover = 'video/endFrame.jpg';
    var config = {
        aspectRatio: '16:9',
        source_mp4: sourceMp4,
        slate: startCover,
        endSlate: endCover,
        displayHidden: false,
        preload: 'none',
        clickID: 7
    };

    if ($('#VIDEO_PLAYER').data('ut_videoplayer')) {
        $('#VIDEO_PLAYER').data('ut_videoplayer').videoPlayer._instances['VIDEO_PLAYER'].params.clickID = config.clickID;
    }


    vp = $('.video').attr('id', 'VIDEO_PLAYER').ut_videoplayer(config);

    // $('video').on('play pause', function() {
    //     $('.utvp_controls').css('-webkit-transform', 'translate3d(0,0,0)');
    // });
    $video = $('video');

    $video.on('ended', function() {
        $html.addClass('videoComplete');
    });
    $video.on('play', function() {
        $html.removeClass('videoComplete');
        fixVideo();
    });
}

function fixVideo() {
    if (!platform.isDesktop) {
        var h = $videoContainer.width() * 9 / 16 - 0;
        $videoContainer.height(h);
        if (platform.isiPhone) {
            $video.css({
                'height': Math.ceil(h) + 'px!important',
                '-webkit-transform': 'scale(1.001)'
            });
        }
        if (platform.isTablet) {
            h = h + (h > 300 ? 2 : 1);
            $video.css('height', h + 'px!important');
        }
    } else {
        var h = $video.height();
        platform.isIE10 && (h = h - 2);
        $videoContainer.height(h);
    }
}

UT_CM.pictureLoad();
UT_CM.registerEvent();
UT_CM.checkPlatform();
UT_CM.fixAdChoices();
UT_CM.updateUI();


// keep the unused css rules
function tmp() {
    var tmp = {};
    tmp.className = "video";
    tmp.className = "ul, ol, li";
    tmp.className = ".clear_both";
    tmp.className = ".clearfix:after";
    tmp.className = ".clearfix";
    tmp.className = "* html .clearfix";
    tmp.className = "a";
    tmp.className = "a:active, a:focus, input";
    tmp.className = ".leavebehind .icon";
    tmp.className = "#ut_close.rotate-ani, #ut_open.rotate-ani";
    tmp.className = "#ut_close.opacity-ani, #ut_open.opacity-ani";
    tmp.className = "undefined";
    tmp.className = ".utvp_player_frame, .utvp_video, .utvp_slate, .utvp_cover, .utvp_play_toggle_wrapper_insert";
    tmp.className = ".utvp_player_frame, object";
    tmp.className = ".utvp_play_toggle";
    tmp.className = ".utvp_player_frame, .utvp_video";
    tmp.className = "table";
    tmp.className = ".utvp_time_current, .utvp_time_duration";
    tmp.className = ".utvp_volume_slider";
    tmp.className = ".utvp_player_frame";
    tmp.className = ".utvp_controls, .picture-holder, .utvp_play_toggle, .utvp_buffer_wrapper, .utvp_slate, .utvp_player_frame";
    tmp.className = ".icon-play-toggle:before";
    tmp.className = ".utvp_play_toggle_wrapper:hover .icon-play-toggle:before";
    tmp.className = ".utvp_control_bar_buttons";
    tmp.className = ".utvp_control_bar_buttons:hover";
    tmp.className = ".utvp_progress_down";
    tmp.className = ".utvp_progress_current";
    tmp.className = ".btn-container";
    tmp.className = ".btn-container .normal";
    tmp.className = ".btn-container .hover";
    tmp.className = ".preload img";
    tmp.className = "#ad_choices";
    // tmp.className = "normal";
}
