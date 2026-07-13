# Lesson 03 - Adding CSS to Our Example

---

# 📘 Introduction

In this lesson, we learned about:

# Adding CSS to Our HTML Example

> In this lesson, we take a plain HTML page and enhance it using **CSS (Cascading Style Sheets)**.
> We apply styles directly inside the HTML file using the `<style>` tag to change fonts, colors, and backgrounds.

---

# 🎯 Main Idea

CSS is used to **transform a plain HTML page** into a visually styled one by controlling:

| Property             | What It Does              | Example               |
| -------------------- | ------------------------- | --------------------- |
| **font-family**      | Changes the text font     | `Arial, sans-serif`   |
| **background-color** | Sets the background color | `#f0f0f0`             |
| **color**            | Changes the text color    | `blue`, `#333`, `red` |
| **font-size**        | Controls the text size    | `16px`                |

> By adding a `<style>` block inside the `<head>`, we can style the entire page without changing the HTML structure.

---

# 💡 Example

**Our HTML page with CSS added:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>03 - Adding CSS to Our Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
      }

      h1 {
        color: blue;
      }

      p {
        color: #333;
        font-size: 16px;
      }

      b {
        color: red;
      }
    </style>
  </head>

  <body>
    <h1>Welcome to HTML</h1>
    <p>This is my <b>First</b> paragraph.</p>
    <p>This is my <b>Second</b> paragraph</p>
    <p>This is my third <b>paragraph</b></p>
  </body>
</html>
```

---

# ✨ Breaking Down the CSS

## 🎨 Styling the Body

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}
```

> `font-family` sets the font for the entire page.
> `background-color` gives the page a light gray background instead of plain white.

---

## 🔵 Styling the Heading

```css
h1 {
  color: blue;
}
```

> The `<h1>` heading text becomes **blue**, making it stand out from the rest of the page.

---

## 📝 Styling the Paragraphs

```css
p {
  color: #333;
  font-size: 16px;
}
```

> Paragraphs get a **dark gray** color (`#333`) and a readable `16px` font size.

---

## 🔴 Styling the Bold Text

```css
b {
  color: red;
}
```

> All `<b>` (bold) elements become **red**, creating visual contrast with the paragraph text.

---

# 🔗 How Internal CSS Works

```text
1. The browser reads the HTML document from top to bottom
2. It encounters the <style> tag inside the <head>
3. It parses the CSS rules and stores them
4. As it renders the <body>, it applies matching styles to each element
5. The user sees a styled page instead of plain text
```

```text
   Plain HTML
       ↓
   Add <style> in <head>
       ↓
   Write CSS Rules (selectors + properties)
       ↓
   🎨 Styled Web Page
```

---

# 🧠 Key Concepts

```text
✔️ CSS stands for Cascading Style Sheets
✔️ The <style> tag goes inside the <head> element
✔️ CSS uses selectors to target HTML elements (body, h1, p, b)
✔️ Each rule has a selector and a declaration block { property: value; }
✔️ Colors can be specified by name (blue, red) or hex code (#333, #f0f0f0)
✔️ font-family sets the typeface for text
✔️ background-color changes the background of an element
✔️ font-size controls how large text appears
```

---

# 🔥 Important Rules

```text
🚫 Don't use inline styles when you can use internal or external CSS
🚫 Don't forget the semicolon (;) at the end of each CSS property
🚫 Don't forget curly braces {} around the declaration block

✅ Place the <style> tag inside the <head>
✅ Use element selectors to style all elements of that type
✅ Use hex colors for precise color control
✅ Keep CSS organized and readable
```

---

# 🧩 CSS Selectors Used in This Lesson

| Selector | What It Targets         | Example                               |
| -------- | ----------------------- | ------------------------------------- |
| `body`   | The entire page body    | `body { background-color: #f0f0f0; }` |
| `h1`     | All `<h1>` headings     | `h1 { color: blue; }`                 |
| `p`      | All `<p>` paragraphs    | `p { color: #333; }`                  |
| `b`      | All `<b>` bold elements | `b { color: red; }`                   |

> These are called **Element Selectors** (or **Type Selectors**) — they target all elements of a specific HTML tag.

---

# 🧩 Ways to Add CSS (Review)

| Method       | Example                                    | Used Here? |
| ------------ | ------------------------------------------ | ---------- |
| **Inline**   | `<p style="color: red;">`                  | ❌ No      |
| **Internal** | `<style>` inside `<head>`                  | ✅ Yes     |
| **External** | `<link rel="stylesheet" href="style.css">` | ❌ No      |

---

# ✅ Summary

| Concept          | Meaning                                            |
| ---------------- | -------------------------------------------------- |
| Internal CSS     | Writing CSS inside a `<style>` tag in the `<head>` |
| Element Selector | Targeting elements by their tag name (h1, p, b)    |
| font-family      | Sets the font used for text                        |
| background-color | Changes the background color of an element         |
| color            | Changes the text color                             |
| font-size        | Sets the size of the text                          |
| Hex Colors       | Color values like `#f0f0f0` and `#333`             |

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
