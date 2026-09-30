// ==========================================
// Lesson 028: Timing Functions - setTimeout clearTimeout setInterval clearInterval
// ==========================================

console.log(
  "=== Lesson 028: Timing Functions - setTimeout clearTimeout setInterval clearInterval ===",
);
console.log("Ready for practice!");

function startTimer() {
  let timeleft = 5;
  let koko = document.getElementById("koko");

  koko.textContent = timeleft;
  let countdown = setInterval(() => {
    timeleft--;
    koko.textContent = timeleft;
    if (timeleft === 0) {
      clearInterval(countdown);
      alert("Time's up!");
    }
  }, 500);
}
