// ==========================================
// Lesson 023: confirm - Getting User Confirmation
// ==========================================

console.log("=== Lesson 023: confirm - Getting User Confirmation ===");
console.log("Ready for practice!");


if(confirm("Do you go to google.com?"))
{
    window.location.href = "https://www.google.com";
}
else
{
    alert("You chose not to go to google.com.");
}

function leavePage() {
    if(confirm("Are you sure you want to leave this page?")) {
        window.location.href = "https://www.example.com";
    } else {
        alert("You chose to stay on this page.");
    }
}

let isSure = confirm("Do you want to delete this file?");
if (isSure) {
  alert("File deleted!");
} else {
  alert("Action canceled!");
}