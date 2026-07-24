# Lesson 32 - Linking to a phone number

---

# 📘 Introduction

In this lesson, we learned about:

# Linking to a Phone Number

is:

> The `tel:` protocol in an anchor tag creates a clickable link that initiates a phone call through the user's device calling app or dialer.

---

# 🎯 Main Idea

Phone links use `href="tel:..."` to allow users to tap a number and immediately start a call on mobile devices or desktop VoIP apps. It is essential for contact pages and mobile-first websites.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>32 - Linking to a phone number</title>
  </head>
  <body>
    <p>Linking to a phone number is done using the</p>
    <p><a href="tel:+1234567890">Call us </a></p>
  </body>
</html>
```

---

# ✨ Key Points

**Basic Phone Link:**

```html
<a href="tel:+1234567890">Call us</a>
```

**With Country Code:**

```html
<a href="tel:+201234567890">Call Egypt</a>
```

---

# 🧠 Rules of tel Links

```text
✔️ Use tel: before the phone number
✔️ Include the plus sign and country code
✔️ Works on mobile and desktop with calling apps
✔️ Number format is usually E.164
```

---

# 🧩 Phone Number Formats

| Format | Example | Description |
|--------|---------|-------------|
| With country code | `tel:+1234567890` | International format |
| Local | `tel:0123456789` | Local format |
| With dashes | `tel:+1-234-567-890` | Formatted number |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| tel | Protocol for phone links |
| href | Contains the tel URL |
| Country Code | + followed by country digits |
| E.164 | International standard phone format |
| Mobile First | Works best on smartphones |

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
