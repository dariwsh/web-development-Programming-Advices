# Lesson 50 - Blockquotes Quotes and Citations in HTML

---

# 📘 Introduction

In this lesson, we learned about:

# Blockquotes, Quotes, and Citations in HTML

is:

> HTML provides specialized elements for quoting text and citing sources: `<q>` for inline short quotes, `<blockquote>` for longer block quotations, and `<cite>` for referencing creative works.

---

# 🎯 Main Idea

HTML offers three main elements for quotations: `<q>` for inline short quotes, `<blockquote>` for longer quoted passages with a `cite` attribute, and `<cite>` for citing titles of works or sources.

---

# 💡 Example

**A simple example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>50 - Blockquotes Quotes and Citations in HTML</title>
</head>
<body style="font-size: 20px;">
    <article>
        
        <p><b> Inline quote:</b></p>
    
        <!-- Introduction paragraph with an inline quote using <q> -->
        <p>As Shakespeare famously wrote in Hamlet,<b> <q>To be or not to be, that is the question.</q></b> This line, perhaps the most famous in English literature, encapsulates the core themes of the play.</p>
    
        <p><b>Blockquote:</b> </p>
     
        <!-- Blockquote to cite a significant passage from a literary critique -->
        <blockquote cite="https://example.com/critique">
            <!-- Use of <p> to format the text within the blockquote -->
            <p>"Shakespeare's exploration of existential dread in <cite>Hamlet</cite> is not merely a philosophical pondering but also a poignant reflection of the human condition."</p>
        </blockquote>

        <p><b>Citation to credit the source of the blockquote:</b> </p>
        <!-- Citation to credit the source of the blockquote -->
        <p>— Excerpt from an article found on <cite><a href="https://example.com/critique">Literary Daily</a></cite>.</p>
    
        <p><b>Citation to reference the work:</b> </p>
        <!-- Conclusion with another use of <cite> to reference the work -->
        <p>For more on this topic, see the detailed analysis in <cite>Understanding Shakespeare</cite> by Dr. Elizabeth Scholar.</p>


    </article>
    <hr>
    <hr>
    <article>
    <!-- Introduction paragraph with an inline quote using <q> -->
    <p>As Shakespeare famously wrote in Hamlet, <q>To be or not to be, that is the question.</q> This line, perhaps the most famous in English literature, encapsulates the core themes of the play.</p>

    <!-- Blockquote to cite a significant passage from a literary critique -->
    <blockquote cite="https://example.com/critique">
        <!-- Use of <p> to format the text within the blockquote -->
        <p>"Shakespeare's exploration of existential dread in <cite>Hamlet</cite> is not merely a philosophical pondering but also a poignant reflection of the human condition."</p>
    </blockquote>
    <!-- Citation to credit the source of the blockquote -->
    <p>— Excerpt from an article found on <cite><a href="https://example.com/critique">Literary Daily</a></cite>.</p>

    <!-- Conclusion with another use of <cite> to reference the work -->
    <p>For more on this topic, see the detailed analysis in <cite>Understanding Shakespeare</cite> by Dr. Elizabeth Scholar.</p>
</article>

<blockquote cite="https://source.com">
    <p>This is a quoted text from a source website.</p>
</blockquote>
</body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Inline Short Quotes with <q>

The `<q>` element is used for short inline quotations that do not require paragraph breaks. The browser typically adds quotation marks around the text.

```html
<p>As Shakespeare famously wrote in Hamlet, <q>To be or not to be, that is the question.</q> This line...</p>
```

## Block Quotations with <blockquote>

The `<blockquote>` element is used for longer quotations from external sources. The `cite` attribute provides the source URL.

```html
<blockquote cite="https://example.com/critique">
    <p>"Shakespeare's exploration of existential dread in <cite>Hamlet</cite> is not merely a philosophical pondering but also a poignant reflection of the human condition."</p>
</blockquote>
```

## Citing Sources with <cite>

The `<cite>` element is used to reference the title of a creative work or the source of a quotation. It can contain links.

```html
<p>— Excerpt from an article found on <cite><a href="https://example.com/critique">Literary Daily</a></cite>.</p>

<p>For more on this topic, see the detailed analysis in <cite>Understanding Shakespeare</cite> by Dr. Elizabeth Scholar.</p>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <q> is for short inline quotes
✔️ <blockquote> is for longer block-level quotes
✔️ The cite attribute on <blockquote> provides the source URL
✔️ <cite> references the title of a work or source
✔️ Browsers automatically add quotation marks to <q> content
✔️ <blockquote> typically renders with indentation
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| q | Inline short quote | `<q>To be or not to be</q>` |
| blockquote | Block-level long quote | `<blockquote cite="url">` |
| cite attribute | Source URL for blockquote | `cite="https://example.com"` |
| cite element | Title of referenced work | `<cite>Hamlet</cite>` |
| p inside blockquote | Paragraph within quote | `<p>"Quoted text"</p>` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| q | Inline quotation element |
| blockquote | Block-level quotation |
| cite attribute | Source URL for blockquote |
| cite element | Title or source reference |
| Purpose | Proper attribution and quotation |

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
