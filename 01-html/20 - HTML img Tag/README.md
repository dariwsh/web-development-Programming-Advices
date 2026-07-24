# Lesson 20 - HTML img Tag

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Image Tag

is:

> The HTML `<img>` tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.

---

# 🎯 Main Idea

The `<img>` tag embeds images into an HTML document using attributes like `src`, `alt`, `width`, `height`, and `title`.

It is an empty (self-closing) element, meaning it does not have a closing tag.

---

# 💡 Example

**A simple HTML page with images:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>20 - HTML img Tag</title>
  </head>

  <body>
    <h1>Images Example</h1>
    <p>Example of lost Image:</p>
    <img src="" alt="Lost Image" />
    <p>Here is programming Adives logo</p>

    <img
      src="Images Example/Logo.png"
      alt="Logo"
      title="Image Programming Advicess"
      width="25"
      height="25"
    />
    <img
      src="Images Example/Logo.png"
      alt="Logo"
      title="Image Programming Advicess"
      width="50"
      height="50"
    />
    <img
      src="Images Example/Logo.png"
      alt="Logo"
      title="Image Programming Advicess"
      width="100"
      height="100"
    />
    <img
      src="Images Example/Logo.png"
      alt="Logo"
      title="Image Programming Advicess"
      width="50"
      height="50"
    />
    <img
      src="Images Example/Logo.png"
      alt="Logo"
      title="Image Programming Advicess"
      width="25"
      height="25"
    />
    <p>Diving Image</p>
    <img
      src="Images Example/Diving.jpg"
      alt="Diving"
      title="Diving Programming Advicess"
      style="width: 200; height: auto"
    />
  </body>
</html>
```

---

# ✨ Image Attributes

**✅ Image with src and alt attributes:**

```html
<img src="" alt="Lost Image" />
```

**✅ Image with width and height:**

```html
<img
  src="Images Example/Logo.png"
  alt="Logo"
  title="Image Programming Advicess"
  width="25"
  height="25"
/>
```

**✅ Image with inline style sizing:**

```html
<img
  src="Images Example/Diving.jpg"
  alt="Diving"
  title="Diving Programming Advicess"
  style="width: 200; height: auto"
/>
```

---

# 🧠 Rules of the img Tag

```text
✔️ The <img> tag is an empty element — no closing tag needed
✔️ The src attribute specifies the path to the image
✔️ The alt attribute provides alternative text for accessibility
✔️ Always include the alt attribute for every image
✔️ width and height can be set in pixels
✔️ The title attribute adds a tooltip on hover
✔️ Relative paths link to images in the project folder
```

---

# 🧩 img Attributes Table

| Attribute | Purpose | Example |
|-----------|---------|---------|
| src | Image path or URL | Images Example/Logo.png | 
| alt | Alternative text description | Logo | 
| width | Image width in pixels | 50 | 
| height | Image height in pixels | 50 | 
| title | Tooltip text on hover | Image Programming Advicess | 

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| img | Embeds an image in the page |
| Empty element | Self-closing, no closing tag |
| src | Path to the image file |
| alt | Alternative text for accessibility |
| width/height | Control image dimensions |
| title | Hover tooltip text |
| Relative path | Links to local project images |

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
