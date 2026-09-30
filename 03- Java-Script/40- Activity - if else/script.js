// ==========================================
// Lesson 082: Activity - if else
// ==========================================

console.log("=== Lesson 082: Activity - if else ===");
console.log("Ready for practice!");


let num = 5;
if(num >= 0)
{
    console.log(`Number is ${num}  is postive`);
}
else if(num < 0 )
{
    console.log(`Number is ${num}  is Negiative`);
}
else
{
    console.log(`Number is ${num}  is Zero`);
}

let Age = 19;
if(Age < 13)
{
    console.log(`Age is ${Age}  is Child`);
}
else if(Age < 18)
{
    console.log(`Age is ${Age}  is Teenager`);
}
else
{ 
   console.log(`Age is ${Age}  is Adult`); 
}

let lampOn = true;
if(lampOn)
{
    console.log(`The lamp is ON`);
}
else
{
    console.log(`The lamp is OFF`);
}

let grade = 72;
if(grade >= 90)
{
    console.log("A");
}
else if(grade >= 80 )
{
    console.log("B");
}
else if(grade >= 70 )
{
    console.log("C");
}
else if(grade >= 60 )
{
    console.log("D");
}
else 
{
    console.log("F");
}

let hour = 14;
if(hour < 12 )
{
    console.log(`Good morning`);
}
else if(hour < 18)
    {
    console.log(`Good afternoon`);
}
else{
    console.log("Good evening");
}