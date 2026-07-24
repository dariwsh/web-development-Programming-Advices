# Lesson 08 - Preformatted Text pre

---

# 📘 Introduction

In this lesson, we learned about:

# Preformatted Text

is:

> The HTML `<pre>` element defines preformatted text. Text inside a `<pre>` element is displayed in a fixed-width font, and both spaces and line breaks are preserved.

---

# 🎯 Main Idea

The `<pre>` tag preserves all whitespace and line breaks exactly as they appear in the HTML code.

Unlike a normal `<p>` tag, which collapses multiple spaces and ignores line breaks, `<pre>` displays text with its original formatting intact.

---

# 💡 Example

**A simple HTML page comparing pre and paragraph text:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>08 - Preformatted Text pre</title>
  </head>
  <body>
    <pre>
    
        Hello 
        my name is Ramez
        i live in Egypt
        and i am a software engineer
        and i am a content creator
        and i am a software engineer
        and i am a content creator
    </pre>
    <p>
      Hello my name is Ramez i live in Egypt and i am a software engineer and i
      am a content creator and i am a software engineer and i am a content
      creator
    </p>
  </body>
</html>
```

---

# ✨ Preformatted Text

**✅ Preformatted text with preserved spacing:**

```html
<pre>
    
        Hello 
        my name is Ramez
        i live in Egypt
        and i am a software engineer
        and i am a content creator
        and i am a software engineer
        and i am a content creator
    </pre>
```

**✅ Normal paragraph (collapses whitespace):**

```html
<p>
  Hello my name is Ramez i live in Egypt and i am a software engineer and i
  am a content creator and i am a software engineer and i am a content
  creator
</p>
```

---

# 🧠 Rules of Preformatted Text

```text
✔️ The <pre> tag preserves all spaces and line breaks
✔️ Text inside <pre> uses a fixed-width (monospace) font by default
✔️ Useful for code snippets, poetry, and ASCII art
✔️ The <p> tag collapses multiple spaces into one
✔️ The <p> tag ignores most line breaks
```

---

# 🧩 Text Comparison Table

| Feature | pre | p |
|---------|-----|---|
| Spaces | Preserved | Collapsed to one | 
| Line breaks | Preserved | Ignored | 
| Font | Monospace | Default browser font | 
| Use case | Code, poetry, formatted text | Normal paragraphs | 

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| pre | Preformatted text element |
| Whitespace | Spaces and tabs are preserved |
| Line breaks | Carriage returns are shown |
| Monospace | Fixed-width font by default |
| Comparison | p collapses whitespace, pre preserves it |

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
