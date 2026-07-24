# Lesson 21 - How Browsers Deal With Images

---

# 📘 Introduction

In this lesson, we learned about:

# How Browsers Deal With Images

is:

> Browsers render HTML progressively, showing text before images. Specifying width and height prevents layout shifts (CLS), while lazy loading defers off-screen images to improve performance.

---

# 🎯 Main Idea

Browsers do not wait for images to load before displaying page content. Without explicit dimensions, images can cause layout shifts. Providing width and height attributes reserves space, and lazy loading improves page speed by deferring non-critical images.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>21 - How Browsers Deal With Images</title>

    <style>
      body {
        font-family: Arial;
        background-color: #f5f5f5;
      }

      .container {
        width: 80%;
        margin: auto;
      }

      .box {
        margin: 20px 0;
      }

      img {
        display: block;
        margin-top: 10px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1>How Browser Deals With Images</h1>

      <!-- TEXT يظهر الأول (Progressive Rendering) -->
      <div class="box">
        <p>ده نص هيظهر فورًا قبل الصورة عشان المتصفح مش بيستنى الصور.</p>
      </div>

      <!-- صورة بدون تحديد حجم (غلط) -->
      <div class="box">
        <h3>❌ بدون Width & Height</h3>
        <img src="https://picsum.photos/600/400" />
        <p>هتلاحظ إن الصفحة ممكن تتحرك لما الصورة تحمل.</p>
      </div>

      <!-- صورة مع تحديد حجم (صح) -->
      <div class="box">
        <h3>✅ مع Width & Height</h3>
        <img
          src="https://picsum.photos/600/400"
          width="600"
          height="400"
          alt="Random image"
        />
        <p>المتصفح حجز مكان للصورة → مفيش اهتزاز.</p>
      </div>

      <!-- صورة بطيئة التحميل -->
      <div class="box">
        <h3>⏳ صورة بتتحمل في الخلفية</h3>
        <img src="https://picsum.photos/800/500" alt="Slow loading image" />
        <p>الصفحة ظهرت قبل الصورة → Non-blocking</p>
      </div>

      <!-- صورة من CDN -->
      <div class="box">
        <h3>🌍 صورة من CDN</h3>
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          width="500"
          height="300"
          alt="Tree image"
        />
        <p>الصورة جاية من سيرفر قريب → أسرع</p>
      </div>

      <!-- SVG icon -->
      <div class="box">
        <h3>🎯 SVG Icon</h3>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/SVG_Logo.svg"
          width="100"
          alt="SVG logo"
        />
        <p>SVG بيحافظ على الجودة مهما كبرته</p>
      </div>
    </div>
  </body>
</html>
```

---

# ✨ Key Points

**Progressive Rendering:**

```html
<p>Text appears immediately before images load.</p>
```

**Width and Height Attributes:**

```html
<img src="image.jpg" width="600" height="400" alt="Random image" />
```

**Lazy Loading:**

```html
<img src="image.jpg" loading="lazy" alt="Lazy loaded image" />
```

**CDN Images:**

```html
<img src="https://cdn.example.com/image.jpg" width="500" height="300" alt="CDN image" />
```

---

# 🧠 Rules of Image Handling

```text
✔️ Browsers render text before images (progressive rendering)
✔️ Always specify width and height to prevent layout shifts
✔️ Use loading="lazy" for images below the fold
✔️ CDN images load faster due to geographic proximity
✔️ SVG images scale without quality loss
```

---

# 🧩 Image Handling Summary

| Feature | Purpose | Example |
|---------|---------|---------|
| Progressive Rendering | Text appears before images | `<p>Content</p>` before `<img>` |
| Width & Height | Reserve space, prevent shifts | `width="600" height="400"` |
| Lazy Loading | Defer off-screen images | `loading="lazy"` |
| CDN | Faster delivery via nearby servers | `https://cdn.pixabay.com/...` |
| SVG | Scalable vector graphics | `SVG_Logo.svg` |

---

# ✅ Summary

| Concept | Meaning |
|---------|---------|
| Progressive Rendering | Browser shows text before images load |
| Layout Shift | Page movement caused by unmeasured images |
| Lazy Loading | Deferred loading for off-screen content |
| CDN | Content Delivery Network for faster images |
| SVG | Vector format that scales without quality loss |

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
