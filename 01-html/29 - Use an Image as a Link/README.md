# Lesson 29 - Use an Image as a Link

---

# 📘 Introduction

In this lesson, we learned about:

# Image as a Link

is:

> Wrapping an `<img>` element inside an `<a>` tag turns the image into a clickable link. The image behaves like a button or hyperlink while still displaying its visual content.

---

# 🎯 Main Idea

Images can act as navigation elements by nesting them inside anchor tags. This is commonly used for logo links, photo galleries, and visual buttons that direct users to other pages or external sites.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>29 - Use an Image as a Link</title>
  </head>
  <body>
    <div>
      <a
        href="https://www.ManagementDose.com "
        target="_blank"
        title="To Learn More about our website."
      >
        <img
          src="ManagementDose.png"
          title="Management Dose"
          width="200"
          height="200"
          alt="Management Dose"
        />
      </a>
      <a
        href="https://www.ProgrammingAdvices.com "
        target="_blank"
        title="To Learn More about our website."
      >
        <img
          src="ProgrammingAdvices.png"
          title="Programming Advices"
          width="200"
          height="200"
          alt="Programming Advices"
        />
      </a>
    </div>
  </body>
</html>
```

---

# ✨ Key Points

**Image Inside Anchor:**

```html
<a href="https://example.com">
  <img src="logo.png" alt="Site Logo" width="200" height="200" />
</a>
```

**Multiple Image Links:**

```html
<a href="site1.html">
  <img src="site1.png" alt="Site 1" />
</a>
<a href="site2.html">
  <img src="site2.png" alt="Site 2" />
</a>
```

---

# 🧠 Rules of Image Links

```text
✔️ Place the <img> inside the <a> tag
✔️ Always include alt text for accessibility
✔️ Use width and height for predictable layout
✔️ The whole image becomes clickable
✔️ Use target="_blank" for external image links
```

---

# 🧩 Image Link Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `href` | Link destination | `href="https://example.com"` |
| `src` | Image source | `src="logo.png"` |
| `alt` | Accessibility text | `alt="Site Logo"` |
| `width` / `height` | Image dimensions | `width="200"` |
| `target` | Where link opens | `target="_blank"` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| Image Link | Image wrapped inside an anchor tag |
| Clickable Area | Entire image acts as the link |
| alt | Describes image for screen readers |
| href | URL the image links to |
| Target | Controls where the link opens |

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
