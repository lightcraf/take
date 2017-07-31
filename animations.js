$(document).ready(function () {
    $(window).on("scroll", throttle(animatePage, 100));
});

function throttle(fn, threshhold, scope) {
    threshhold || (threshhold = 250);
    var last,
        deferTimer;
    return function () {
        var context = scope || this;

        var now = +new Date,
            args = arguments;
        if (last && now < last + threshhold) {
            // hold on to it
            clearTimeout(deferTimer);
            deferTimer = setTimeout(function () {
                last = now;
                fn.apply(context, args);
            }, threshhold);
        } else {
            last = now;
            fn.apply(context, args);
        }
    };
}

function animatePage() {
    var verticalPosition = $(window).scrollTop();

    var pos1 = $(".anim-slideInUp").offset().top;
    if (pos1 < verticalPosition + 600) {
        $(".anim-slideInUp").addClass("slideInUp");
    }

    var pos2 = $(".anim-slideInRight").offset().top;
    if (pos2 < verticalPosition + 600) {
        $(".anim-slideInRight").addClass("slideInRight");
    }

    $(".anim-rollIn").each(function () {
        var pos = $(this).offset().top;
        if (pos < verticalPosition + 600) {
            $(this).addClass("rollIn");
        }
    });

    $(".anim-rollFade").each(function () {
        var pos = $(this).offset().top;
        if (pos < verticalPosition + 600) {
            $(this).addClass("rollFade");
        }
    });

    $(".anim-rotateY").each(function () {
        var pos = $(this).offset().top;
        if (pos < verticalPosition + 600) {
            $(this).addClass("rotateY");
        }
    });

    var pos3 = $(".anim-rotateX").offset().top;
    if (pos3 < verticalPosition + 200) {
        $(".anim-rotateX").addClass("rotateX");
    }

    var pos4 = $(".anim-zoomIn").offset().top;
    if (pos4 < verticalPosition + 900) {
        $(".anim-zoomIn").addClass("zoomIn");
    }

    var pos5 = $(".anim-bounceInDown").offset().top;
    if (pos5 < verticalPosition + 800) {
        $(".anim-bounceInDown").addClass("bounceInDown");
    }
}
