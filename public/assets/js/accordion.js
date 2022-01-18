import Velocity from "velocity-animate";

(function (cash) {
  // Show accordion content
  cash("body").on("click", ".accordion-button", function () {
    // Close active accordion
    Velocity(
      cash(this).closest(".accordion").find(".accordion-collapse"),
      "slideUp",
      {
        duration: 300,
        complete: function (el) {
          cash(el).removeClass("show");
          cash(el)
            .closest(".accordion-item")
            .find(".accordion-button")
            .addClass("collapsed")
            .attr("aria-expanded", false);
        },
      }
    );

    // Set active accordion
    if (!cash(this).hasClass("collapsed")) {
      Velocity(
        cash(this).closest(".accordion-item").find(".accordion-collapse"),
        "slideUp",
        {
          duration: 300,
          complete: function (el) {
            cash(el).removeClass("show");
            cash(el)
              .closest(".accordion-item")
              .find(".accordion-button")
              .addClass("collapsed")
              .attr("aria-expanded", false);
          },
        }
      );
    } else {
      Velocity(
        cash(this).closest(".accordion-item").find(".accordion-collapse"),
        "slideDown",
        {
          duration: 300,
          complete: function (el) {
            cash(el).addClass("show");
            cash(el)
              .closest(".accordion-item")
              .find(".accordion-button")
              .removeClass("collapsed")
              .attr("aria-expanded", true);
          },
        }
      );
    }
  });
})(cash);
