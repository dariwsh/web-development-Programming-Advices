// ==========================================
// Lesson 075: Activity - String Operators and Template Literals
// ==========================================

console.log(
    "=== Lesson 075: Activity - String Operators and Template Literals ===",
);
console.log("Ready for practice!");

// ================== Re 1 ========================
let firstName = "Ahmed";
let lastName = "Dariwhs";
let age = 22;
let city = "Alex";
// ================== Re 2 ========================
let sentence1 =
    "My name is" +
    " " +
    firstName +
    " " +
    lastName +
    " and I am " +
    age +
    " years old from " +
    city;
console.log("sentence1 ->", sentence1);
// ================== Re 3========================
let sentence2 = `My name is ${firstName} ${lastName} and I am ${age} years old from ${city}.`;
console.log("sentence2 ->", sentence2);

// ================== Re 4 ========================

let info = `
    Name: ${firstName}
    Age: ${age}
City: ${city}
`;
console.log("User info -> " , info);
// ================== Re 5 ========================
let name = "Mohammed";
let age2 = 30;

let html = `
<div>
  <h2>Name: ${name}</h2>
  <p>Age: ${age2}</p>
</div>
`;
console.log(html);
