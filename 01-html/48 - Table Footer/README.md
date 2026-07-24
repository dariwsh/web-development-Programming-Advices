# Lesson 48 - Table Footer

---

# 📘 Introduction

In this lesson, we learned about:

# The <tfoot> Element in HTML Tables

is:

> The `<tfoot>` element defines a set of rows summarizing the columns of a table, typically used for totals, averages, or footer information.

---

# 🎯 Main Idea

The `<tfoot>` element groups footer rows in an HTML table, commonly used to display totals or summary data. It can work together with `colspan` to create spanning summary cells.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>48 - Table Footer</title>
  </head>
  <body>
    <table style="width:50%;" border="1px;">
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Job</th>
        <th>Department</th>
        <th>Salary </th>
      </tr>
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
      <tfoot>
        <td colspan="4" style="text-align: center;"><strong>Total</strong></td>
        <td><strong>$25,500</strong></td>
      </tfoot>
    </table>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Table Structure with Data

The table contains employee data with name, age, job, department, and salary columns. The `rowspan="2"` attribute makes the "Design" department cell span two rows.

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

## Table Footer with colspan

The `<tfoot>` element contains the total row. The `colspan="4"` attribute makes the "Total" label span four columns.

```html
<tfoot>
  <td colspan="4" style="text-align: center;"><strong>Total</strong></td>
  <td><strong>$25,500</strong></td>
</tfoot>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <tfoot> defines the footer section of a table
✔️ Footer rows typically contain totals or summary data
✔️ colspan makes footer cells span multiple columns
✔️ The tfoot element can appear before or after tbody
✔️ Multiple rows can be placed inside <tfoot>
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| tfoot | Table footer container | `<tfoot>` |
| colspan | Spans columns in footer | `colspan="4"` |
| rowspan | Spans rows in body | `rowspan="2"` |
| th | Header cell | `<th>Salary</th>` |
| td | Data cell | `<td>$5000</td>` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| tfoot | Table footer element |
| colspan | Cell spans multiple columns |
| rowspan | Cell spans multiple rows |
| Total row | Summary of table data |
| Footer placement | Can appear before or after tbody |

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
