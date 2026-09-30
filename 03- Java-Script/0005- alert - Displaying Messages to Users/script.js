// ==========================================
// Lesson 022: alert - Displaying Messages to Users
// ==========================================

console.log("=== Lesson 022: alert - Displaying Messages to Users ===");
console.log("Ready for practice!");


alert("Hello, World!");
window.alert("Hello, World!"); // window is implied
let userName = "Ahmed";
alert("Welcome, " + userName + "!");
let userAge = 25;
alert("Your name is " + userName + " and you are " + userAge + " years old.");
 let total = 10 + 5;
alert("The total is " + total);

alert("Hello!\nWelcome to JavaScript Learning.");
//       //🧩 Example: Using Template Literals
 let FirstName = "Omar";
 let age = 20;
alert(`hello ${FirstName} !You are ${age} years oldl.`);
alert(`Hello ${FirstName}! You are ${age} years old.`);

      
//        When to Use and When Not To
        
//        ✅ Use it for:

//             Testing or debugging code
//             Showing quick notifications in demos
//             Stopping script execution for user awareness
            
//         ❌ Avoid it for:

//         Production websites (interrupts user flow)
//         Repetitive messages (can be annoying)
//         Large-scale apps (use modal UI instead)
        
//         💡 Modern apps use custom popups (e.g., SweetAlert, Bootstrap modals) instead of alert(), but understanding alert() is still essential for learning the basics of JavaScript behavior and timing.
      
//       */
//     </script>