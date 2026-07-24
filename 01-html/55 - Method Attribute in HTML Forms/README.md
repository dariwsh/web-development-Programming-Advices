# Lesson 55 - Method Attribute in HTML Forms

---

# 📘 Introduction

In this lesson, we learned about:

# Form Methods (GET and POST)

is:

> The `method` attribute in an HTML `<form>` specifies how form data is sent to the server. The two values are `GET` and `POST`.

---

# 🎯 Main Idea

The HTML form `method` attribute determines how form data is transmitted to the server. GET appends data to the URL while POST sends it in the HTTP request body.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>55 - Method Attribute in HTML Forms</title>
  </head>
  <body>
   <form action="search.php" method="get">
     <fieldset>
      <legend>Form Method Example Get</legend>
      <label for="search">Search:</label>
      <input type="text" id="search" name="search" required /><br />
      <button type="submit">Search</button>
    </fieldset>
    
   </form>
   <form action="submit.php" method="post">
    <fieldset>
      <legend>Form Method Example Post</legend>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required /><br />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required /><br />
      <button type="submit">Submit</button>
    </fieldset>
   </form>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Part 1 - GET Method

The GET method appends form data to the URL as a query string.

```html
<form action="search.php" method="get">
  <fieldset>
    <legend>Form Method Example Get</legend>
    <label for="search">Search:</label>
    <input type="text" id="search" name="search" required /><br />
    <button type="submit">Search</button>
  </fieldset>
</form>
```

**GET method is used for:**
- Searching data
- Retrieving information
- Bookmarkable results

## Part 2 - POST Method

The POST method sends form data in the HTTP request body.

```html
<form action="submit.php" method="post">
  <fieldset>
    <legend>Form Method Example Post</legend>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required /><br />
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required /><br />
    <button type="submit">Submit</button>
  </fieldset>
</form>
```

**POST method is used for:**
- Submitting sensitive data
- Uploading files
- Creating or updating records

---

# 🧠 Rules / Key Concepts

```text
✔️ GET appends form data to the URL as query parameters
✔️ POST sends form data in the request body
✔️ GET is suitable for non-sensitive data and searches
✔️ POST is used for sensitive data like passwords
✔️ GET has size limitations; POST has none
✔️ GET requests can be cached and bookmarked; POST requests cannot
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `method="get"` | Data appended to URL | `<form method="get">` |
| `method="post"` | Data sent in body | `<form method="post">` |
| `action` | Server endpoint | `action="submit.php"` |
| `name` | Input identifier | `name="search"` |
| `required` | Mandatory field | `required` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| GET | Appends data to the URL |
| POST | Sends data in the request body |
| `method` | Specifies how to send data |
| `action` | Specifies where to send data |
| `name` | Identifies the input for the server |
| `required` | Makes a field mandatory |

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
