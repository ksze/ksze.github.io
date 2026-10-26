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

  // Procession keys: J walks forward, K walks back. Plain arrow keys keep
  // their native incremental scrolling.
  document.addEventListener("keydown", function (e) {
    if (e.defaultPrevented || e.altKey || e.ctrlKey || e.metaKey) return;
    if (e.key !== "j" && e.key !== "J" && e.key !== "k" && e.key !== "K") return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;
    var idx = currentStopIndex();
    e.preventDefault();
    if (e.key === "j" || e.key === "J") goTo(idx + 1);
    else goTo(idx - 1);
  });

  // Hovering or keyboard-focusing a booth on the map highlights its section.
  var bayByHref = {};
  stops.forEach(function (s) { bayByHref["#" + s.id] = s; });
  function tint(link, on) {
    var target = bayByHref[link.getAttribute("href")];
    if (!target) return;
    target.style.background = on ? "rgba(232, 78, 15, 0.06)" : "";
  }
  document.querySelectorAll(".booth-link").forEach(function (link) {
    link.addEventListener("mouseenter", function () { tint(link, true); });
    link.addEventListener("mouseleave", function () { tint(link, false); });
    link.addEventListener("focus", function () { tint(link, true); });
    link.addEventListener("blur", function () { tint(link, false); });
  });
})();
