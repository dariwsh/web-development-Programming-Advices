# Lesson 38 - Button as Link

---

# 📘 Introduction

In this lesson, we learned about:

# Using Buttons as Links in HTML

is:

> Buttons can be used as clickable links by attaching JavaScript code to the onclick event handler.

---

# 🎯 Main Idea

HTML buttons can perform navigation actions similar to links by using JavaScript's `window.location.href` for same-tab navigation and `window.open()` for new-tab or popup window navigation.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>38 - Button as Link</title>
  </head>
  <body>
    <h1>Button as Link</h1>
    <p>Click the button to below to vist programming advice</p>
    <p>
      <button
        onclick="window.location.href = 'https://www.programmingAdvices.com'"
      >
        Visit Programming Advices
      </button>
    </p>

    <p>
      <button
        onclick="window.open('https://www.programmingAdvices.com', '_blank')"
      >
        Visit Programming Advices
      </button>
    </p>

    <p>
      <button
        onclick="
          window.open(
            'https://www.programmingAdvices.com',
            '_blank',
            'width=800,height=600',
          )
        "
      >
        Visit Programming Advices
      </button>
    </p>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Same-Tab Navigation with window.location.href

Use `window.location.href` to navigate the current browser tab to a new URL.

```html
<button onclick="window.location.href = 'https://www.programmingAdvices.com'">
  Visit Programming Advices
</button>
```

## New-Tab Navigation with window.open

Use `window.open()` with `_blank` to open the URL in a new browser tab.

```html
<button onclick="window.open('https://www.programmingAdvices.com', '_blank')">
  Visit Programming Advices
</button>
```

## Popup Window with Custom Dimensions

Use `window.open()` with a third parameter to specify popup window dimensions.

```html
<button
  onclick="
    window.open(
      'https://www.programmingAdvices.com',
      '_blank',
      'width=800,height=600',
    )
  "
>
  Visit Programming Advices
</button>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ onclick is an HTML event attribute that runs JavaScript when clicked
✔️ window.location.href changes the current page URL
✔️ window.open() opens a new browser window or tab
✔️ '_blank' is the target value for opening in a new tab
✔️ The third parameter of window.open() sets popup features like width and height
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| onclick | JavaScript event on click | `onclick="..."` |
| window.location.href | Navigate current tab | `window.location.href = 'url'` |
| window.open | Open new window/tab | `window.open(url, target, features)` |
| _blank | Target value for new tab | `'_blank'` |
| width/height | Popup window dimensions | `'width=800,height=600'` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| Button as Link | Using <button> for navigation |
| onclick | Event handler for mouse clicks |
| window.location.href | Change current page URL |
| window.open | Open URL in new tab or popup |
| _blank | Open in new tab target |

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
