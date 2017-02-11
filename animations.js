$(window).scroll(function () {
    var winTop = $(window).scrollTop();

    var pos1 = $(".slideanim-1").offset().top;
    if (pos1 < winTop + 600) {
        $(".slideanim-1").addClass("slide-1");
    }

    var pos2 = $(".slideanim-2").offset().top;
    if (pos2 < winTop + 600) {
        $(".slideanim-2").addClass("slide-2");
    }

    $(".slideanim-3").each(function () {
        var pos = $(this).offset().top;
        if (pos < winTop + 600) {
            $(this).addClass("slide-3");
        }
    });

    $(".slideanim-7").each(function () {
        var pos = $(this).offset().top;
        if (pos < winTop + 600) {
            $(this).addClass("slide-7");
        }
    });

    $(".slideanim-8").each(function () {
        var pos = $(this).offset().top;
        if (pos < winTop + 600) {
            $(this).addClass("slide-8");
        }
    });

    var pos9 = $(".slideanim-9").offset().top;
    if (pos9 < winTop + 200) {
        $(".slideanim-9").addClass("slide-9");
    }

    var pos10 = $(".slideanim-10").offset().top;
    if (pos10 < winTop + 900) {
        $(".slideanim-10").addClass("slide-10");
    }

    var pos11 = $(".slideanim-11").offset().top;
    if (pos11 < winTop + 900) {
        $(".slideanim-11").addClass("slide-11");
    }
});