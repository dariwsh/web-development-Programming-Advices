// ==========================================
// Lesson 086: Activity - for Loop
// ==========================================

console.log("=== Lesson 086: Activity - for Loop ===");
console.log("Ready for practice!");

console.log("==================Exercise 1 — Count from 1 to 20===============");
for(let i = 1; i <= 20; i++) {
    console.log(i);
}
console.log("==================Exercise 2 — Print even numbers only (2 → 20)===============");
for(let i = 2; i <= 20; i += 2) {
    console.log(i);
}
console.log("==================Exercise 3 — Sum numbers from 1 to 100===============");
let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.log("sum =", sum);


console.log("==================Exercise 4 — Count backwards 10 → 1===============");
for(let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("==================Exercise 5 — Print array elements===============");
let fruits = ["Apple", "Banana", "Orange"];
for(let i = 0; i < fruits.length; i++) {
  console.log("fruits[" + i + "] =", fruits[i]);
}

console.log("==================Exercise 6 — Find largest number in array===============");
let nums = [10, 55, 3, 99, 7];
let largest = nums[0];
for(let i = 1; i < nums.length; i++) {
    if(nums[i] > largest) {
        largest = nums[i];
    }
}
console.log("Largest number =", largest);
console.log("==================Exercise 7 — Skip number 7 using continue===============");
for(let i = 1 ; i <= 10; i++) {
    if(i === 7) {
        continue;
    }   
    console.log("Number =", i);
}

console.log("==================Exercise 8 — Stop at 5 using break===============");
for(let i = 1; i <= 10; i++) {
    if(i === 5) {
        break;
    }
    console.log(i);
}
