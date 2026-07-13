# Lesson 02 - Relationship of HTML, CSS, and JavaScript

---

# 📘 Introduction

In this lesson, we learned about:

# The Relationship Between HTML, CSS, and JavaScript

> Every web page is built using **three core technologies** that work together:
> **HTML** for structure, **CSS** for style, and **JavaScript** for behavior.

---

# 🎯 Main Idea

Each technology has its own role:

| Technology     | Role                     | Analogy                                 |
| -------------- | ------------------------ | --------------------------------------- |
| **HTML**       | Structure & Content      | 🏗️ The skeleton of a building           |
| **CSS**        | Styling & Appearance     | 🎨 The paint, furniture, and decoration |
| **JavaScript** | Behavior & Interactivity | ⚡ The electricity and moving parts     |

> Together, they create the complete web experience the user sees and interacts with.

---

# 💡 Example

**A page that combines HTML, CSS, and JavaScript:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>02 - Relationship of HTML CSS and JavaScript</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 20px;
      }

      h1 {
        color: #333;
      }

      #content {
        background-color: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }

      button {
        padding: 10px 20px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 20px;
      }

      button:hover {
        background-color: #0056b3;
      }
    </style>
  </head>

  <body>
    <h1>Welcome to our page</h1>
    <div id="content">
      <p>
        This is a dynamic content area. Click the button to change the text
        color.
      </p>
      <button onclick="changeTextColor()">Change Text Color</button>
    </div>

    <script>
      function changeTextColor() {
        var content = document.getElementById("content");
        content.style.color = content.style.color === "red" ? "black" : "red";
      }
    </script>
  </body>
</html>
```

---

# ✨ Breaking Down the Example

## 🏗️ HTML Part (Structure)

The HTML gives the page its structure and content:

```html
<h1>Welcome to our page</h1>
<div id="content">
  <p>This is a dynamic content area.</p>
  <button onclick="changeTextColor()">Change Text Color</button>
</div>
```

> Without CSS or JavaScript, HTML alone will display plain, unstyled text.

---

## 🎨 CSS Part (Style)

The CSS controls how the page looks:

```css
#content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

> CSS makes the page visually appealing with colors, spacing, shadows, and rounded corners.

---

## ⚡ JavaScript Part (Behavior)

JavaScript adds interactivity to the page:

```javascript
function changeTextColor() {
  var content = document.getElementById("content");
  content.style.color = content.style.color === "red" ? "black" : "red";
}
```

> JavaScript listens for user actions (like clicking a button) and changes the page dynamically.

---

# 🔗 How They Work Together

```text
1. The browser reads the HTML and builds the page structure (DOM)
2. The browser reads the CSS and applies styles to the elements
3. The browser reads the JavaScript and adds interactive behavior
4. The user sees a complete, styled, interactive web page
```

```text
   HTML (Structure)
       ↓
   CSS (Style)
       ↓
   JavaScript (Behavior)
       ↓
   🌐 Complete Web Page
```

---

# 🧠 Key Concepts

```text
✔️ HTML alone creates a plain, unstyled page
✔️ CSS alone cannot create content — it only styles existing HTML
✔️ JavaScript alone cannot display anything — it needs HTML elements to work with
✔️ All three must work together for a complete web experience
✔️ CSS can be written inline, internal (<style>), or external (.css file)
✔️ JavaScript can be written inline, internal (<script>), or external (.js file)
```

---

# 🔥 Important Rules

```text
🚫 Don't use HTML for styling — that's CSS's job
🚫 Don't use JavaScript for simple styling — use CSS instead
🚫 Don't mix responsibilities — keep each technology focused on its role

✅ Use HTML for content and meaning
✅ Use CSS for design and layout
✅ Use JavaScript for logic and interactivity
```

---

# 🧩 Ways to Add CSS

| Method       | Example                                    | When to Use        |
| ------------ | ------------------------------------------ | ------------------ |
| **Inline**   | `<p style="color: red;">`                  | Quick testing only |
| **Internal** | `<style>` inside `<head>`                  | Single page styles |
| **External** | `<link rel="stylesheet" href="style.css">` | Best practice ✅   |

---

# 🧩 Ways to Add JavaScript

| Method       | Example                    | When to Use         |
| ------------ | -------------------------- | ------------------- |
| **Inline**   | `onclick="doSomething()"`  | Quick testing only  |
| **Internal** | `<script>` inside HTML     | Single page scripts |
| **External** | `<script src="script.js">` | Best practice ✅    |

---

# ✅ Summary

| Concept       | Meaning                                              |
| ------------- | ---------------------------------------------------- |
| HTML          | Defines the structure and content                    |
| CSS           | Controls the visual appearance                       |
| JavaScript    | Adds dynamic behavior and interactivity              |
| Together      | They create a complete web experience                |
| Separation    | Each technology should handle its own responsibility |
| Best Practice | Use external files for CSS and JavaScript            |

---

# 👨‍💻 Author

Ahmed Darwish 🚀
🚀 Software Engineering Student

أشارك رحلتي في تعلم البرمجة، مشاريعي، وملخصاتي الدراسية.

🌐 Portfolio
https://darwish.xo.je

💻 GitHub
https://github.com/dariwsh

🔗 LinkedIn
https://www.linkedin.com/in/ahmed-darwish-33b752330/

🤝 أي نصيحة أو Feedback مرحب بها دائمًا، فالتعلم لا يتوقف.

❤️ Thanks for visiting.
