function on_scroll() {
    var distanceY = document.getElementById("content_wrapper").scrollTop;
    var shrinkOn = 150;
    var header = document.querySelector("header");
    var image = document.getElementById("nav_logo");
    if (distanceY > shrinkOn) {
        classie.add(header, "shrink");
    } else {
        if (classie.has(header,"shrink")) {
            classie.remove(header,"shrink");
        }
    }
}
