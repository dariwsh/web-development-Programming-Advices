# Lesson 24 - srcset Attribute

---

# 📘 Introduction

In this lesson, we learned about:

# srcset Attribute

is:

> The `srcset` attribute on `<img>` elements provides multiple image sources at different resolutions or sizes, allowing the browser to choose the best one based on the device's screen density and viewport width.

---

# 🎯 Main Idea

Instead of serving one image to every device, `srcset` lets the browser pick the most appropriate image from a list of candidates. This improves performance on small screens and visual quality on high-density displays.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>24 - srcset Attribute</title>
  </head>
  <body></body>
</html>
```

---

# ✨ Key Points

**Basic srcset Syntax:**

```html
<img
  src="image-800.jpg"
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Responsive image"
/>
```

**Resolution Switching (x descriptors):**

```html
<img
  src="image-1x.jpg"
  srcset="image-1x.jpg 1x, image-2x.jpg 2x, image-3x.jpg 3x"
  alt="High DPI image"
/>
```

---

# 🧠 Rules of srcset

```text
✔️ srcset provides multiple image candidates
✔️ The src attribute acts as the fallback
✔️ w descriptors define image intrinsic widths
✔️ x descriptors define pixel density
✔️ sizes tells the browser the intended display size
```

---

# 🧩 srcset Comparison

| Feature | Purpose | Example |
|---------|---------|---------|
| `src` | Fallback image | `src="image.jpg"` |
| `srcset` with `w` | Width-based selection | `image-400.jpg 400w` |
| `srcset` with `x` | Density-based selection | `image-2x.jpg 2x` |
| `sizes` | Hint for display size | `sizes="(max-width: 600px) 400px"` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| srcset | Multiple image sources for the browser |
| w descriptor | Intrinsic width of the candidate image |
| x descriptor | Pixel density of the candidate image |
| sizes | Media conditions for display size |
| Fallback | src provides a default if srcset fails |

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
