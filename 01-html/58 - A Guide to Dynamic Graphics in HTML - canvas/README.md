# Lesson 58 - A Guide to Dynamic Graphics in HTML - canvas

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Canvas

is:

> The `<canvas>` element is used to draw graphics, animations, and dynamic visualizations using JavaScript. It provides a bitmap canvas for rendering shapes, text, images, and more.

---

# 🎯 Main Idea

The HTML `<canvas>` element creates a drawing surface that can be dynamically manipulated with JavaScript to render 2D graphics, animations, and game visuals.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>58 - A Guide to Dynamic Graphics in HTML - canvas</title>
  </head>
  <body>
    <canvas
      id="myCanvas"
      width="200"
      height="100"
      style="border: 1px solid #000000"
    >
    </canvas>
    <script>
      var canvas = document.getElementById("myCanvas");
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FF0000";
      ctx.fillRect(0, 0, 200, 100);
    </script>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## The `<canvas>` Element

Creates a drawable canvas region in the HTML document.

```html
<canvas id="myCanvas" width="200" height="100" style="border: 1px solid #000000">
</canvas>
```

**Key Attributes:**
- `id`: Identifier to reference the canvas in JavaScript
- `width` / `height`: Dimensions of the canvas in pixels
- `style`: CSS styling for the canvas border

## JavaScript Canvas Context

Accesses the 2D rendering context to draw on the canvas.

```javascript
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
```

## Drawing a Rectangle

Uses the context to set a fill color and draw a rectangle.

```javascript
ctx.fillStyle = "#FF0000";
ctx.fillRect(0, 0, 200, 100);
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <canvas> requires JavaScript for drawing; without it, only fallback content is shown
✔️ getContext("2d") gets the 2D rendering context
✔️ fillStyle sets the color for filling shapes
✔️ fillRect(x, y, width, height) draws a filled rectangle
✔️ Canvas is a bitmap; shapes are drawn pixel by pixel
✔️ Canvas is resolution-dependent; scaling can cause blurriness
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `<canvas>` | Drawing surface element | `<canvas id="myCanvas">` |
| `width` / `height` | Canvas dimensions | `width="200" height="100"` |
| `getContext("2d")` | Gets 2D rendering context | `getContext("2d")` |
| `fillStyle` | Sets fill color | `fillStyle = "#FF0000"` |
| `fillRect()` | Draws filled rectangle | `fillRect(0, 0, 200, 100)` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| `<canvas>` | Drawable surface for dynamic graphics |
| `getContext("2d")` | Retrieves the 2D drawing context |
| `fillStyle` | Sets the color used for filling |
| `fillRect()` | Draws a filled rectangle |
| `strokeStyle` | Sets the color for borders |
| `strokeRect()` | Draws a rectangle border |

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
