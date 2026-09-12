// ==========================================
// Lesson 024: prompt - Asking for User Input
// ==========================================

console.log("=== Lesson 024: prompt - Asking for User Input ===");
console.log("Ready for practice!");


let userName = prompt("What is your name?" , "Ahmed");
alert("Hello " + userName + "! Welcome to the lesson.");
let userAge = prompt("How old are you?", "25");
if(userAge < 18) {
    alert(`your age is ${userAge}. You are not old enough to access this content.`);
} else {
    alert(`your age is ${userAge}. You are old enough to access this content.`);
}   


let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");
let total = Number(num1) + Number(num2);
alert(`The total of ${num1} and ${num2} is ${total}.`);

let user = prompt("What is your name ?", "omar");
if(user) {
    alert(`Hi ${user}, Your Age is ${userAge}`);
} else {
    alert("You didn't enter your name.");
}