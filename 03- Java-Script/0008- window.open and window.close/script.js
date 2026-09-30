// ==========================================
// Lesson 025: window.open and window.close
// ==========================================

console.log("=== Lesson 025: window.open and window.close ===");
console.log("Ready for practice!");

function openWindow() {
  window.open(
    "https://www.google.com",
    "_blank",
    "width=500 , height=500 , top=220 , left=220",
  );
}

function showMyWindow() {
  let newWin = window.open(
    "",
    "myPopup",
    "width=500 , height=500 , top=220 , left=220",
  );

  newWin.document.write("<h1>Welcome to my popup window!</h1>");
  newWin.document.write(
    "<p>This is a simple popup window created using JavaScript.</p>",
  );
  newWin.document.body.style.backgroundColor = "#673e3e";
}

function OpeningaLocal() {
  window.open(
    "info.html",
    "_blank",
    "width=500 , height=500 , top=220 , left=220",
  );
}

function closeWindow() {
  let newWin2 = window.open(
    "",
    "myPopup",
    "width=500 , height=500 , top=220 , left=220",
  );
  newWin2.document.write("<h1>Welcome to my popup window!</h1>");
  newWin2.document.write(
    `<p>This window will close automatically after 3 seconds.</p>`,
  );
  setTimeout(() => {
    newWin2.close();
  }, 3000);
}

function Controlled() {
  let newWin3 = window.open(
    "Info.html",
    "Info",
    "width=500 , height=500 , top=220 , left=220 , scrollbars=yes , resizable=yes",
  );
  newWin3.document.write("<h1>Welcome to my controlled popup window!</h1>");
  newWin3.document.write(
    `<p>This is a controlled popup window with scrollbars and resizable options.</p>`,
  );
  newWin3.document.body.style.backgroundColor = "#df9898";
  newWin3.document.body.style.color = "#29b132";
}
