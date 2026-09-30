// ==========================================
// Lesson 068: Activity - Arithmetic and Assignment Operators
// ==========================================

console.log("=== Lesson 068: Activity - Arithmetic and Assignment Operators ===");
console.log("Ready for practice!");


let a = 12; 
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a *b);
console.log(a / b);
console.log(a % b);


let x = 10;
console.log(x += 5);
console.log(x *= 2);
console.log(x -= 4);
console.log(x /= 2);
console.log(x **= 3);
console.log("value x :" + x);



let count = 0;
console.log(count++);
 console.log(++count);

console.log(count--);
console.log(count);


let price = 50;
let quantity = 3;

let total = price * quantity;  // 150

total -= 10;  // 140 discount

total *= 1.15; // add 15% tax = 161

console.log(total);


let num = 4;
console.log(num ** 2);

num **= 3;             
console.log(num); // 64 (cube)


let n = 27;
if(n % 2 ===0)
{
    console.log("Even");
}
else{
    console.log("odd");
}

let score = 100;
score -= 20
score /= 4
score **= 2
score %= 50
console.log(score);