# Lesson 39 - HTML Link Colors

---

# 📘 Introduction

In this lesson, we learned about:

# Changing HTML Link Colors Dynamically

is:

> Link colors can be changed dynamically using inline CSS styles and JavaScript mouse event handlers.

---

# 🎯 Main Idea

HTML links can have dynamic color changes on user interactions such as mouse hover, click, and release by combining inline styles with JavaScript event handlers.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>39 - HTML Link Colors</title>
  </head>
  <body>
    <p>
      Visit our <a href="https://www.ProgrammingAdvices.com">Homepage</a> to
      learn more.
    </p>
    <p>
      vist our
      <a
        href="https://www.programmingAdvices.com"
        style="color: blue"
        onmouseover="this.style.color = 'red'"
        onmouseout="this.style.color = 'blue'"
        onmousedown="this.style.color = 'green'"
        onmouseup="this.style.color = 'red'"
        >Homepage</a
      >
      to learn more.
    </p>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Default Link Styling

A standard link without any dynamic color changes.

```html
<a href="https://www.ProgrammingAdvices.com">Homepage</a>
```

## Dynamic Link Colors with JavaScript Events

The link color changes based on mouse interaction using inline event handlers.

```html
<a
  href="https://www.programmingAdvices.com"
  style="color: blue"
  onmouseover="this.style.color = 'red'"
  onmouseout="this.style.color = 'blue'"
  onmousedown="this.style.color = 'green'"
  onmouseup="this.style.color = 'red'"
  >Homepage</a
>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ style="color: blue" sets the default link color
✔️ onmouseover changes color when mouse enters the link
✔️ onmouseout restores color when mouse leaves the link
✔️ onmousedown changes color on mouse press
✔️ onmouseup changes color on mouse release
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| style="color" | Sets the link color | `style="color: blue"` |
| onmouseover | Color on mouse enter | `this.style.color = 'red'` |
| onmouseout | Color on mouse leave | `this.style.color = 'blue'` |
| onmousedown | Color on mouse press | `this.style.color = 'green'` |
| onmouseup | Color on mouse release | `this.style.color = 'red'` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| Dynamic link color | Color changes on user interaction |
| onmouseover | Triggered when mouse enters element |
| onmouseout | Triggered when mouse leaves element |
| onmousedown | Triggered when mouse button is pressed |
| onmouseup | Triggered when mouse button is released |

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
