# Lesson 52 - Understanding the HTML video Tag

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Video Tag

is:

> The `<video>` element is used to embed video content in an HTML document. It supports multiple source formats, subtitles via `<track>`, and various playback attributes.

---

# 🎯 Main Idea

The HTML `<video>` element allows developers to embed video players directly into web pages with fallback support and multiple source formats for broader browser compatibility.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>52 - Understanding the HTML video Tag</title>
  </head>
  <body>
    <p align="center">
      <video controls poster="Thumb.jpg" width="640" height="360" muted autoplay loop >
        <source src="Funny.mp4" type="video/mp4" />
        <source src="Funny.webm" type="video/webm" />
        <track
          src="subtitles_en.vtt"
          kind="subtitles"
          srclang="en"
          label="English"
        />
        <track
          src="subtitles_de.vtt"
          kind="subtitles"
          srclang="de"
          label="Deutsch"
        />
        Your browser does not support the video tag.
      </video>
    </p>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## The `<video>` Element

The main container for embedding video content in HTML.

```html
<video controls poster="Thumb.jpg" width="640" height="360" muted autoplay loop>
```

**Key Attributes:**
- `controls`: Displays playback controls
- `poster`: Image shown before video plays
- `width` / `height`: Dimensions of the video player
- `muted`: Starts with audio muted
- `autoplay`: Automatically starts playback
- `loop`: Repeats the video continuously

## `<source>` Element

Allows specifying multiple video formats for browser compatibility.

```html
<source src="Funny.mp4" type="video/mp4" />
<source src="Funny.webm" type="video/webm" />
```

## `<track>` Element

Adds subtitles, captions, or other timed text tracks to the video.

```html
<track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
```

## Fallback Content

Text displayed if the browser does not support the `<video>` element.

```html
Your browser does not support the video tag.
```

---

# 🧠 Rules / Key Concepts

```text
✔️ Always provide fallback content inside the <video> tag
✔️ Use multiple <source> elements for cross-browser compatibility
✔️ Specify the type attribute on each <source> element
✔️ The browser will use the first supported format
✔️ <track> elements allow subtitles and captions
✔️ Common video formats: MP4, WebM, Ogg
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `<video>` | Video container element | `<video controls>` |
| `controls` | Shows playback controls | `controls` |
| `poster` | Thumbnail before playback | `poster="Thumb.jpg"` |
| `<source>` | Alternative video source | `<source src="video.mp4">` |
| `<track>` | Subtitle or caption track | `<track src="subs.vtt">` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| `<video>` | Embeds video content in web pages |
| `controls` | Displays playback controls |
| `poster` | Shows an image before video plays |
| `<source>` | Provides multiple video formats |
| `<track>` | Adds subtitles and captions |
| `muted` | Mutes the audio by default |

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
