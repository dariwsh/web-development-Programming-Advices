# Lesson 41 - What are HTML Entities

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Entities, Emojis, and Special Characters

is:

> HTML entities are special codes used to display reserved characters, symbols, and characters that cannot be typed directly in HTML.

---

# 🎯 Main Idea

HTML entities allow us to display special characters like `<`, `>`, `&`, copyright symbols, mathematical symbols, emojis, and arrows that would otherwise be interpreted as HTML code or be difficult to type.

---

# 💡 Example

**A simple example:**

```html
!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>41 - What are HTML Entities</title>
  </head>
  <body style="font-size: 20px">
    <h1>HTML Entities, Emojis, and Math Symbols</h1>
    <p>
      This document demonstrates various HTML entities, emojis, and math
      symbols:
    </p>

    <!-- Display <b> tag -->
    <p><strong>Display html tag as it is:</strong> b tag = <br />.</p>

    <!-- Common HTML Entities -->
    <p>
      <strong>Common HTML Entities:</strong> Less than (<), Greater than (>),
      Ampersand (&), Non-breaking Space ( ), Copyright (©), Registered Trademark
      (®), Euro Sign (€).
    </p>

    <!-- Mathematical Symbols -->
    <p>
      <strong>Mathematical Symbols:</strong> Plus/Minus (±), Multiplication
      (times) (×), Division (obelus) (÷), Square Root (√), Pi (π), Integral (∫),
      Almost Equal to (≈).
    </p>

    <!-- Emojis -->
    <p>
      <strong>Emojis:</strong> Smiley Face (😀), Thinking Face (🤔), Heart (❤️),
      Star (⭐).
    </p>

    <!-- Arrows -->
    <p>
      <strong>Arrows:</strong> Right Arrow (→), Left Arrow (←), Up Arrow (↑),
      Down Arrow (↓).
    </p>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Displaying HTML Tags as Text

To show an HTML tag like `<b>` as literal text, we can display it within the content. Note that `&lt;` and `&gt;` are commonly used entities for `<` and `>`.

```html
<p><strong>Display html tag as it is:</strong> b tag = <br />.</p>
```

## Common HTML Entities

Special characters that have reserved meanings in HTML are escaped using entities.

```html
<p>
  <strong>Common HTML Entities:</strong> Less than (<), Greater than (>),
  Ampersand (&), Non-breaking Space ( ), Copyright (©), Registered Trademark
  (®), Euro Sign (€).
</p>
```

## Mathematical Symbols

Mathematical symbols can be inserted directly or via named/numeric entities.

```html
<p>
  <strong>Mathematical Symbols:</strong> Plus/Minus (±), Multiplication
  (times) (×), Division (obelus) (÷), Square Root (√), Pi (π), Integral (∫),
  Almost Equal to (≈).
</p>
```

## Emojis

Modern HTML supports emoji characters directly or via character references.

```html
<p>
  <strong>Emojis:</strong> Smiley Face (😀), Thinking Face (🤔), Heart (❤️),
  Star (⭐).
</p>
```

## Arrows

Arrow symbols can be displayed using named entities or Unicode characters.

```html
<p>
  <strong>Arrows:</strong> Right Arrow (→), Left Arrow (←), Up Arrow (↑),
  Down Arrow (↓).
</p>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ Entities let you display characters that HTML would otherwise treat as code
✔️ &lt; = < and &gt; = > and &amp; = &
✔️ Non-breaking space (&nbsp;) prevents line breaks
✔️ Named entities use &name; syntax
✔️ Numeric entities use &#number; or &#xhex; syntax
```

---

# 🧩 Summary Table

| Category | Characters | Examples |
| --------- | ----------------------------- | ----------------- |
| Common Entities | Reserved HTML chars | &lt; &gt; &amp; &nbsp; |
| Math Symbols | Mathematical notation | &plusmn; &times; &divide; &radic; |
| Greek Letters | Scientific symbols | &pi; &int; &approx; |
| Emojis | Modern Unicode emojis | 😀 🤔 ❤️ ⭐ |
| Arrows | Directional symbols | &rarr; &larr; &uarr; &darr; |
| Currency | Money symbols | &euro; &pound; &yen; |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| HTML Entity | Code for special characters |
| Named Entity | &name; format like &copy; |
| Numeric Entity | &#number; format |
| Emoji | Unicode character for graphical symbols |
| Purpose | Display reserved or special chars |

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
