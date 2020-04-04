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
// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});
