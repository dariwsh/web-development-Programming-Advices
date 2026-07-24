# Lesson 22 - Eager and Auto Loading

---

# 📘 Introduction

In this lesson, we learned about:

# Eager and Auto Loading

is:

> The `loading` attribute on `<img>` elements controls when images are fetched. `loading="lazy"` defers off-screen images, while the default eager mode loads images immediately.

---

# 🎯 Main Idea

Images above the fold load eagerly by default, while images below the fold can use `loading="lazy"` to delay loading until they approach the viewport. This improves initial page performance and reduces unnecessary bandwidth usage.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>22 - Eager and Auto Loading</title>
  </head>
  <body>
    <h1>My Gallery of Nature</h1>

    <!-- Ensure that critical images that appear above the fold are not lazy-loaded, as this could delay their visibility. -->

    <img
      src="images/diving4.jpg"
      alt="Abu-Hadhoud Diving in Sharm"
      style="width: 80%; height: auto"
    />
    <img
      src="images/diving6.jpg"
      alt="Abu-Hadhoud Diving in Tailand"
      style="width: 60%; height: auto"
    />

    <p>Scroll down to see images load as they come into view.</p>
    <div style="height: 800px">Scroll down</div>

    <br />
    <img
      src="images/diving.jpg"
      alt="Abu-Hadhoud Diving in Sharm"
      loading="lazy"
      style="width: 40%; height: auto"
    />
    <br />
    <img
      src="images/diving2.jpg"
      alt="Abu-Hadhoud Diving in Sharm"
      loading="lazy"
      style="width: 40%; height: auto"
    />
    <br />
    <img
      src="images/diving3.jpg"
      alt="Abu-Hadhoud Diving in Sharm"
      loading="lazy"
      style="width: 40%; height: auto"
    />

    <div style="height: 800px">Keep scrolling</div>
    <br />
    <img
      src="images/dog.jpg"
      alt="Dog in the morning"
      loading="lazy"
      style="width: 40%; height: auto"
    />
    <br />
    <img
      src="images/n1.jpg"
      alt="Nature image"
      loading="lazy"
      style="width: 25%; height: auto"
    />
    <br />
    <img
      src="images/n2.jpg"
      alt="Nature image"
      loading="lazy"
      style="width: 25%; height: auto"
    />
    <br />
    <img
      src="images/n3.jpg"
      alt="Nature image"
      loading="lazy"
      style="width: 25%; height: auto"
    />

    <div style="height: 800px">Keep scrolling</div>
    <br />
    <img
      src="images/n4.jpg"
      alt="Nature image"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A1.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A2.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A3.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A4.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A5.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A6.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A7.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A8.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A9.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A10.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
    <img
      src="images/A11.jpg"
      alt="With animals"
      loading="lazy"
      style="width: 35%; height: auto"
    />
  </body>
</html>
```

---

# ✨ Key Points

**Eager Loading (Default):**

```html
<img src="images/hero.jpg" alt="Critical image" style="width: 80%; height: auto" />
```

**Lazy Loading:**

```html
<img src="images/gallery.jpg" loading="lazy" alt="Gallery image" style="width: 40%; height: auto" />
```

**Scroll Spacers:**

```html
<div style="height: 800px">Scroll down</div>
```

---

# 🧠 Rules of Image Loading

```text
✔️ Default loading is eager (loads immediately)
✔️ Use loading="lazy" for images below the fold
✔️ Never lazy-load critical above-the-fold images
✔️ Always provide meaningful alt text for accessibility
```

---

# 🧩 Loading Attributes

| Attribute | Behavior | Use Case |
|-----------|----------|----------|
| `loading="eager"` | Loads immediately | Critical above-the-fold images |
| `loading="lazy"` | Loads when near viewport | Off-screen gallery images |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| Eager Loading | Default behavior; image loads immediately |
| Lazy Loading | Defers loading until image nears viewport |
| Above the Fold | Visible area without scrolling |
| Below the Fold | Content requiring scroll to see |
| Performance | Lazy loading improves initial page speed |

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
