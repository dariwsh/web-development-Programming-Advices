# Lesson 36 - Target Parent

---

# 📘 Introduction

In this lesson, we learned about:

# The target="_parent" Attribute in iframes

is:

> The target="_parent" attribute opens a linked document in the parent frame of the current iframe.

---

# 🎯 Main Idea

The target="_parent" attribute is used within an iframe to load content in the immediate parent frame, allowing navigation that affects the surrounding frame structure.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>36 - Target Parent</title>
  </head>
  <body>
    <p>This page contains a nested iframe structure</p>
    <iframe
      src="nested-iframe.html"
      width="600"
      height="400"
      title="Nested Iframe Example"
    >
      <p>Your browser does not support iframes.</p>
    </iframe>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Nested iframe Structure

This page demonstrates a nested iframe structure that loads another HTML document within the current page.

```html
<iframe
  src="nested-iframe.html"
  width="600"
  height="400"
  title="Nested Iframe Example"
>
  <p>Your browser does not support iframes.</p>
</iframe>
```

## Fallback Content

The content inside the `<iframe>` tag serves as fallback text for browsers that do not support iframes.

```html
<p>Your browser does not support iframes.</p>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ target="_parent" opens the linked document in the parent frame
✔️ If the iframe has no parent, it behaves like target="_top"
✔️ Useful for navigating nested iframe structures
✔️ The src attribute loads the external HTML document into the iframe
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| iframe | Embeds another HTML document | `<iframe src="...">` |
| target="_parent" | Opens in parent frame | `target="_parent"` |
| width / height | Sets iframe dimensions | `width="600"` |
| fallback content | Text shown if iframe unsupported | `<p>No iframe support</p>` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| target="_parent" | Opens link in parent frame |
| iframe | Embeds external document |
| Nested iframe | iframe inside another iframe |
| Fallback content | Alternative text for old browsers |

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
