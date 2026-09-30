// ==========================================
// Lesson 084: Activity - switch
// ==========================================

console.log("=== Lesson 084: Activity - switch ===");
console.log("Ready for practice!");
let day = 6;
switch (day) {
case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");

}
let role = "admin";
switch(role)
{
    case "admin":console.log("Full access");break;
    case "editor": console.log("Edit access"); break;
    case "viewer": console.log("Read only"); break;
    default: console.log("No access");
}

let light = "yellow";
switch(light)
{
    case "red": console.log("Stop"); break;
  case "yellow": console.log("Get ready"); break;
  case "green": console.log("Go"); break;
  default: console.log("Invalid signal");
}
 let month=7;


   
switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;

  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;

  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;

  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;

  default:
    console.log("Invalid month");
}

let country = "USA";
switch(country)
{
    case "USA" : console.log("$5");break;
    case "Canada " : console.log("$10");break;
    case "UK " : console.log("$15");break;
    default : console.log("$20");
}