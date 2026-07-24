# Lesson 47 - Table Spanning rowspan and colspan

---

# 📘 Introduction

In this lesson, we learned about:

# Table Cell Spanning with colspan and rowspan

is:

> The `colspan` attribute makes a cell span multiple columns, while `rowspan` makes a cell span multiple rows, allowing flexible table layouts.

---

# 🎯 Main Idea

HTML table cells can expand across multiple columns or rows using the `colspan` and `rowspan` attributes, enabling complex table structures that combine data across boundaries.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>47 - Table Spanning rowspan and colspan</title>
  </head>
  <body>
    <p>Example Table With colspan and rowspan:</p>

    <table style="width: 50%" border="1px;">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
        <th>Department</th>
        <th>Salary</th>
      </tr>

      <tfoot>
        <tr>
          <td colspan="4" style="text-align: center"><strong>Total</strong></td>
          <td><strong>$25,500</strong></td>
        </tr>
      </tfoot>

      <tr>
        <td>John</td>
        <td>30</td>
        <td>Engineer</td>
        <td>Development</td>
        <td>$5000</td>
      </tr>
      <tr>
        <td>Jane</td>
        <td>25</td>
        <td>Designer</td>
        <td rowspan="2">Design</td>
        <td>$4000</td>
      </tr>
      <tr>
        <td>Mike</td>
        <td>35</td>
        <td>UX</td>
        <!-- <td>Design</td> -->
        <td>$6000</td>
      </tr>
      <tr>
        <td>Emily</td>
        <td>28</td>
        <td>Analyst</td>
        <td>Research</td>
        <td>$4500</td>
      </tr>
      <tr>
        <td>David</td>
        <td>32</td>
        <td>Consultant</td>
        <td>Business</td>
        <td>$5500</td>
      </tr>
    </table>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Table Header

The header row defines the column names for the table.

```html
<tr>
  <th>Name</th>
  <th>Age</th>
  <th>Job</th>
  <th>Department</th>
  <th>Salary</th>
</tr>
```

## colspan for Horizontal Spanning

The `colspan` attribute makes a cell span across multiple columns, useful for footer totals.

```html
<tfoot>
  <tr>
    <td colspan="4" style="text-align: center"><strong>Total</strong></td>
    <td><strong>$25,500</strong></td>
  </tr>
</tfoot>
```

## rowspan for Vertical Spanning

The `rowspan` attribute makes a cell span across multiple rows, shown here where "Design" spans two rows.

```html
<tr>
  <td>Jane</td>
  <td>25</td>
  <td>Designer</td>
  <td rowspan="2">Design</td>
  <td>$4000</td>
</tr>
<tr>
  <td>Mike</td>
  <td>35</td>
  <td>UX</td>
  <!-- <td>Design</td> -->
  <td>$6000</td>
</tr>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ colspan makes a cell span multiple columns horizontally
✔️ rowspan makes a cell span multiple rows vertically
✔️ When using rowspan, skip the cell in subsequent rows
✔️ colspan and rowspan values are positive integers
✔️ The tfoot element defines table footer content
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| colspan | Spans multiple columns | `colspan="4"` |
| rowspan | Spans multiple rows | `rowspan="2"` |
| tfoot | Table footer section | `<tfoot>` |
| th | Header cell | `<th>Name</th>` |
| td | Data cell | `<td>Value</td>` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| colspan | Cell spans multiple columns |
| rowspan | Cell spans multiple rows |
| tfoot | Table footer element |
| Header row | Column titles using <th> |
| Data row | Content rows using <td> |

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
