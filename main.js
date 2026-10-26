/* Demo floor behaviour: the orchestrated OPEN flip, keyboard procession,
   and map-to-booth hover sync. No dependencies. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // One orchestrated moment: every OPEN badge flips together once the
  // signage face is ready (or immediately under reduced motion).
  function openFloor() {
    document.body.classList.add("floor-open");
  }
  if (reduceMotion || !document.fonts || !document.fonts.ready) {
    // Small defer so the pre-open state paints at all.
    requestAnimationFrame(openFloor);
  } else {
    document.fonts.ready.then(function () {
      requestAnimationFrame(openFloor);
    });
    // Failsafe: never leave the floor closed.
    setTimeout(openFloor, 1500);
  }

  // Keyboard procession: J / ArrowDown walk forward, K / ArrowUp walk back.
  var stops = Array.prototype.slice.call(
    document.querySelectorAll(".booth, .office")
  );
  var lobbyLink = document.querySelector(".btn-walk");

  function currentStopIndex() {
    var focusEl = document.activeElement;
    var idx = stops.indexOf(focusEl);
    if (idx !== -1) return idx;
    var best = -1;
    var scrollY = window.scrollY;
    stops.forEach(function (s, i) {
      var top = s.getBoundingClientRect().top + scrollY;
      if (top <= scrollY + window.innerHeight * 0.5) best = i;
    });
    return best;
  }

  function goTo(i) {
    if (i < 0) { lobbyLink.focus(); lobbyLink.scrollIntoView({ block: "start" }); return; }
    if (i >= stops.length) i = stops.length - 1;
    var s = stops[i];
    s.scrollIntoView({ block: "start" });
    s.focus({ preventScroll: true });
  }

  document.addEventListener("keydown", function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    var idx = currentStopIndex();
    if (e.key === "j" || e.key === "J" || e.key === "ArrowDown") {
      if (e.key === "ArrowDown" && idx === -1) return; // let arrows scroll naturally at top
      e.preventDefault();
      goTo(idx + 1);
    } else if (e.key === "k" || e.key === "K" || e.key === "ArrowUp") {
      if (e.key === "ArrowUp" && idx === -1) return;
      e.preventDefault();
      goTo(idx - 1);
    }
  });

  // Hovering a booth on the map highlights its section bay.
  var bayByHref = {};
  stops.forEach(function (s) { bayByHref["#" + s.id] = s; });
  document.querySelectorAll(".booth-link").forEach(function (link) {
    var target = bayByHref[link.getAttribute("href")];
    if (!target) return;
    link.addEventListener("mouseenter", function () {
      target.style.background = "rgba(232, 78, 15, 0.06)";
    });
    link.addEventListener("mouseleave", function () {
      target.style.background = "";
    });
  });
})();
