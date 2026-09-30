// ==========================================
// Lesson 066: Activity - Type Conversion
// ==========================================

console.log("=== Lesson 066: Activity - Type Conversion ===");
console.log("Ready for practice!");
let age = "20";
if (Number (age)  === 20) {
  console.log("Allowed");
}
let a = +"42";
let b = Number(true);
let c = parseInt(false);
let d = +"abc";
let e = +null;
console.log(Number(a)); // 42
console.log(Number(b)); // 1
console.log(Number(c)); // 0
console.log(Number(d)); // NaN
console.log(Number(e)); // 0
// truthy 


function checkValue(value)
{
  if(value )
  {
    console.log(value , "-> truthy");
    
  }
  else{
    console.log(value, "→ Falsy");
  }
}
checkValue("heelo");
checkValue("hello");
checkValue("");
checkValue(0);
checkValue(123);
checkValue(null);



console.log(5 * 2);
console.log(7 - 1);
console.log+(3 + true);

// let as = prompt("Enter a number:");
// let bsf = prompt("Enter another number:");
// console.log(string(as + bsf)); // WRONG: produces strings