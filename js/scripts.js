// On document ready
(function() {

    var smoothScrolls = document.getElementsByClassName('smooth-scroll');
    for(var i = 0; i < smoothScrolls.length; i++) {
        var ss = smoothScrolls[i];
        ss.addEventListener('click', function(e) {
            e.preventDefault();

            var href = this.getAttribute('href');
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    };



    var didScroll = false;
    window.addEventListener('scroll', function() {
        didScroll = true;
    });

    var rsvpButton = document.getElementById('rsvp-button');
    var detailsSection = document.getElementById('wedding-details');

    setInterval(function() {
        if(didScroll) {
            didScroll = false;
            var scrollTop = window.pageYOffset;
            console.log(scrollTop);
            console.log(detailsSection.offsetTop);
            switch(true) {
                case (scrollTop >= 0 && scrollTop < detailsSection.offsetTop):
                    removeClass('text-white', rsvpButton);
                    addClass('text-purple', rsvpButton);
                    break;
                case (scrollTop >= detailsSection.offsetTop):
                    removeClass('text-purple', rsvpButton);
                    addClass('text-white', rsvpButton);
                    break;
            }
        }
    }, 50);


    function addClass(theClass, element) {
        var classes = element.className.split(/\s+/);
        if(classes.indexOf(theClass) < 0) {
            classes.push(theClass);
        }
        element.className = classes.join(' ');
        return element;
    }

    function removeClass(theClass, element) {
        var classes = element.className.split(/\s+/);
        var index = classList.indexOf(theClass);

        if(classes.indexOf(theClass) >= 0) {

        }

        classes.replace(theClass, '');
        element.className = classes;

        return element;
    }

    function recursivelyRemoveClass(theClass, index, classList) {

    }


})();