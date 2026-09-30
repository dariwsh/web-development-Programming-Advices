// ==========================================
// Lesson 072: Activity - Logical Operators and Short-Circuiting
// ==========================================

console.log("=== ex1 ===");
console.log("Ready for practice!");
console.log(0 && "Hello"); // 0
console.log("Hi" && 100);  // `00
console.log(null && "Done"); // null
console.log(true && false); // false

console.log("=== ex2 ===");
console.log("" || "Fallback"); // falsback
console.log(5 || 10); // 5
console.log(undefined || "X"); // x 
console.log(false || 0);//0
console.log("=== ex3 ===");
let userName = "";
let displayName = userName || "Guest" // Use ||
console.log(displayName);
console.log("=== ex4 ===");


let user = {
  speak() { console.log("Hello!"); }
};

user.speak && user.speak();  // FIX THIS — make it work safely

console.log("=== ex5 ===");

console.log(!!"Text");// true
console.log(!!0); // false
console.log(!!undefined); // false
console.log(!!" "); // true
console.log("=== ex6 ===");
