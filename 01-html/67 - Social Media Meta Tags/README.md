# Lesson 67 - Social Media Meta Tags

---

# 📘 Introduction

In this lesson, we learned about:

# Social Media Meta Tags

is:

> Social media meta tags provide structured data that controls how web pages appear when shared on social platforms like Facebook, LinkedIn, and Twitter.

---

# 🎯 Main Idea

Open Graph and Twitter Card meta tags allow developers to customize how their web pages look when shared on social media, including the title, description, image, and URL displayed.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
  <!-- Open Graph (Facebook / LinkedIn) -->
  <meta property="og:title" content="Darwish Programming | Frontend Developer" />
  <meta property="og:description" content="Explore my projects, skills, and frontend journey" />
  <meta property="og:image" content="https://yourdomain.com/banner.png" />
  <meta property="og:url" content="https://yourdomain.com" />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Darwish Programming" />
  <meta name="twitter:description" content="Frontend Developer Portfolio" />
  <meta name="twitter:image" content="https://yourdomain.com/banner.png" />

    <title>67 - Social Media Meta Tags</title>
  </head>
  <body></body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Part 1 - Open Graph Tags

Facebook and LinkedIn use Open Graph meta tags for sharing previews.

```html
<meta property="og:title" content="Darwish Programming | Frontend Developer" />
<meta property="og:description" content="Explore my projects, skills, and frontend journey" />
<meta property="og:image" content="https://yourdomain.com/banner.png" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:type" content="website" />
```

**Key Open Graph Properties:**
- `og:title`: Title of the shared content
- `og:description`: Description shown in the preview
- `og:image`: Image displayed in the preview
- `og:url`: Canonical URL of the page
- `og:type`: Content type (website, article, video, etc.)

## Part 2 - Twitter Card Tags

Twitter uses meta tags for rich card previews.

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Darwish Programming" />
<meta name="twitter:description" content="Frontend Developer Portfolio" />
<meta name="twitter:image" content="https://yourdomain.com/banner.png" />
```

**Key Twitter Card Properties:**
- `twitter:card`: Type of card (summary, summary_large_image, etc.)
- `twitter:title`: Title for the card
- `twitter:description`: Description for the card
- `twitter:image`: Image for the card

---

# 🧠 Rules / Key Concepts

```text
✔️ Open Graph tags use the property attribute
✔️ Twitter tags use the name attribute
✔️ og:image should be an absolute URL for proper display
✔️ Summary cards show a small image; summary_large_image shows a large one
✔️ Social meta tags improve click-through rates on shared links
✔️ Both OG and Twitter tags can coexist on the same page
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `og:title` | Open Graph title | `<meta property="og:title" content="...">` |
| `og:description` | Open Graph description | `<meta property="og:description" content="...">` |
| `og:image` | Open Graph image | `<meta property="og:image" content="...">` |
| `og:url` | Open Graph URL | `<meta property="og:url" content="...">` |
| `twitter:card` | Twitter card type | `<meta name="twitter:card" content="summary_large_image">` |
| `twitter:title` | Twitter card title | `<meta name="twitter:title" content="...">` |
| `twitter:image` | Twitter card image | `<meta name="twitter:image" content="...">` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| Open Graph | Metadata protocol for social sharing |
| `og:title` | Title shown when sharing |
| `og:description` | Description shown when sharing |
| `og:image` | Image displayed in the share preview |
| Twitter Card | Twitter-specific sharing metadata |
| `twitter:card` | Type of Twitter card preview |

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
