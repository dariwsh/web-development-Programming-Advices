// ==========================================
// Lesson 077: Activity - Logical Assignment Operators
// ==========================================

// console.log("=== Lesson 077: Activity - Logical Assignment Operators ===");
// console.log("Ready for practice!");
// let x = "";
// let b = 0 ; 
// let c = null;
// let d = "Hello";
// // x falsy x = 5;
// x ||= 5;
// console.log(x);
// // x  = 5 if truey if x = 112
// x &&= 112;
// console.log(x);
// // x = 122 لزم يكون unll undefine "" 0 علشان يتغي رالمحتوى بالجديد
// x ??= 100;
// console.log(x);

// b ||= "HI";
// console.log(b);

// b &&= "jj";
// console.log(b);


// b ??= "jowe";
// console.log(b);

// c ??= "dark";
// console.log(c);


let a = "";
let b = 0;
let c = null;
let d = "Hello";

a ||= "Default";   // replaced
b ||= 5;           // replaced (0 is falsy)
c ??= "Fallback";  // replaced
d &&= "Updated";   // replaced

console.log(a); // "Default"
console.log(b); // 5
console.log(c); // "Fallback"
console.log(d); // "Updated"