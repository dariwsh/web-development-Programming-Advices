# Lesson 40 - rel Attribute in HTML a Tags

---

# 📘 Introduction

In this lesson, we learned about:

# The ping Attribute in Anchor Tags

is:

> The ping attribute sends POST requests to specified URLs when a link is clicked, useful for tracking link clicks without interrupting navigation.

---

# 🎯 Main Idea

The `ping` attribute on an anchor tag contains space-separated URLs that the browser sends POST requests to when the link is clicked, enabling analytics and click tracking while the user navigates to the main destination.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>40 - rel Attribute in HTML a Tags</title>
  </head>
  <body>
    <h1>Ping Attribute Example</h1>
    <p>
      To learn Programming the right way Check out this
      <a
        href="https://www.programmingAdvices.com"
        ping="https://www.analyticsprovider.com/track?event=linkClick https://www.othertracker.com/logger"
        target="_blank"
      >
        vist ProgrammingAdvices.com </a
      >!
    </p>

    <!-- Explanation of the Example:
        href="https://www.programmingAdvices.com": The main link that the user will navigate to upon clicking the anchor.
        ping="https://www.analyticsprovider.com/track?event=linkClick https://www.othertracker.com/logger": This attribute contains two URLs, separated by spaces. 
        
        Each URL is a destination where the browser will send POST requests when the link is clicked. 
        These requests help in tracking that the link was clicked, without interrupting the user's navigation to "https://www.ProgrammingAdvices.com".

        target="_blank": Opens the linked document in a new tab or window. -->
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Main Navigation Link

The `href` attribute defines the primary destination the user will navigate to when clicking the link.

```html
href="https://www.programmingAdvices.com"
```

## Ping Tracking URLs

The `ping` attribute contains one or more space-separated URLs that receive POST requests on link click, enabling click tracking.

```html
ping="https://www.analyticsprovider.com/track?event=linkClick https://www.othertracker.com/logger"
```

## Target Behavior

The `target="_blank"` attribute opens the linked document in a new browser tab or window.

```html
target="_blank"
```

---

# 🧠 Rules / Key Concepts

```text
✔️ ping attribute sends POST requests to tracking URLs
✔️ Multiple ping URLs are separated by spaces
✔️ ping requests happen in the background without blocking navigation
✔️ Useful for analytics, marketing, and link click tracking
✔️ target="_blank" opens the link in a new tab
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| href | Main link destination | `href="https://..."` |
| ping | Tracking URLs for click events | `ping="url1 url2"` |
| target="_blank" | Opens in new tab | `target="_blank"` |
| POST request | Background request sent on click | Analytics tracking |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| ping attribute | Tracks link clicks via POST requests |
| Tracking URL | Receives analytics data on click |
| target="_blank" | Opens link in new tab |
| Background request | Does not interrupt user navigation |

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
