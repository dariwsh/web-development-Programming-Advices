# Lesson 26 - Using the srcdoc Attribute with iframe

---

# 📘 Introduction

In this lesson, we learned about:

# srcdoc Attribute

is:

> The `srcdoc` attribute replaces the `src` attribute on an `<iframe>` by specifying inline HTML content to render directly inside the frame, rather than loading an external URL.

---

# 🎯 Main Idea

With `srcdoc`, you can embed small snippets of HTML directly inside an iframe without creating separate files. It is useful for live previews, inline examples, and self-contained demos.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>26 - Using the srcdoc Attribute with iframe</title>
  </head>
  <body>
    <!-- HTML مكتوب مباشرة -->
    <iframe srcdoc="<h1>مرحبا</h1>  <h1>مرحبا</h1>"> </iframe>
    <!-- ↓
       يقول: استخدم الـ HTML اللي هنا مباشرة -->

    <iframe
      srcdoc="<h2>محتوى بسيط</h2>
                    <p>هذا HTML مباشرة!</p>"
      width="400"
      height="200"
      title="Simple Content"
    >
    </iframe>
    <!-- كل درس فيه أمثلة code -->
    <h2>درس: CSS Flexbox</h2>
    <p>هنا شرح الدرس...</p>

    <h3>مثال 1: Box بسيط</h3>
    <iframe
      srcdoc="
    <div style='
        display: flex;
        gap: 10px;
    '>
        <div style='background: red; width: 100px; height: 100px;'></div>
        <div style='background: blue; width: 100px; height: 100px;'></div>
    </div>
 "
      width="400"
      height="150"
      title="Flexbox Example"
    >
    </iframe>
  </body>
</html>
```

---

# ✨ Key Points

**Simple srcdoc:**

```html
<iframe srcdoc="<h1>مرحبا</h1>  <h1>مرحبا</h1>"></iframe>
```

**Paragraph Content:**

```html
<iframe
  srcdoc="<h2>محتوى بسيط</h2><p>هذا HTML مباشرة!</p>"
  width="400"
  height="200"
  title="Simple Content"
></iframe>
```

**Flexbox Preview:**

```html
<iframe
  srcdoc="
<div style='display: flex; gap: 10px;'>
  <div style='background: red; width: 100px; height: 100px;'></div>
  <div style='background: blue; width: 100px; height: 100px;'></div>
</div>"
  width="400"
  height="150"
  title="Flexbox Example"
></iframe>
```

---

# 🧠 Rules of srcdoc

```text
✔️ srcdoc contains raw HTML to render inside the iframe
✔️ srcdoc overrides src when both are present
✔️ Useful for inline examples and demos
✔️ Avoid using srcdoc with untrusted user content (XSS risk)
```

---

# 🧩 srcdoc Use Cases

| Use Case | Description | Example |
|----------|-------------|---------|
| Live Preview | Render HTML snippet directly | `<iframe srcdoc="<p>Hi</p>">` |
| Code Demo | Show code output without extra files | Flexbox example |
| Inline Help | Embed small tooltips or guides | Help box |
| Self-contained | No external files needed | Standalone example |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| srcdoc | Inline HTML content inside an iframe |
| src | External URL loaded inside an iframe |
| Priority | srcdoc overrides src |
| Use Case | Demos, previews, inline examples |
| Security | Avoid untrusted content in srcdoc |

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
