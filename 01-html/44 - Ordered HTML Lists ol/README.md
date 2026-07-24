# Lesson 44 - Ordered HTML Lists ol

---

# 📘 Introduction

In this lesson, we learned about:

# Ordered Lists Using <ol> and <li>

is:

> The `<ol>` element defines an ordered (numbered) list, and `<li>` elements represent individual list items in a specific sequence.

---

# 🎯 Main Idea

Ordered lists display items in a numbered sequence and support various numbering styles including numbers, letters, and Roman numerals through the `type` attribute or CSS `list-style-type` property.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>44 - Ordered HTML Lists ol</title>
  </head>
  <body style="font-size: 20px">
    <b>Simple unorderd Item List:</b>
    <ul>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ul>

    <b>To change your life vist:</b>
    <ul>
      <li>
        Portal:
        <a href="https://ProgrammingAdvices.com" target="_blank"
          >ProgrammingAdivces.com</a
        >
      </li>
      <li>
        Youtube:
        <a href="https://Youtube.com/@ProgrammingAdvices" target="_blank"
          >@ProgrammingAdivces</a
        >
      </li>

      <li>
        Portal:
        <a href="https://ManagementDose.com" target="_blank"
          >ManagementDose.com</a
        >
      </li>
      <li>
        Youtube:
        <a href="https://Youtube.com/@ManagementDose" target="_blank"
          >@ManagementDose</a
        >
      </li>
    </ul>

    <b>To change your life vist:</b>
    <ol>
      <li>
        Portal:
        <a href="https://ProgrammingAdvices.com" target="_blank"
          >ProgrammingAdivces.com</a
        >
      </li>
      <li>
        Youtube:
        <a href="https://Youtube.com/@ProgrammingAdvices" target="_blank"
          >@ProgrammingAdivces</a
        >
      </li>

      <li>
        Portal:
        <a href="https://ManagementDose.com" target="_blank"
          >ManagementDose.com</a
        >
      </li>
      <li>
        Youtube:
        <a href="https://Youtube.com/@ManagementDose" target="_blank"
          >@ManagementDose</a
        >
      </li>
    </ol>

    <b>Simple Ordered Item List:</b>
    <ol>
      <li>First item</li>
      <li>Second item</li>
      <li>Third item</li>
    </ol>

    <b>Recipe Steps:</b>
    <ol>
      <li>Gather ingredients.</li>
      <li>Mix dry ingredients.</li>
      <li>Add liquids and mix thoroughly.</li>
      <li>Bake at 350 degrees for 20 minutes.</li>
    </ol>

    <b>Task Prioritization:</b>
    <ol type="A">
      <li>Respond to urgent emails.</li>
      <li>Prepare project presentation.</li>
      <li>Schedule team meeting.</li>
    </ol>

    <b>Task Prioritization (lower-alpha):</b>
    <ol style="list-style-type: lower-alpha">
      <li>Respond to urgent emails.</li>
      <li>Prepare project presentation.</li>
      <li>Schedule team meeting.</li>
    </ol>

    <b>Task Prioritization (upper-roman):</b>
    <ol style="list-style-type: upper-roman">
      <li>Respond to urgent emails.</li>
      <li>Prepare project presentation.</li>
      <li>Schedule team meeting.</li>
    </ol>

    <b>Task Prioritization (lower-roman):</b>
    <ol style="list-style-type: lower-roman">
      <li>Respond to urgent emails.</li>
      <li>Prepare project presentation.</li>
      <li>Schedule team meeting.</li>
    </ol>

    <b>Recipe Steps:</b>
    <ol>
      <li>
        Gather ingredients.

        <ul>
          <li>Tomato</li>
          <li>Onion</li>
          <li>Salt</li>
          <li>Oil</li>
        </ul>
      </li>
      <li>Mix dry ingredients.</li>
      <li>Add liquids and mix thoroughly.</li>
      <li>Bake at 350 degrees for 20 minutes.</li>
    </ol>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Basic Ordered List

A simple numbered list using the default decimal numbering.

```html
<b>Simple Ordered Item List:</b>
<ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>
```

## Changing List Style with type Attribute

The `type` attribute changes the numbering style to uppercase letters (A, B, C...).

```html
<b>Task Prioritization:</b>
<ol type="A">
  <li>Respond to urgent emails.</li>
  <li>Prepare project presentation.</li>
  <li>Schedule team meeting.</li>
</ol>
```

## CSS list-style-type Property

CSS can also control the numbering style using `list-style-type`.

```html
<b>Task Prioritization (lower-alpha):</b>
<ol style="list-style-type: lower-alpha">
  <li>Respond to urgent emails.</li>
  <li>Prepare project presentation.</li>
  <li>Schedule team meeting.</li>
</ol>
```

## Nested Lists

Ordered lists can contain nested unordered lists for complex step-by-step instructions.

```html
<b>Recipe Steps:</b>
<ol>
  <li>
    Gather ingredients.
    <ul>
      <li>Tomato</li>
      <li>Onion</li>
      <li>Salt</li>
      <li>Oil</li>
    </ul>
  </li>
  <li>Mix dry ingredients.</li>
  <li>Add liquids and mix thoroughly.</li>
  <li>Bake at 350 degrees for 20 minutes.</li>
</ol>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <ol> defines an ordered numbered list
✔️ <li> defines each list item
✔️ Default numbering is decimal (1, 2, 3...)
✔️ type="A" uses uppercase letters (A, B, C...)
✔️ type="a" uses lowercase letters (a, b, c...)
✔️ type="I" uses uppercase Roman numerals (I, II, III...)
✔️ type="i" uses lowercase Roman numerals (i, ii, iii...)
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| ol | Ordered list container | `<ol>` |
| li | List item | `<li>Item</li>` |
| type="1" | Decimal numbers (default) | `<ol type="1">` |
| type="A" | Uppercase letters | `<ol type="A">` |
| type="a" | Lowercase letters | `<ol type="a">` |
| type="I" | Uppercase Roman numerals | `<ol type="I">` |
| list-style-type | CSS property for numbering | `list-style-type: lower-roman` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| ol | Ordered numbered list |
| li | List item element |
| type attribute | HTML attribute for numbering style |
| list-style-type | CSS property for numbering style |
| Nested list | Sublist inside a parent list item |

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
