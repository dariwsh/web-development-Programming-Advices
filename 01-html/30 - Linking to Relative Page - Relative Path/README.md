# Lesson 30 - Linking to Relative Page - Relative Path

---

# 📘 Introduction

In this lesson, we learned about:

# Linking to Relative Pages - Relative Path

is:

> A relative URL points to a page relative to the current page's location, without including the full domain or protocol.

---

# 🎯 Main Idea

Relative paths link to other pages within the same website without specifying the full domain, making the site portable and easier to maintain.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>30 - Linking to Relative Page - Relative Path</title>
  </head>

  <body>
    <h2>Absolute URLs</h2>
    <b>Linking to an External Website: ProgrammingAdvice Page</b>
    <p>
      To learn programming the right way visit:
      <a href="https://www.programmingAdvices.com">ProgrammingAdvices.com</a>
      now
    </p>
    <h2>Relative URLs</h2>
    <b>Linking to page relative to this page in the project:</b>
    <p>Go To Page2 <a href="Subfolder/Page2.html">Page2</a></p>

    <p>GO TO PAGE 3 <a href="SubFolder/SubSubFolder/Page3.html">Page3</a></p>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

**Absolute URLs:**

Absolute URLs include the full path with protocol and domain. They are used for linking to external websites.

```html
<a href="https://www.programmingAdvices.com">ProgrammingAdvices.com</a>
```

**Relative URLs:**

Relative URLs point to other pages within the same website. They do not include the domain or protocol.

```html
<a href="Subfolder/Page2.html">Page2</a>
```

**Same Directory:**

If the target page is in the same directory, you only need the filename.

```html
<a href="Page2.html">Page2</a>
```

**Subdirectories:**

You can navigate to nested folders using path segments separated by `/`.

```html
<a href="SubFolder/SubSubFolder/Page3.html">Page3</a>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ Relative paths do not include the domain or protocol
✔️ Use relative paths for internal links within your website
✔️ Use absolute paths for external links to other domains
✔️ Paths are relative to the current file's location
✔️ Relative paths make your site portable (works on any domain)
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| Absolute URL | Full path with protocol and domain | `https://www.example.com` |
| Relative URL | Path relative to current file | `Subfolder/Page2.html` |
| Same directory | Link to file in same folder | `Page2.html` |
| Subdirectory | Link to file in subfolder | `SubFolder/Page3.html` |
| External link | Link to another website | Full absolute URL |
| Internal link | Link within your own site | Relative path |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| Relative path | Path without domain/protocol |
| Absolute path | Full URL with domain and protocol |
| Internal link | Links to pages in same website |
| External link | Links to pages on other websites |
| Portability | Relative paths work on any domain |

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