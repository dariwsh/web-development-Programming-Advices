// ==========================================
// Lesson 031: Event Handling - onclick vs addEventListener
// ==========================================

console.log("=== Lesson 031: Event Handling - onclick vs addEventListener ===");
console.log("Ready for practice!");

// example one syntax
function showMessage() {
  alert("Button Clicked...");
}

const but2 = document.getElementById("Button2");
but2.addEventListener("click", showMessage);

// example two multipleline
const btn3 = document.getElementById("Button3");
const btn4 = document.getElementById("Button4");

function firstOnClick() {
  console.log("First onclick handle");
}

function secondOnClick() {
  console.log("second onclick handle");
}

btn3.onclick = firstOnClick;
btn3.onclick = secondOnClick; // ⚠️ This replaces the first one

function FirstListenerhander() {
  console.log("First Listener handle");
}

function SecondListenerhander() {
  console.log("second Listener handle");
}

function updateOutput() {
  output.textContent = "✅ Button clicked — check the console!";
}

btn4.addEventListener("click", FirstListenerhander);
btn4.addEventListener("click", SecondListenerhander);
btn4.addEventListener("click", updateOutput);
