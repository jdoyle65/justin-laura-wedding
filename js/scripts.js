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
            switch(true) {
                // Any cases where button is now on white
                case (scrollTop >= 0 && scrollTop < detailsSection.offsetTop):
                    removeClass('rsvp-button-dark', rsvpButton);
                    addClass('rsvp-button-light', rsvpButton);
                    break;
                // Any cases where button is now on purple
                case (scrollTop >= detailsSection.offsetTop):
                    removeClass('rsvp-button-light', rsvpButton);
                    addClass('rsvp-button-dark', rsvpButton);
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
        var index = classes.indexOf(theClass);

        if(classes.indexOf(theClass) >= 0) {
            classes = recursivelyRemoveClass(theClass, index, classes);
        }

        element.className = classes.join(' ');

        return element;
    }

    function recursivelyRemoveClass(theClass, index, classList) {

        classList = classList
            .splice(0, index)
            .concat(classList.splice(index + 1, classList.length));

        var newIndex = classList.indexOf(theClass);
        if(newIndex >= 0) {
            return recursivelyRemoveClass(theClass, newIndex, classList);
        } else {
            return classList;
        }
    }


})();