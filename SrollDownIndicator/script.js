$(window).scroll(function(){
    var scroll = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height(),
            value = (scroll / (dh - wh)) * 100;
            $('#progress').css('width', value + '%');
});