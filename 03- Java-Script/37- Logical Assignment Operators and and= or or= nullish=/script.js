// ==========================================
// Lesson 076: Logical Assignment Operators and and= or or= nullish=
// ==========================================

// console.log("=== Lesson 076: Logical Assignment Operators and and= or or= nullish= ===");
// console.log("Ready for practice!");
// let username1 = "adda";
// username1 ||= "Guest";

// console.log(username); // "Guest"
//  let username = "";

// let result = username || "Guest";

// console.log(result);
// console.log(username);

// let isLoggedIn =false; // stop on first false oand return false or value false

// let result = isLoggedIn && "Welcome";

// console.log(result);

let isLoggedIn = false;

isLoggedIn &&= "Welcome";



console.log(isLoggedIn);



let theme = undefined; // or null

theme ??= "dark";

console.log(theme);

let volume = 0;

volume ||= 5;  // ❌ overwrites
volume ??= 5;  // ✅ keeps 0

console.log(volume);