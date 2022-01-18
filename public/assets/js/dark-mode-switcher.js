import cash from "cash-dom";

// Set initial dark-mode
let darkMode = localStorage.getItem("darkmode");
if (darkMode === undefined) {
  localStorage.setItem("darkmode", "false");
} else {
  if (darkMode === "true") {
    cash("#dark-mode-switcher").attr("checked", true);
    cash("html").addClass("dark");
  } else {
    cash("#dark-mode-switcher").removeAttr("checked");
    cash("html").removeClass("dark");
  }
}

cash("#dark-mode-switcher").on("change", function () {
  let darkMode = localStorage.getItem("darkmode");
  if (darkMode === "false") {
    localStorage.setItem("darkmode", "true");
    cash("html").addClass("dark");
  } else {
    localStorage.setItem("darkmode", "false");
    cash("html").removeClass("dark");
  }
});
