// Tapería El Monte — interacciones
(function () {
  "use strict";

  var topbar = document.querySelector(".topbar");
  var onScroll = function () {
    if (window.scrollY > 30) topbar.classList.add("scrolled");
    else topbar.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Nav overlay a pantalla completa
  var menuBtn = document.querySelector(".menu-btn");
  var navClose = document.querySelector(".nav-close");
  var navLinks = document.querySelectorAll(".nav-overlay-links a");
  if (menuBtn) menuBtn.addEventListener("click", function () { document.body.classList.add("nav-open"); });
  if (navClose) navClose.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
  navLinks.forEach(function (a) {
    a.addEventListener("click", function () { document.body.classList.remove("nav-open"); });
  });

  // Pestañas de la pizarra (carta)
  var tabs = document.querySelectorAll(".board-tab");
  var panels = document.querySelectorAll(".board-panel");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var target = tab.getAttribute("data-target");
      tabs.forEach(function (t) { t.classList.remove("active"); });
      panels.forEach(function (p) { p.classList.remove("active"); });
      tab.classList.add("active");
      document.getElementById(target).classList.add("active");
    });
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  // Banner de cookies
  var cookieBanner = document.querySelector(".cookie-banner");
  var COOKIE_KEY = "elmonte_cookie_consent";
  if (cookieBanner) {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(function () { cookieBanner.classList.add("show"); }, 700);
    }
    cookieBanner.querySelectorAll("[data-cookie]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(COOKIE_KEY, btn.getAttribute("data-cookie"));
        cookieBanner.classList.remove("show");
      });
    });
  }

  // Año en el footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
