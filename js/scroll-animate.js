var animateHTML = function () {
    var elems;
    var windowHeight;
    function init() {

        elems = document.querySelectorAll('.hidden');
        windowHeight = window.innerHeight;
        addEventHandlers();
        checkPosition();
    }
    function addEventHandlers() {
        window.addEventListener('scroll', checkPosition);
        window.addEventListener('resize', init);
    }
    function checkPosition() {
        for (var i = 0; i < elems.length; i++) {
            elems[i].className = elems[i].className.replace(
                'hidden',
                'no-opacity'
            );
            var positionFromTop = elems[i].getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                elems[i].className = elems[i].className.replace(
                    'no-opacity',
                    'fade-in-element'
                );
            }
        }
    }
    return {
        init: init
    };
};
