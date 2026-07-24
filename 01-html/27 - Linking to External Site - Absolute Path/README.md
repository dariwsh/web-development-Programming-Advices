# Lesson 27 - Linking to External Site - Absolute Path

---

# 📘 Introduction

In this lesson, we learned about:

# Absolute Path Links

is:

> An absolute path is a complete URL that includes the protocol and domain name. It points directly to an external resource regardless of the current page location.

---

# 🎯 Main Idea

Absolute paths are used when linking to external websites. They include the full URL with the protocol (http or https) and the domain, making them independent of the current page's folder structure.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>27 - Linking to External Site - Absolute Path</title>
  </head>
  <body>
    <a href="https://www.google.com" target="_blank">Go to Google</a>
    <a href="https://www.google.com" target="_parent">Go to Google</a>

    <a href="https://www.google.com" target="_self">Go to Google</a>
    <a href="https://www.google.com" target="_top">Go to Google</a>
  </body>
</html>
```

---

# ✨ Key Points

**Absolute URL:**

```html
<a href="https://www.google.com">Go to Google</a>
```

**Target Values:**

```html
<a href="https://www.google.com" target="_blank">New tab</a>
<a href="https://www.google.com" target="_self">Same tab</a>
<a href="https://www.google.com" target="_parent">Parent frame</a>
<a href="https://www.google.com" target="_top">Full window</a>
```

---

# 🧠 Rules of Absolute Links

```text
✔️ Include protocol (http:// or https://)
✔️ Include full domain name
✔️ Works from any page location
✔️ Used for external websites
```

---

# 🧩 Target Attributes

| Target | Behavior |
|--------|----------|
| `_self` | Opens in the same tab (default) |
| `_blank` | Opens in a new tab |
| `_parent` | Opens in the parent frame |
| `_top` | Opens in the full browser window |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| Absolute Path | Full URL including protocol and domain |
| Protocol | `http://` or `https://` |
| Domain | Website address like `google.com` |
| Target | Where the linked document opens |
| External Link | Link to a different website |

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
