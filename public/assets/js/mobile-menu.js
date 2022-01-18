(function (cash) {
    "use strict";

    // Mobile Menu
    cash(".mobile-menu-toggler").on("click", function () {
        if (cash(".side-menu").children().first()[0].offsetParent !== null) {
            console.log("zz");
            cash(".main").removeClass("main--backdrop");
            cash(".side-menu").addClass("hidden");
        } else {
            console.log("COK");
            cash(".main").addClass("main--backdrop");
            cash(".side-menu").removeClass("hidden");
        }
    });
})(cash);
