// Light/dark mode. Loaded in <head> so the saved choice applies before the page paints.
(function () {
  var root = document.documentElement;
  var systemDark = window.matchMedia("(prefers-color-scheme: dark)");
  var chosen = null;

  try {
    var saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") chosen = saved;
  } catch (e) {}

  function current() {
    return chosen || (systemDark.matches ? "dark" : "light");
  }

  function apply() {
    var theme = current();
    root.setAttribute("data-theme", theme);

    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      var label = "Switch to " + (theme === "dark" ? "light" : "dark") + " mode";
      toggle.setAttribute("aria-label", label);
      toggle.title = label;
    }
  }

  apply();

  // Follow the system setting until the visitor picks a mode themselves.
  systemDark.addEventListener("change", apply);

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (!toggle) return;

    toggle.parentNode.hidden = false;
    apply();

    toggle.addEventListener("click", function () {
      chosen = current() === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", chosen);
      } catch (e) {}
      apply();
    });
  });
})();
