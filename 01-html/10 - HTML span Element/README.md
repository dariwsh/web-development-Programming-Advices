# Lesson 10 - HTML span Element

---

# 📘 Introduction

In this lesson, we learned about:

# HTML span Element

is:

> The HTML `<span>` element is an inline container used to mark up a part of a text, or a part of a document, for styling purposes with CSS or for handling with JavaScript.

---

# 🎯 Main Idea

The `<span>` tag is an inline element used to wrap a portion of text or other inline content so it can be styled or manipulated.

Unlike block elements, `<span>` does not start on a new line and only takes up as much width as necessary.

---

# 💡 Example

**A simple HTML page using span elements:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>10 - HTML span Element</title>
  </head>
  <body>
    <h1>Basic usage span: <span>Hello</span> Ramez</h1>
    <p style="color: aqua">
      This is a paragraph with
      <span style="color: green">some green text</span> inside it.
    </p>
    <p style="color: aqua">
      This is a paragraph with
      <span style="color: green">some green text</span> inside it.
    </p>
    <p style="color: rgb(25, 36, 36)">
      This is a paragraph with
      <span style="color: green">some green text</span> inside it.
    </p>
    <p style="color: aqua">
      This is a paragraph with
      <span style="color: green">some green text</span> inside it.
    </p>
    <p>onclick event: <span onclick="alert('Hello')">click me</span></p>
  </body>
</html>
```

---

# ✨ span Element Usage

**✅ Span inside a heading:**

```html
<h1>Basic usage span: <span>Hello</span> Ramez</h1>
```

**✅ Span with inline style inside a paragraph:**

```html
<p style="color: aqua">
  This is a paragraph with
  <span style="color: green">some green text</span> inside it.
</p>
```

**✅ Span with an onclick event:**

```html
<p>onclick event: <span onclick="alert('Hello')">click me</span></p>
```

---

# 🧠 Rules of the span Element

```text
✔️ The <span> tag is an inline container
✔️ It does not start on a new line by default
✔️ It is used to style a portion of text inside a block element
✔️ It has no visual effect by itself — it needs CSS
✔️ For block-level grouping, use <div> instead
```

---

# 🧩 span vs div Table

| Feature | span | div |
|---------|------|-----|
| Display type | inline | block | 
| New line | No | Yes | 
| Use case | Styling part of text | Grouping block content | 
| Width | Only as needed | Full width by default | 

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| span | Inline container for text |
| Inline | Does not start on a new line |
| Styling | Used with CSS or inline styles |
| Events | Can use attributes like onclick |
| vs div | span is inline, div is block-level |

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
