// ==========================================
// Lesson 033: JavaScript Scrolling Methods - scrollX scrollY scrollTo scrollBy
// ==========================================

console.log(
  "=== Lesson 033: JavaScript Scrolling Methods - scrollX scrollY scrollTo scrollBy ===",
);
console.log("Ready for practice!");

function showScroll() {
  document.getElementById("output").textContent =
    `current scroll : X = ${window.scrollX} , y = ${window.scrollY}`;
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function scrollDown() {
  window.scrollBy({ top: 5300, behavior: "smooth" });
}

function scrollSmooth() {
  // Smoothly scroll to the bottom
  window.scrollTo({
    top:document.body.scrollHeight,
    behavior:"smooth",
  });
}
