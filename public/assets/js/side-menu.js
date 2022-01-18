(function ($) {
    "use strict";

    // Side Menu
    cash(".side-menu__content__link").on("click", function () {
        let content = cash(this).data("content");
        if (content !== undefined) {
            // Remove active class
            cash(".side-content").removeClass("side-content--active");
            cash(".side-menu__content__link").removeClass(
                "side-menu__content__link--active"
            );

            // Set active class
            cash(this).addClass("side-menu__content__link--active");
            cash(".app").removeClass("app--backdrop");
            cash(".side-menu").addClass("hidden");
            cash(`[data-content=${content}]`).each(function () {
                if (cash(this).hasClass("side-content")) {
                    cash(this).addClass("side-content--active");
                }
            });
        }
    });
})(cash);
