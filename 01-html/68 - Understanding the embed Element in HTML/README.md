# Lesson 68 - Understanding the embed Element in HTML

---

# 📘 Introduction

In this lesson, we learned about:

# The HTML `<embed>` Element

is:

> The `<embed>` element embeds external content such as applications, plugins, or interactive media like PDFs, videos, and audio files directly into an HTML document.

---

# 🎯 Main Idea

The HTML `<embed>` element allows developers to integrate external multimedia content and applications into web pages without requiring additional plugins or separate browser windows.

---

# 💡 Example

**A simple example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>68 - Understanding the embed Element in HTML</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        embed {
            border: 1px solid #ccc; /* Adds a light grey border around the embed element */
            margin-bottom: 20px; /* Spacing between each embed element */
            display: block; /* Ensures embed elements do not inline and take the full specified dimensions */
        }
    </style>
</head>
<body>
    <h1>Demonstration of Various Embedded Content Types</h1>

    <!--
     The <embed> element is an HTML tag used to embed external content such as applications, interactive content, or multimedia (like PDFs, videos, and audio files) directly into web pages.
    
        Purpose of the <embed> Element:
            The <embed> element allows web developers to integrate external multimedia elements and other content into HTML documents.
            It supports various types of content, including Flash, QuickTime, and Acrobat files, among others. 
    -->

    <!-- Embedding an image -->
    <h2>Embedded Image</h2>
    <embed src="assets/A2.jpg" type="image/jpeg" width="600" height="400"></embed>

    <!-- Embedding a PDF document -->
    <h2>Embedded PDF Document</h2>
    <embed src="assets/Test.pdf" type="application/pdf" width="600" height="500"></embed>

    <!-- Embedding a video file -->
    <h2>Embedded Video File</h2>
    <embed src="assets/Funny.mp4" type="video/mp4" width="600" height="400"></embed>

    <!-- Embedding an audio file -->
    <h2>Embedded Audio File</h2>
    <embed src="assets/sample.mp3" type="audio/mp3" width="300" height="250"></embed>

    <!-- Embedding an HTML document -->
    <h2>Embedded HTML Document</h2>
    <embed src="assets/OtherHTMLPage.html" type="text/html" width="600" height="400"></embed>

    <p>This webpage is a demonstration of how to use the HTML <code><embed></code> tag to include various types of media and applications directly into a web page. Each embedded element is provided with appropriate dimensions and a MIME type to ensure proper handling by the browser.</p>
</body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## The `<embed>` Element

Embeds external content into the page.

```html
<embed src="assets/A2.jpg" type="image/jpeg" width="600" height="400">
```

**Key Attributes:**
- `src`: URL of the external resource
- `type`: MIME type of the content
- `width` / `height`: Dimensions of the embedded content

## Part 1 - Embedding Images

```html
<h2>Embedded Image</h2>
<embed src="assets/A2.jpg" type="image/jpeg" width="600" height="400">
```

**Use case:** Displaying image content with external viewer.

## Part 2 - Embedding PDFs

```html
<h2>Embedded PDF Document</h2>
<embed src="assets/Test.pdf" type="application/pdf" width="600" height="500">
```

**Use case:** Displaying PDF documents directly in the browser.

## Part 3 - Embedding Video and Audio

```html
<embed src="assets/Funny.mp4" type="video/mp4" width="600" height="400">
<embed src="assets/sample.mp3" type="audio/mp3" width="300" height="250">
```

**Use case:** Playing video and audio with embedded controls.

## Part 4 - Embedding HTML Documents

```html
<h2>Embedded HTML Document</h2>
<embed src="assets/OtherHTMLPage.html" type="text/html" width="600" height="400">
```

**Use case:** Displaying another HTML page inline.

---

# 🧠 Rules / Key Concepts

```text
✔️ <embed> is a void element (no closing tag)
✔️ src specifies the external resource URL
✔️ type must match the MIME type of the content
✔️ width and height control the embedded content size
✔️ Common MIME types: image/jpeg, application/pdf, video/mp4, audio/mp3, text/html
✔️ <embed> is useful for content plugins are needed
✔️ Styling can be applied via CSS (display: block recommended)
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `<embed>` | External content embedder | `<embed src="..." type="...">` |
| `src` | Resource URL | `src="assets/Test.pdf"` |
| `type` | MIME type | `type="application/pdf"` |
| `width` / `height` | Display dimensions | `width="600" height="500"` |
| `image/jpeg` | JPEG image MIME type | `type="image/jpeg"` |
| `application/pdf` | PDF document MIME type | `type="application/pdf"` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| `<embed>` | Embeds external content/plugins |
| `src` | External resource URL |
| `type` | MIME type of the content |
| `width` / `height` | Dimensions of embedded content |
| `application/pdf` | MIME type for PDF files |
| `video/mp4` | MIME type for MP4 video |
| `audio/mp3` | MIME type for MP3 audio |

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
