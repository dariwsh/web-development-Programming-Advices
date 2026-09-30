// ==========================================
// 1. Reference Copy Example (نسخ العنوان)
// ==========================================
const user1 = { name: "Ali" };
const x = user1;
x.name = "ahmed";

console.log(user1.name); // النتيجة: "Sara"

// ==========================================
// 2. Object (الكائن)
// ==========================================
const user2 = {
  name: "Mohammed",
  age: 30,
  active: true,
};

// الوصول للبيانات
console.log(user2.name); // "Mohammed"
console.log(user2["age"]); // 30

// تعديل البيانات (Mutating)
user2.age = 31;
user2.name = "darwish";
console.log(user2.name); // "Mohammed"

// ==========================================
// 3. Array (المصفوفة)
// ==========================================
const numbers = [10, 20, 30];

// الوصول للبيانات
console.log(numbers[0]); // 10
for (let i = 0; i < 3; i++) {
  console.log(`${i + 1 } =${numbers[i]} `);
}

// تعديل البيانات (Mutating)
numbers.push(40);
numbers.push(50);
numbers.pop(40);
for (let i = 0; i <6; i++) {
  console.log(`${i + 1 } =${numbers[i]} `);
}

// ==========================================
// 4. Function (الدالة)
// ==========================================
function greet() {
  console.log("Hello!");
}
greet();

// تخزين دالة في متغير
const hello = () => "Hi!";
console.log(hello());

// ==========================================
// 5. Date (التاريخ والوقت)
// ==========================================
const now = new Date();
console.log(now);

const birthday = new Date("1990-05-15");
console.log(birthday);

// ==========================================
// 6. RegExp (التعابير النمطية)
// ==========================================
const pattern = /\d+/; // نمط للتحقق من وجود أرقام
console.log(pattern.test("abc123")); // true

// ==========================================
// 7. Map
// ==========================================
const scores = new Map();
scores.set("Ali", 95);
scores.set("Sara", 88);

console.log(scores.get("Ali")); // 95

// ==========================================
// 8. Set
// ==========================================
const ids = new Set([1, 2, 2, 3]);
console.log(ids); // Set { 1, 2, 3 } (تُحذف القيم المكررة تلقائياً)

ids.add(4); // إضافة عنصر جديد
