# Lesson 69 - The object Element in HTML

---

# 📘 Introduction

In this lesson, we learned about:

# The HTML `<object>` Element

is:

> The `<object>` element embeds multimedia or external resources into an HTML document. It supports fallback content for browsers that cannot display the object.

---

# 🎯 Main Idea

The HTML `<object>` element provides a versatile way to embed various types of content including PDFs, images, HTML documents, and videos, with fallback content if the browser does not support the object.

---

# 💡 Example

**A simple example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>69 - The object Element in HTML</title>
    <style>
        object {
            width: 60%;
            min-height: 300px; /* Ensures a minimum height for smaller objects */
            margin-bottom: 20px;
            border: 1px solid #ccc; /* Adds a light border for visibility */
        }
    </style>
</head>
<body>
    <h1>Demonstration of the HTML `< object >` Element</h1>

    <!-- Embedding a PDF Document -->
    <h2>Embedded PDF Document</h2>
    <object data="assets/Test.pdf" type="application/pdf" width="600" height="500">
        <p>Your browser does not support this object. <a href="assets/Test.pdf">Download the PDF</a> to view it.</p>
    </object>

    <!-- Embedding an SVG Image -->
    <h2>Embedded SVG Image</h2>
    <object data="assets/AJ_Digital_Camera.svg" type="image/svg+xml" >
        <p>Your browser does not support this object. Here is a <a href="assets/AJ_Digital_Camera.svg">link to the image</a> instead.</p>
    </object>


    <!-- Embedding an HTML Document -->
    <h2>Embedded HTML Document</h2>
    <object data="assets/OtherHTMLPage.html" type="text/html">
        <p>Your browser does not support this object. Here is a <a href="assets/OtherHTMLPage.html">link to the HTML content</a> instead.</p>
    </object>

    <!-- Embedding a Video File -->
    <h2>Embedded Video File</h2>
    <object data="assets/Funny.mp4" type="video/mp4">
        <p>Your browser does not support this object. Here is a <a href="assets/Funny.mp4">link to the video</a> instead.</p>
    </object>

    <p>This page showcases different uses of the `< object >` element to embed various types of content within a web page. Each example provides fallback content for browsers that do not support the `< object >` tag.</p>
</body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## The `<object>` Element

Embeds external resources with fallback support.

```html
<object data="assets/Test.pdf" type="application/pdf" width="600" height="500">
  <p>Your browser does not support this object.</p>
</object>
```

**Key Attributes:**
- `data`: URL of the external resource
- `type`: MIME type of the content
- `width` / `height`: Dimensions of the embedded content

## Part 1 - Embedding a PDF

```html
<h2>Embedded PDF Document</h2>
<object data="assets/Test.pdf" type="application/pdf" width="600" height="500">
  <p>Your browser does not support this object. <a href="assets/Test.pdf">Download the PDF</a> to view it.</p>
</object>
```

**Use case:** Displaying PDF documents directly on the page.

## Part 2 - Embedding an SVG Image

```html
<h2>Embedded SVG Image</h2>
<object data="assets/AJ_Digital_Camera.svg" type="image/svg+xml">
  <p>Your browser does not support this object. Here is a <a href="assets/AJ_Digital_Camera.svg">link to the image</a> instead.</p>
</object>
```

**Use case:** Rendering scalable vector graphics inline.

## Part 3 - Embedding an HTML Document

```html
<h2>Embedded HTML Document</h2>
<object data="assets/OtherHTMLPage.html" type="text/html">
  <p>Your browser does not support this object. Here is a <a href="assets/OtherHTMLPage.html">link to the HTML content</a> instead.</p>
</object>
```

**Use case:** Displaying another HTML page within the current page.

## Part 4 - Embedding a Video File

```html
<h2>Embedded Video File</h2>
<object data="assets/Funny.mp4" type="video/mp4">
  <p>Your browser does not support this object. Here is a <a href="assets/Funny.mp4">link to the video</a> instead.</p>
</object>
```

**Use case:** Playing video files with fallback content.

---

# 🧠 Rules / Key Concepts

```text
✔️ <object> can embed various file types (PDF, SVG, HTML, video, etc.)
✔️ data attribute specifies the resource URL
✔️ type attribute defines the MIME type of the resource
✔️ Fallback content is shown if the object cannot be displayed
✔️ <object> is more flexible than <embed> with fallback support
✔️ The browser uses the first supported resource type
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `<object>` | Generic external resource embedder | `<object data="..." type="...">` |
| `data` | Resource URL | `data="assets/Test.pdf"` |
| `type` | MIME type | `type="application/pdf"` |
| `width` / `height` | Display dimensions | `width="600" height="500"` |
| `fallback` | Alternative content if not supported | `<p><a href="...">Download</a></p>` |
| `application/pdf` | PDF MIME type | `type="application/pdf"` |
| `image/svg+xml` | SVG MIME type | `type="image/svg+xml"` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| `<object>` | Embeds external resources with fallback |
| `data` | URL of the embedded resource |
| `type` | MIME type of the content |
| `width` / `height` | Dimensions of the embedded content |
| Fallback content | Alternative content if object is unsupported |
| `application/pdf` | MIME type for PDF files |
| `image/svg+xml` | MIME type for SVG images |

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
