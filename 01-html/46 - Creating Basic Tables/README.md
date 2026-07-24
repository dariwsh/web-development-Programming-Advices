# Lesson 46 - Creating Basic Tables

---

# 📘 Introduction

In this lesson, we learned about:

# Creating HTML Tables with <table>, <tr>, <th>, and <td>

is:

> HTML tables organize data into rows and columns using the `<table>` element along with `<tr>` for rows, `<th>` for header cells, and `<td>` for data cells.

---

# 🎯 Main Idea

HTML tables provide a structured way to display tabular data on web pages using table rows and cells, with `<th>` elements specifically designed for header content.

---

# 💡 Example

**A simple example:**

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>46 - Creating Basic Tables</title>
  </head>
  <body>
    <p>
        The following table shows a list of employees:
    </p>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Job</th>
            <th>Salary</th>
        </tr>
        <tr>
            <td>John Doe</td>
            <td>30</td>
            <td>Software Engineer</td>
            <td>$80,000</td>
        </tr>
        <tr>
            <td>Jane Smith</td>
            <td>28</td>
            <td>Data Analyst</td>
            <td>$70,000</td>
        </tr>
        <tr>
            <td>Mike Johnson</td>
            <td>35</td>
            <td>Project Manager</td>
            <td>$90,000</td>
        </tr>

        </table>
  </body>
</html>
```

---

# ✨ Key Points / Breaking Down the Example

## Table Container and Border

The `<table>` element creates the table, and the `border` attribute adds visible borders.

```html
<table border="1">
```

## Table Header Row

The `<tr>` element defines a table row, and `<th>` defines header cells that are bold and centered by default.

```html
<tr>
    <th>Name</th>
    <th>Age</th>
    <th>Job</th>
    <th>Salary</th>
</tr>
```

## Table Data Rows

Each `<tr>` defines a row, and `<td>` defines standard data cells within that row.

```html
<tr>
    <td>John Doe</td>
    <td>30</td>
    <td>Software Engineer</td>
    <td>$80,000</td>
</tr>
```

---

# 🧠 Rules / Key Concepts

```text
✔️ <table> is the container for the entire table
✔️ <tr> defines a table row
✔️ <th> defines a header cell (bold and centered)
✔️ <td> defines a standard data cell
✔️ border="1" adds visible borders to cells
✔️ Tables should have at least one <tr> with <th> or <td>
```

---

# 🧩 Summary Table

| Part | Meaning | Example |
| --------- | ----------------------------- | ----------------- |
| table | Table container element | `<table border="1">` |
| tr | Table row | `<tr>` |
| th | Header cell | `<th>Name</th>` |
| td | Data cell | `<td>John Doe</td>` |
| border | Adds cell borders | `border="1"` |

---

# ✅ Summary

| Concept | Meaning |
| ---------- | ------------------------------- |
| table | Container for tabular data |
| tr | Table row element |
| th | Header cell (bold, centered) |
| td | Standard data cell |
| border | Visual cell border attribute |

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
