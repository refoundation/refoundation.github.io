(function() {

    function hideInfo(el, info) {
        return function() {
            var caption = el.querySelector('figcaption');
            info.className = "";
            caption.className = "";
            caption.onclick = null;
            info.onclick = showInfo(el, info);
        };
    }

    function showInfo(el, info) {
        return function() {
            var caption = el.querySelector('figcaption');
            info.className = "active";
            caption.className = "active";
            info.onclick = null;
            caption.onclick = hideInfo(el, info);
        };
    }

    function handleInfo(el) {
        var span = document.createElement('span'),
            infoBubble = document.createTextNode("🛈");
        span.appendChild(infoBubble);
        span.onclick = showInfo(el, span);
        el.appendChild(span);

    }

    function initialize() {
        document.querySelectorAll('.captioned').forEach(handleInfo);
    }

    this.Figure = {
        init: initialize
    };
}).call(window);
