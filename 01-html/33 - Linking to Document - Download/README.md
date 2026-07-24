# Lesson 33 - Linking to Document - Download

---

# 📘 Introduction

In this lesson, we learned about:

# Download Attribute

is:

> The `download` attribute on an anchor tag prompts the browser to download the linked resource instead of navigating to it. It can optionally specify a default filename for the saved file.

---

# 🎯 Main Idea

Adding `download` to a link changes its behavior from navigation to file download. This is useful for PDFs, images, documents, and any resource you want users to save locally rather than open in the browser.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>33 - Linking to Document - Download</title>
  </head>
  <body>
    <p>
      You can download documnet
      <a
        href="certificate-of-completion-for-introduction-to-programming-using-c-level-2.pdf"
        download
        title="Download Certificate of Completion for Introduction to Programming Using C Level 2"
        >Certificate
      </a>
    </p>
  </body>
</html>
```

---

# ✨ Key Points

**Basic Download Link:**

```html
<a href="file.pdf" download>Download PDF</a>
```

**With Custom Filename:**

```html
<a href="report.pdf" download="MyReport.pdf">Download Report</a>
```

---

# 🧠 Rules of Download Attribute

```text
✔️ Use download on <a> tags for file downloads
✔️ Works best with same-origin files
✔️ Can specify a custom filename
✔️ Cross-origin downloads may be restricted by CORS
```

---

# 🧩 Download Attribute Options

| Feature | Behavior | Example |
|---------|----------|---------|
| Basic download | Downloads the linked file | `download` |
| Custom filename | Saves with specified name | `download="MyFile.pdf"` |
| Same origin | Works reliably | `href="file.pdf"` |
| Cross origin | May be blocked | `href="https://..."` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| download | Attribute that triggers file download |
| href | Path to the file to download |
| Filename | Optional custom save name |
| Same Origin | File hosted on the same domain |
| Cross Origin | File hosted on another domain |

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
