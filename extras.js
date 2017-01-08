(function (questions) {
    "use strict";

    for (var i = 0; i < questions.length; ++i) {
        var q = questions[i];
        q.setAttribute('data-index', i + 1);
    }

    document.documentElement.addEventListener("click", function(event) {
        if (event.target && event.target.href) {
            var id = event.target.href.substr(event.target.href.indexOf("#") + 1);
            var media = document.getElementById(id);
            media.play();
            event.preventDefault();
            return false;
        }
        return true;
    });

}(document.querySelectorAll('h2')));
