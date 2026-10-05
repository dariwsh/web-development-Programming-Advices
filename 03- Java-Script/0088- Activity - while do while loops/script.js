// ==========================================
// Lesson 091: Activity - while do while loops
// ==========================================

console.log("=== Lesson 091: Activity - while do while loops ===");
console.log("=========== ✏️ Exercise 1 ============");
let i = 5;
while(i>=1)
{
    console.log(i);
    i--;
}
console.log("=========== ✏️ Exercise 2 ============");
let num;
while (num !== 7) {
  num = Math.floor(Math.random() * 10);
  console.log("Generated:", num);
}
console.log("=========== ✏️ Exercise 3 ============");
let input;
let simulated = ["hi", "hello", "exit"];
let index = 0;

do{
    input = simulated[index];
    console.log(`User input: ${input}`);
    index++;
}while(input !== "exit");

console.log("=========== ✏️ Exercise 4 ============");
let c = 1
do{
    console.log(`Counter is :: ${c}`);
    c++;
}while(c<=3);