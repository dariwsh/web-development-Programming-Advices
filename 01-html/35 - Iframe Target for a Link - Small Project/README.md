# Lesson 35 - Iframe Target for a Link - Small Project

---

# 📘 Introduction

In this lesson, we learned about:

# Iframe Target for a Link

is:

> The `target` attribute on an anchor tag can match the `name` attribute of an `<iframe>`, causing the linked page to load inside that specific frame instead of the main window.

---

# 🎯 Main Idea

By giving an iframe a `name` and linking to it with `target="sameName"`, you can build a simple framed navigation layout where clicking links updates only the iframe content. This is useful for embedded browsers, story viewers, or documentation layouts.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>35 - Iframe Target for a Link - Small Project</title>
  </head>
  <body>
    <div
      id="nav"
      style="width: 100%; height: 150px; border: 2px solid #b65252; margin: 0"
    >
      <h1 style="text-align: center; padding: 10px">Short Stories:</h1>

      <p style="text-align: center; padding: 10px">
        <a href="page1.html" target="contentFrame">Story 1</a>
        <a href="page2.html" target="contentFrame">Story 2</a>
        <a href="page3.html" target="contentFrame">Story 3</a>
      </p>
    </div>

    <div id="content" style="width: 100%; height: 500px">
      <iframe
        name="contentFrame"
        src="page1.html"
        style="width: 100%; height: 100%; border: none"
      ></iframe>
    </div>
  </body>
</html>
```

---

# ✨ Key Points

**Navigation Links:**

```html
<a href="page1.html" target="contentFrame">Story 1</a>
```

**Named Iframe:**

```html
<iframe name="contentFrame" src="page1.html" style="width: 100%; height: 100%; border: none"></iframe>
```

---

# 🧠 Rules of Iframe Targets

```text
✔️ The iframe name must match the link target
✔️ Multiple links can target the same iframe
✔️ The iframe src sets the initial content
✔️ Border styling is controlled via CSS or style attribute
```

---

# 🧩 Framed Layout Structure

| Element | Purpose | Example |
|---------|---------|---------|
| Navigation links | Choose content to load | `<a href="page1.html" target="contentFrame">` |
| Named iframe | Displays linked content | `<iframe name="contentFrame">` |
| Container div | Layout wrapper | `<div id="content">` |
| Border styling | Visual separation | `border: 2px solid #b65252` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| target | Specifies where linked content opens |
| iframe name | Matches target to frame content |
| Navigation | Click link to update iframe content |
| Framed Layout | Split page into nav and content areas |
| Self-contained | All content loads inside one page |

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
