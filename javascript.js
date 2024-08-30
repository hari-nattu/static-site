document.addEventListener('scroll', function () {
    var scrollTop = document.querySelector('.parallax-container').scrollTop;
    var parallaxImages = document.querySelectorAll('.parallax-image');

    parallaxImages.forEach(function (image) {
        var speed = image.getAttribute('data-speed'); // Use data-speed attribute for different speeds
        image.style.transform = 'translateY(' + scrollTop * speed + 'px)';
    });
});
