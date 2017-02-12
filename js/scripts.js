// On document ready
(function() {


    var smoothScrolls = document.getElementsByClassName('smooth-scroll');
    for(var s in smoothScrolls) {
        var ss = smoothScrolls[s];
        ss.addEventListener('click', function(e) {
            e.preventDefault();

            var href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }


})();