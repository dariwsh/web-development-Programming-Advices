# Lesson 64 - Core Document Metadata in HTML

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Document Metadata

is:

> Metadata in HTML is data about the document that is not displayed on the page. The `<meta>` element is used to specify character encoding, page description, keywords, author, and more.

---

# 🎯 Main Idea

HTML metadata provides search engines, browsers, and other web services with information about the document, improving SEO, accessibility, and user experience.

---

# 💡 Example

**A simple example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"> <!-- Specifies the character encoding for the HTML document -->
    
    <meta name="language" content="English"> <!-- Specifies the primary language of the document's content -->

    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Sets the viewport to control layout on mobile browsers -->

    <meta name="description" content="An overview of HTML metadata elements and their uses."> <!-- Provides a concise summary of the page content -->
   
    <meta name="keywords" content="HTML, metadata, SEO, web development"> <!-- Lists relevant keywords for the document -->
    
    <meta name="author" content="Jane Doe"> <!-- Credits the author of the content -->

    <meta name="revised" content="Saturday, September 7th, 2025, 5:15 pm"> <!-- Shows the last modification date -->

    <meta name="copyright" content="Copyright 2022 Jane Doe"> <!-- Declares copyright ownership -->

    <meta name="robots" content="noindex, nofollow"> <!-- Directs search engines on how to index and link to the page -->

    <meta name="generator" content="WordPress 5.9"> <!-- Identifies the tool used to generate the page -->

    <meta name="revisit-after" content="7 days"> <!-- Suggests how often search engines should revisit the page -->

    <meta name="rating" content="general"> <!-- Rates the content for age appropriateness [General, Mature, 14 years old, Safe for Kids, Adult ..etc]-->
    
    <meta name="application-name" content="HTML Metadata Guide"> <!-- Names the web application -->

    <meta name="theme-color" content="#5a67d8"> <!-- Suggests a color that the browser might use to customize the display -->
    
    <title>Core Document Metadata in HTML</title>
</head>
<body>
    <h1>Welcome to Our Tutorial on HTML Metadata</h1>
</body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Character Encoding

Specifies the character set used in the document.

```html
<meta charset="utf-8">
```

## Page Description

Provides a concise summary for search engines.

```html
<meta name="description" content="An overview of HTML metadata elements and their uses.">
```

## Keywords

Lists relevant keywords for SEO.

```html
<meta name="keywords" content="HTML, metadata, SEO, web development">
```

## Author and Copyright

Credits the content creator.

```html
<meta name="author" content="Jane Doe">
<meta name="copyright" content="Copyright 2022 Jane Doe">
```

## Robots Directive

Controls how search engines interact with the page.

```html
<meta name="robots" content="noindex, nofollow">
```

## Theme Color

Sets the browser UI color theme.

```html
<meta name="theme-color" content="#5a67d8">
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <meta> elements go inside the <head> element
✔️ charset specifies character encoding (UTF-8 is recommended)
✔️ description appears in search engine results
✔️ keywords help with SEO discoverability
✔️ author and copyright identify content ownership
✔️ robots controls search engine indexing behavior
✔️ theme-color customizes browser UI on mobile devices
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `charset` | Character encoding | `<meta charset="utf-8">` |
| `description` | Page summary for SEO | `<meta name="description" content="...">` |
| `keywords` | SEO keywords | `<meta name="keywords" content="...">` |
| `author` | Content author | `<meta name="author" content="Jane Doe">` |
| `robots` | Search engine rules | `<meta name="robots" content="index, follow">` |
| `theme-color` | Browser UI color | `<meta name="theme-color" content="#5a67d8">` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| `<meta charset>` | Character encoding |
| `description` | Page summary for search engines |
| `keywords` | SEO keywords |
| `author` | Content author |
| `robots` | Search engine indexing rules |
| `theme-color` | Browser UI color |
| `language` | Document language |

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
