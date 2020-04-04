; (function () {
    function DropMenu() { }

    DropMenu.prototype = {
        init: function () {
            document.querySelector('.drop-menu ul').style.display = 'none';
            document.querySelector('.drop-menu > a').addEventListener('click', this.toggle, false);
        },
        toggle: function () {
            this.parentNode.classList.toggle('active');
        }
    };

    var dropMenu = new DropMenu();
    dropMenu.init();
})();
$('#product-gallery-super').children().click(function (e) {
    e.preventDefault();
    var prodImg = $(this).attr('data-image');
    var imgSrc = $(this).children().attr('src')
    var vidCheck = false;
    var mainImg = $('.main-image');

    if (imgSrc != 'http://yi.yoga/images/cs.jpg') {

        $(this).addClass("active-thumbnail").siblings().removeClass("active-thumbnail");

        if ($(this).attr('id') == 'video') {
            $('.main-image').hide();

            if (!$('.product-video').hasClass('product-video')) {

                var videoLink = $(this).attr('href');
                var videoImg = $(this).find('img').attr('src');

                var video = '<div class="video-container"> <video class="flat-video product-video" bgcolor="#FFFFFF" id="mainVideo" poster="' + videoImg + '" autoplay autobuffer width="100px" height="100px"> <source src="' + videoLink + '"> <object type="application/x-shockwave-flash" data="https://vjs.zencdn.net/c/video-js.swf" width="100%" height="auto"> <param name="allowfullscreen" value="false"> <param name="allowscriptaccess" value="always"> <param name="flashvars" value="file=' + videoLink + '"> <!--[if IE]><param name="movie" value="https://vjs.zencdn.net/c/video-js.swf"><![endif]--> <img src="' + videoImg + '" width="100%" height="auto" alt="Video"></object> </video>  <span class="playPause icon-play off"></span> <div class="controls-bar off"> <div class="duration"> <div class="duration-amount"></div> </div> </div> <div class="top-controls-bar off"> <div class="info"> </div> </div> </div>';

                $('.container').prepend(video);

                // START VIDEO FUNCTION videoInitate();

            }

        } else {
            mainDestroy()

            $('.video-container').remove();

            $('.main-image').show();
            $('.main-image').attr('src', prodImg);

            $('.product-zoom').elevateZoom({
                cursor: 'pointer',
                zoomType: "window",
                zoomWindowFadeIn: 500,
                zoomWindowFadeOut: 750,
                responsive: true,
                borderSize: 1,
                borderColour: '#DDDDDD',
                lensBorder: 1,
                lensSize: 200,
                scrollZoom: false,
                zoomWindowFadeOut: 1,
            });

        }

    }

});

function mainDestroy() {
    $('.zoomContainer').remove();
    $('.product-zoom').removeData('elevateZoom');
    $('.product-zoom').removeData('zoomImage');
}
