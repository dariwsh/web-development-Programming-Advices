# Lesson 03 - Adding CSS to Our Example

---

# 📘 Introduction

In this lesson, we learned about:

# CSS Styling

is:

> CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content.

---

# 🎯 Main Idea

CSS allows us to control how HTML elements look on the page.

In this lesson, we added inline CSS to style headings, paragraphs, and bold text using colors and font sizes.

---

# 💡 Example

**A simple HTML page with CSS:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>03 - Adding CSS to Our Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }

      h1 {
        color: blue;
      }

      p {
        color: #333;
        font-size: 16px;
      }

      b {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1>Welcome to HTML</h1>
    <p>This is my <b>First</b> paragraph.</p>
    <p>This is my <b>Second</b> paragraph</p>
    <p>This is my third <b>paragraph</b></p>
  </body>
</html>
```

---

# ✨ CSS Styling Elements

**✅ Styling the body:**

```html
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
</style>
```

**✅ Styling headings:**

```html
<style>
  h1 {
    color: blue;
  }
</style>
```

**✅ Styling paragraphs:**

```html
<style>
  p {
    color: #333;
    font-size: 16px;
  }
</style>
```

**✅ Styling bold text:**

```html
<style>
  b {
    color: red;
  }
</style>
```

---

# 🧠 Rules of CSS

```text
✔️ CSS changes how HTML elements look
✔️ The <style> tag goes inside the <head> section
✔️ CSS selectors target HTML elements
✔️ Properties are followed by a colon and a value
✔️ CSS declarations end with a semicolon
```

---

# 🧩 CSS Style Table

| Selector | Property | Value | Effect |
|----------|----------|-------|--------|
| body | font-family | Arial, sans-serif | Sets the font | 
| body | background-color | #f0f0f0 | Sets page background | 
| h1 | color | blue | Blue heading text | 
| p | color | #333 | Dark gray paragraph text | 
| p | font-size | 16px | Paragraph font size | 
| b | color | red | Red bold text | 

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| CSS | Cascading Style Sheets |
| Purpose | Style and layout web pages |
| Location | Inside <head> with <style> tag |
| Selector | Targets HTML elements |
| Property | The aspect being styled |
| Value | The style setting |

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
