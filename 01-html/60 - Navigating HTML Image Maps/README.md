# Lesson 60 - Navigating HTML Image Maps

---

# 📘 Introduction

In this lesson, we learned about:

# HTML Image Maps

is:

> Image maps allow you to create clickable areas on an image, where each area links to a different destination. They use the `<map>` and `<area>` elements.

---

# 🎯 Main Idea

HTML image maps enable defining regions on an image as clickable links, with each region linking to a different page or URL.

---

# 💡 Example

**A simple example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>60 - Navigating HTML Image Maps</title>
</head>
<body>

<h1>The map and area elements</h1>

<p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>

<img src="images/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
<!-- Embeds an image that uses a map for defining clickable areas. 
     The 'usemap' attribute links this image to the map defined below with the name "workmap". -->

<map name="workmap">
  <!-- The map element where the name attribute must correspond to the usemap attribute in the img tag. -->
  
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="Computer.html">
  <!-- Defines a rectangular clickable area over the image where the computer is located.
       The 'coords' attribute specifies the top-left and bottom-right corners of the rectangle.
       Clicking within this rectangle navigates to 'Computer.html'. -->

  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.html">
  <!-- Another rectangle for the phone area, linking to 'phone.html'. -->

  <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.html">
  <!-- A circular area defined around the cup of coffee, where 'coords' specifies the center
       and radius of the circle. Clicking this circle navigates to 'coffee.html'. -->
</map>

</body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## The `<img>` with `usemap`

Links an image to an image map definition.

```html
<img src="images/workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
```

**Key Attribute:**
- `usemap`: Links the image to a `<map>` element by name (prefixed with `#`)

## The `<map>` Element

Defines the clickable regions for the image.

```html
<map name="workmap">
  <!-- area elements go here -->
</map>
```

**Key Attribute:**
- `name`: Must match the `usemap` value on the image

## The `<area>` Element

Defines individual clickable regions.

```html
<area shape="rect" coords="34,44,270,350" alt="Computer" href="Computer.html">
<area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.html">
```

**Key Attributes:**
- `shape`: The shape of the clickable area (`rect`, `circle`, `poly`)
- `coords`: Coordinates defining the area (varies by shape)
- `alt`: Alternative text for accessibility
- `href`: The URL to navigate to when clicked

---

# 🧠 Rules / Key Concepts

```text
✔️ The usemap attribute on <img> links to a <map> by name
✔️ The name attribute on <map> must match the usemap value (without #)
✔️ <area> shapes: rect, circle, poly
✔️ rect coords: x1,y1,x2,y2
✔️ circle coords: center-x,center-y,radius
✔️ poly coords: x1,y1,x2,y2,x3,y3,...
✔️ Always provide alt text on <area> for accessibility
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| `usemap` | Links image to map | `usemap="#workmap"` |
| `<map>` | Defines clickable regions | `<map name="workmap">` |
| `<area>` | Individual clickable shape | `<area shape="rect" coords="..." href="...">` |
| `shape="rect"` | Rectangular area | `shape="rect"` |
| `shape="circle"` | Circular area | `shape="circle"` |
| `shape="poly"` | Polygonal area | `shape="poly"` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| Image Map | Clickable areas on an image |
| `<map>` | Container for clickable regions |
| `<area>` | Defines a single clickable region |
| `usemap` | Links an image to its map |
| `shape` | Defines the area shape |
| `coords` | Defines the position of the area |

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
