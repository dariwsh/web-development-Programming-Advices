# Lesson 12 - Bold b vs Important Text strong

---

# 📘 Introduction

In this lesson, we learned about:

# Bold Text vs Important Text

is:

> The HTML `<b>` element defines bold text without any extra importance, while the `<strong>` element defines text with strong importance, and browsers display it as bold by default.

---

# 🎯 Main Idea

Both `<b>` and `<strong>` make text bold, but they have different semantic meanings.

`<b>` is used purely for visual bold text, while `<strong>` indicates that the text is important or urgent, which can be useful for accessibility tools.

---

# 💡 Example

**A simple HTML page comparing b and strong:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>12 - Bold b vs Important Text strong</title>
  </head>

  <body>
    <p>This is the a <b> workd in the set</b></p>

    <p>This is the a <strong> workd in the set</strong></p>
  </body>
</html>
```

---

# ✨ Bold vs Strong Text

**✅ Bold text (visual only):**

```html
<p>This is the a <b> workd in the set</b></p>
```

**✅ Important text (semantic meaning):**

```html
<p>This is the a <strong> workd in the set</strong></p>
```

---

# 🧠 Rules of Bold and Strong Text

```text
✔️ <b> makes text bold without semantic meaning
✔️ <strong> makes text bold AND adds semantic importance
✔️ Browsers display both as bold by default
✔️ Use <strong> for content that is important or urgent
✔️ Use <b> for text that is visually bold but not important
✔️ Screen readers may emphasize <strong> differently from <b>
```

---

# 🧩 Text Semantics Table

| Tag | Visual | Semantic Meaning | Use Case |
|-----|--------|------------------|----------|
| b | Bold | None | Visual bold text | 
| strong | Bold | Important | Important or urgent text | 

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| b | Bold text, visual only |
| strong | Bold text with semantic importance |
| Default | Both displayed as bold by browsers |
| Accessibility | Screen readers treat strong differently |
| Best practice | Use strong for important content |

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
