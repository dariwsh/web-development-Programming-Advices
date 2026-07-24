# Lesson 25 - What is iFrame

---

# 📘 Introduction

In this lesson, we learned about:

# iFrame

is:

> An `<iframe>` (inline frame) embeds another HTML document inside the current page. It creates an independent nested browsing context with its own document and session history.

---

# 🎯 Main Idea

Iframes let you display external content such as web pages, videos, maps, or documents directly inside your page. They are useful for embedding third-party content while keeping the parent page functional.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>25 - What is iFrame</title>
  </head>
  <body>
    <p>Default Borders</p>
    <iframe src="page1.html" title="Page 1"></iframe>
    <iframe src="page2.html" title="Page 2"></iframe>
    <p>Custom Borders</p>
    <iframe
      src="page1.html"
      title="Page 1"
      loading="lazy"
      style="border: 2px solid #c02020"
    ></iframe>
    <iframe
      src="page2.html"
      title="Page 2"
      loading="lazy"
      style="border: 2px solid #9b1212"
    ></iframe>
    <p>Changing width and height</p>
    <iframe
      src="page1.html"
      title="Page 1"
      loading="lazy"
      width="500"
      height="600"
    ></iframe>
    <iframe
      src="page2.html"
      title="Page 2"
      loading="lazy"
      width="500"
      height="600"
    ></iframe>

    <p>url ifarme</p>
    <iframe
      width="700"
      height="600"
      src="https://www.youtube.com/embed/9KvR1rGE9FU?si=gcIq2dEHPeltndmq"
      title="YouTube video player"
      frameborder="0"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
        web-share;
      "
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    >
    </iframe>

    <!-- Google Maps embed -->
    <iframe
      width="600"
      height="450"
      src="https://www.google.com/maps/embed?pb=..."
      allowfullscreen=""
      loading="lazy"
    >
    </iframe>

    <!-- Google Maps embed -->
    <iframe
      width="600"
      height="450"
      src="https://www.google.com/maps/embed?pb=..."
      allowfullscreen=""
      loading="lazy"
    >
    </iframe>
  </body>
</html>
```

---

# ✨ Key Points

**Basic Iframe:**

```html
<iframe src="page1.html" title="Page 1"></iframe>
```

**Custom Borders:**

```html
<iframe src="page1.html" style="border: 2px solid #c02020"></iframe>
```

**Fixed Dimensions:**

```html
<iframe src="page1.html" width="500" height="600"></iframe>
```

**YouTube Embed:**

```html
<iframe
  width="700"
  height="600"
  src="https://www.youtube.com/embed/VIDEO_ID"
  frameborder="0"
  allowfullscreen
></iframe>
```

---

# 🧠 Rules of Iframes

```text
✔️ Use the title attribute for accessibility
✔️ Always specify width and height for predictable layout
✔️ Use loading="lazy" for off-screen iframes
✔️ Avoid framing untrusted content (security risk)
```

---

# 🧩 Iframe Attributes

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `src` | URL of embedded document | `src="page1.html"` |
| `width` / `height` | Frame dimensions | `width="500" height="600"` |
| `title` | Accessibility label | `title="Page 1"` |
| `loading` | Lazy load support | `loading="lazy"` |
| `frameborder` | Border visibility | `frameborder="0"` |
| `allowfullscreen` | Fullscreen permission | `allowfullscreen` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| iframe | Inline frame for embedding documents |
| src | URL loaded inside the frame |
| width / height | Frame dimensions in pixels |
| title | Required for screen readers |
| allowfullscreen | Enables fullscreen for media |
| loading="lazy" | Defers loading until near viewport |

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
