# Lesson 31 - Linking to an Email Address

---

# 📘 Introduction

In this lesson, we learned about:

# Linking to an Email Address

is:

> The `mailto:` protocol in an anchor tag opens the user's default email client and pre-fills the recipient, subject, body, CC, and BCC fields.

---

# 🎯 Main Idea

Email links use `href="mailto:..."` to create clickable actions that launch an email client. You can add query parameters to pre-populate fields like subject and body, making communication faster for users.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>31 - Linking to an Email Address</title>
  </head>
  <body>
    <h1>Linking to an Email Address</h1>
    <p>Click the link below to send an email:</p>
    <a href="mailto:darwish.programming@gmail.com">Send Email </a>
    <br />
    <a
      href="mailto:example@example.com?cc=another@example.com&bcc=secret@example.com&subject=Greetings&body=Hi there,"
      >Send a Detailed Email</a
    >

    <b>Linking Email Address:</b>
    <p>
      Email us at <a href="mailto:support@example.com">support@example.com</a>.
    </p>

    <b>Advanced Usage of mailto:</b>
    <p>
      Email us at
      <a
        href="mailto:example@example.com?cc=another@example.com&bcc=secret@example.com&subject=Greetings&body=Hi there,"
        >Send a Detailed Email</a
      >.
    </p>
  </body>
</html>
```

---

# ✨ Key Points

**Basic Email Link:**

```html
<a href="mailto:darwish.programming@gmail.com">Send Email</a>
```

**Advanced Email Link:**

```html
<a href="mailto:example@example.com?cc=another@example.com&bcc=secret@example.com&subject=Greetings&body=Hi there,">
  Send a Detailed Email
</a>
```

---

# 🧠 Rules of mailto Links

```text
✔️ Use mailto: before the email address
✔️ Separate multiple parameters with &
✔️ Use ? before the first parameter
✔️ CC and BCC accept multiple addresses
✔️ Spaces in body must be URL encoded
```

---

# 🧩 mailto Parameters

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `cc` | Carbon copy recipients | `cc=another@example.com` |
| `bcc` | Blind carbon copy | `bcc=secret@example.com` |
| `subject` | Email subject line | `subject=Greetings` |
| `body` | Pre-filled message body | `body=Hi there,` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| mailto | Protocol for opening email client |
| href | Contains the mailto URL |
| cc | Carbon copy recipients |
| bcc | Blind carbon copy recipients |
| subject | Pre-filled email subject |
| body | Pre-filled email message |

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
