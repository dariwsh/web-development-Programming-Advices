# Lesson 42 - Understanding URL Encoding

---

# 📘 Introduction

In this lesson, we learned about:

# URL Encoding (Percent-Encoding)

is:

> URL encoding converts characters into a format that can be safely transmitted over the Internet by replacing unsafe characters with percent signs followed by hexadecimal codes.

---

# 🎯 Main Idea

URL encoding ensures that special characters in URLs are properly formatted using JavaScript's `encodeURIComponent()` and `decodeURIComponent()` functions, making web addresses safe and valid for transmission.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="ar">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>42 - Understanding URL Encoding</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background: #f5f5f5;
      }
      .container {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
      }
      input,
      textarea {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-family: monospace;
      }
      button {
        background: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin: 10px 5px 10px 0;
      }
      button:hover {
        background: #0056b3;
      }
      .result {
        background: #f9f9f9;
        padding: 15px;
        margin: 15px 0;
        border-left: 4px solid #007bff;
        border-radius: 4px;
      }
      .label {
        font-weight: bold;
        margin-top: 15px;
        color: #333;
      }
      code {
        background: #f0f0f0;
        padding: 2px 6px;
        border-radius: 3px;
        font-family: monospace;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>🔐 URL Encoding Tester</h1>

      <div>
        <div class="label">اكتب النص اللي تبي تحوله:</div>
        <input
          type="text"
          id="input"
          placeholder="مثال: hello world"
          value="hello world"
        />
      </div>

      <div>
        <button onclick="encodeText()">🔒 Encode</button>
        <button onclick="decodeText()">🔓 Decode</button>
        <button onclick="clearAll()">🗑️ Clear</button>
      </div>

      <div id="results"></div>

      <!-- مثال عملي -->
      <div>
        <div class="label">📌 مثال عملي: Search Query</div>
        <input
          type="text"
          id="searchInput"
          placeholder="ابحث عن..."
          value="python tutorial"
        />
        <button onclick="createSearchURL()">🔗 Create Search URL</button>
        <div id="urlResult"></div>
      </div>

      <!-- جدول الرموز -->
      <div style="margin-top: 30px">
        <div class="label">📊 جدول الأحرف الشهيرة:</div>
        <table style="width: 100%; border-collapse: collapse">
          <tr style="background: #007bff; color: white">
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd">
              الحرف
            </th>
            <th style="padding: 10px; text-align: left; border: 1px solid #ddd">
              Encoded
            </th>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd">Space ( )</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%20</code>
            </td>
          </tr>
          <tr style="background: #f9f9f9">
            <td style="padding: 10px; border: 1px solid #ddd">&</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%26</code>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd">=</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%3D</code>
            </td>
          </tr>
          <tr style="background: #f9f9f9">
            <td style="padding: 10px; border: 1px solid #ddd">?</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%3F</code>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd">#</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%23</code>
            </td>
          </tr>
          <tr style="background: #f9f9f9">
            <td style="padding: 10px; border: 1px solid #ddd">+</td>
            <td style="padding: 10px; border: 1px solid #ddd">
              <code>%2B</code>
            </td>
          </tr>
        </table>
      </div>
    </div>

    <script>
      function encodeText() {
        const input = document.getElementById("input").value;
        if (!input) {
          alert("اكتب نص أولاً!");
          return;
        }

        const encoded = encodeURIComponent(input);
        displayResult("Encoded:", encoded);
      }

      function decodeText() {
        const input = document.getElementById("input").value;
        if (!input) {
          alert("اكتب نص أولاً!");
          return;
        }

        try {
          const decoded = decodeURIComponent(input);
          displayResult("Decoded:", decoded);
        } catch (e) {
          alert("خطأ في فك التشفير: " + e.message);
        }
      }

      function displayResult(label, text) {
        const results = document.getElementById("results");
        results.innerHTML = `
            <div class="result">
                <strong>${label}</strong><br>
                <code>${text}</code><br>
                <button onclick="copyToClipboard('${text}')">📋 Copy</button>
            </div>
        `;
      }

      function createSearchURL() {
        const searchTerm = document.getElementById("searchInput").value;
        if (!searchTerm) {
          alert("اكتب حد للبحث عنه!");
          return;
        }

        const encoded = encodeURIComponent(searchTerm);
        const fullURL = `https://www.example.com/search?query=${encoded}&category=all`;

        document.getElementById("urlResult").innerHTML = `
            <div class="result">
                <strong>Search Term:</strong> ${searchTerm}<br>
                <strong>Encoded:</strong> <code>${encoded}</code><br>
                <strong>Full URL:</strong><br>
                <code style="display: block; word-break: break-all; padding: 10px; background: #f0f0f0;">${fullURL}</code>
                <button onclick="copyToClipboard('${fullURL}')">📋 Copy URL</button>
            </div>
        `;
      }

      function copyToClipboard(text) {
        navigator.clipboard
          .writeText(text)
          .then(() => {
            alert("✅ Copied to clipboard!");
          })
          .catch(() => {
            alert("❌ Failed to copy");
          });
      }

      function clearAll() {
        document.getElementById("input").value = "";
        document.getElementById("searchInput").value = "python tutorial";
        document.getElementById("results").innerHTML = "";
        document.getElementById("urlResult").innerHTML = "";
      }
    </script>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Interactive URL Encoding Tester

An interactive web app that lets users encode and decode text using JavaScript functions.

```html
<div class="label">اكتب النص اللي تبي تحوله:</div>
<input
  type="text"
  id="input"
  placeholder="مثال: hello world"
  value="hello world"
/>
<button onclick="encodeText()">🔒 Encode</button>
<button onclick="decodeText()">🔓 Decode</button>
```

## Search URL Builder

A practical example showing how to safely create a search URL with encoded query parameters.

```html
<div class="label">📌 مثال عملي: Search Query</div>
<input
  type="text"
  id="searchInput"
  placeholder="ابحث عن..."
  value="python tutorial"
/>
<button onclick="createSearchURL()">🔗 Create Search URL</button>
```

## Common Characters Table

A reference table showing the percent-encoded values of frequently used special characters.

```html
<table style="width: 100%; border-collapse: collapse">
  <tr style="background: #007bff; color: white">
    <th style="padding: 10px; text-align: left; border: 1px solid #ddd">
      الحرف
    </th>
    <th style="padding: 10px; text-align: left; border: 1px solid #ddd">
      Encoded
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; border: 1px solid #ddd">Space ( )</td>
    <td style="padding: 10px; border: 1px solid #ddd">
      <code>%20</code>
    </td>
  </tr>
</table>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ encodeURIComponent() encodes special characters for URLs
✔️ decodeURIComponent() reverses URL encoding
✔️ Space becomes %20, & becomes %26, = becomes %3D
✔️ URL encoding is required for safe query parameters
✔️ Encoding prevents broken URLs and injection issues
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| encodeURIComponent | Encodes text for URLs | `encodeURIComponent("hello world")` |
| decodeURIComponent | Decodes percent-encoded text | `decodeURIComponent("%20")` |
| %20 | Encoded space character | `%20` |
| %26 | Encoded ampersand | `%26` |
| Query parameter | URL search data | `?query=encoded+text` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| URL Encoding | Converting chars to %XX format |
| encodeURIComponent | JavaScript encoding function |
| decodeURIComponent | JavaScript decoding function |
| Percent-Encoding | Using % followed by hex code |
| Purpose | Safe URL transmission |

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
