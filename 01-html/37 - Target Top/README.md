# Lesson 37 - Target Top

---

# 📘 Introduction

In this lesson, we learned about:

# The target="_top" Attribute in iframes

is:

> The target="_top" attribute breaks out of all frames and opens the linked document in the full browser window.

---

# 🎯 Main Idea

The target="_top" attribute is the highest level of iframe navigation, removing all frame boundaries and displaying the linked content as a full standalone page.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>37 - Target Top</title>
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

This page demonstrates a nested iframe structure where the target="_top" behavior can be applied to break out of all frames.

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
✔️ target="_top" removes ALL frames and opens in full window
✔️ It is the highest level of frame navigation
✔️ Useful for "breaking out" of framed content
✔️ The src attribute loads the external HTML document into the iframe
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| iframe | Embeds another HTML document | `<iframe src="...">` |
| target="_top" | Opens in full window, no frames | `target="_top"` |
| width / height | Sets iframe dimensions | `width="600"` |
| fallback content | Text shown if iframe unsupported | `<p>No iframe support</p>` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| target="_top" | Opens link in full window, no frames |
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
