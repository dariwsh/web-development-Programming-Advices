// ==========================================
// Lesson 088: Activity - for in for of
// ==========================================

console.log("=== Lesson 088: Activity - for in for of ===");
console.log("Ready for practice!");

console.log("==================Exercise 1 — for in loop===============");
const car = { brand: "BMW", year: 2020, color: "Black" };
for(let key in car)
{
    console.log(key + ":" , car[key]);
}
console.log("================== Exercise 2 – Print all values in an array using for…of===============");
let items = ["Pen", "Book", "Laptop"];
for(let item of items)
{
    console.log(item);
}

console.log("================== Exercise 3 – Loop through a string===============");
for(let s of "js")
{
    console.log(s);
}

console.log("================== Exercise 4 – Count how many vowels are in a string===============");
let text = "javascript";
let vowels = "aeiou";
let count = 0;
for (let char of text.toLowerCase())
{
    if(vowels.includes(char))
    {
        count++;
    }
}
console.log("Number of vowels in '" + text + "':", count);

let nums = [5, 10, 3, 7];
let total = 0;
for(let num of nums)
{
    total += num;
}
console.log("Total sum of nums array:", total);