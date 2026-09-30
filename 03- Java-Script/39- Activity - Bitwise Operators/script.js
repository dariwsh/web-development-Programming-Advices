// ==========================================
// Lesson 080: Activity - Bitwise Operators
// ==========================================

console.log("=== Lesson 080: Activity - Bitwise Operators ===");
console.log("Ready for practice!");

let READ  = 1;
let WRITE  = 2;
let EXECUTE  = 4;

let user = READ | WRITE;

console.log(user & READ);     // true-like
console.log(user & EXECUTE); // 0 (false-like)



user ^= EXECUTE; // toggle EXECUTE
console.log(user); // now includes EXECUTE