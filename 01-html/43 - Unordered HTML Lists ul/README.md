# Lesson 43 - Unordered HTML Lists ul

---

# 📘 Introduction

In this lesson, we learned about:

# Unordered Lists Using <ul> and <li>

is:

> The `<ul>` element defines an unordered (bulleted) list, and `<li>` elements represent individual list items.

---

# 🎯 Main Idea

Unordered lists display items with bullet points and can be nested inside other lists to create hierarchical content structures.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>43 - Unordered HTML Lists ul</title>
  </head>
  <body>
    <b>Simple Item List:</b>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    <b>Simple Item List:</b>
    <ul style="list-style-type: square">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <b>Simple Shopping List:</b>
    <ul>
      <li>Milk</li>
      <li>Bread</li>
      <li>Eggs</li>
    </ul>

    <b>List with Nested Unordered Lists:</b>
    <ul>
      <li>
        Fruits
        <ul>
          <li>Apples</li>
          <li>Oranges</li>
        </ul>
      </li>
      <li>
        Vegetables
        <ul>
          <li>Carrots</li>
          <li>Broccoli</li>
        </ul>
      </li>
    </ul>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Basic Unordered List

A simple bulleted list using the default disc bullet style.

```html
<b>Simple Item List:</b>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Custom List Style Type

The `list-style-type` property changes the bullet appearance to a square.

```html
<b>Simple Item List:</b>
<ul style="list-style-type: square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

## Nested Unordered Lists

Lists can be nested inside list items to create hierarchical structures.

```html
<b>List with Nested Unordered Lists:</b>
<ul>
  <li>
    Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Carrots</li>
      <li>Broccoli</li>
    </ul>
  </li>
</ul>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <ul> defines an unordered bulleted list
✔️ <li> defines each list item
✔️ Default bullet style is a filled circle (disc)
✔️ list-style-type can change bullets to square, circle, etc.
✔️ Lists can be nested inside <li> elements
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| ul | Unordered list container | `<ul>` |
| li | List item | `<li>Item</li>` |
| list-style-type | Changes bullet appearance | `list-style-type: square` |
| Nested list | List inside another list item | `<ul>` inside `<li>` |
| disc | Default filled circle bullet | Default style |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| ul | Unordered bulleted list |
| li | List item element |
| list-style-type | CSS property for bullet style |
| Nested list | Sublist inside a parent list item |
| Default bullet | Filled circle (disc) |

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
