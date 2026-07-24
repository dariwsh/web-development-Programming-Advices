# Lesson 28 - Opening a link in a new tab

---

# 📘 Introduction

In this lesson, we learned about:

# Opening a Link in a New Tab

is:

> The `target="_blank"` attribute on an anchor tag instructs the browser to open the linked document in a new tab or window, leaving the current page open.

---

# 🎯 Main Idea

Using `target="_blank"` keeps the original page accessible while the linked content loads separately. It is commonly used for external links so users do not leave the current site.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>28 - Opening a link in a new tab</title>
  </head>
  <body>
    <p>
      This link will open in the same tab/window
      <a
        href="http://ProgrammingAdvices.com"
        title="To Learn More about our website."
      >
        click here </a
      >.
    </p>

    <p>
      This link will open in the a new tab/window leaving the current tab open
      <a
        href="http://ProgrammingAdvices.com"
        target="_blank"
        title="To Learn More about our website."
      >
        click here </a
      >.
    </p>
  </body>
</html>
```

---

# ✨ Key Points

**Same Tab (Default):**

```html
<a href="http://ProgrammingAdvices.com" title="To Learn More about our website.">
  click here
</a>
```

**New Tab:**

```html
<a href="http://ProgrammingAdvices.com" target="_blank" title="To Learn More about our website.">
  click here
</a>
```

---

# 🧠 Rules of Target Blank

```text
✔️ target="_blank" opens link in a new tab
✔️ Without target, link opens in the same tab
✔️ Use target="_blank" for external links
✔️ Always include rel="noopener" with target="_blank" for security
```

---

# 🧩 Target Comparison

| Target | Result |
|--------|--------|
| No target | Opens in same tab |
| `_blank` | Opens in new tab |
| `_self` | Opens in same tab |
| `_parent` | Opens in parent frame |
| `_top` | Opens in full window |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| target | Specifies where to open the link |
| _blank | Opens in a new tab or window |
| Same Tab | Default behavior without target |
| Title Attribute | Tooltip text on hover |
| rel="noopener" | Security with target="_blank" |

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
