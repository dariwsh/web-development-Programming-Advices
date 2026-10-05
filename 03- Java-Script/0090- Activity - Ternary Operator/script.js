// ==========================================
// Lesson 093: Activity - Ternary Operator
// ==========================================

console.log("=== Lesson 093: Activity - Ternary Operator ===");
console.log("Ready for practice!");
console.log("=========== ✏️ Exercise 1 ============");
let number = 5;
let result = (number >0) ? "Positive" : "Negative";
console.log(`The number ${number} is ${result}.`);


console.log("=========== ✏️ Exercise 2 ============");
let loggedIn = true;
console.log(`user is ${loggedIn ? "Welcome" : "not logged in"}.`);

console.log("=========== ✏️ Exercise 3 ============");

let score = 55;
let status = score >= 50 ? "Pass" : "Fail";
console.log("Exam status →", status);

console.log("=========== ✏️ Exercise 4 ============");


let name = "Mohammed";
let result2 =(name.length < 7 ) ? "Short" : "Long";
console.log(result2);

console.log("=========== ✏️ Exercise 5 ============");

let age = 20;
let result3 = (age < 13) ? "Child" : 
(age < 20) ? "Teen": "Adult";
console.log(`The person is ${result3}.`);