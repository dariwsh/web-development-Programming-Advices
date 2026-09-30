// ==========================================
// Lesson 030: Activity 2 - Digital Tasbeeh Program
// ==========================================

console.log("=== Lesson 030: Activity 2 - Digital Tasbeeh Program ===");
console.log("Ready for practice!");

function startTasbeeh() {
  const btn = document.getElementById("btn");
  const textPage = document.getElementById("TextPage");

  // 1. تعطيل الزر وتغيير تنسيقه فور الضغط
  btn.disabled = true;
  btn.style.color = "gray";
  btn.style.backgroundColor = "#334155";
  btn.style.cursor = "not-allowed";

  let count = 0;

  // 2. بدء العداد كل ثانية
  const timer = setInterval(function () {
    count++;

    // تحديث النص بحسب مرحلة التسبيح
    if (count <= 33) {
      textPage.innerHTML = `سبحان الله -${count}`;
      textPage.style.color = "white";
    } else if (count <= 66) {
      textPage.innerHTML = `الحمد لله -${count - 33}`;
            textPage.style.color = "white";

    } else if (count <= 99) {
      textPage.innerHTML = `الله أكبر -${count - 66}`;
            textPage.style.color = "white";

    }

    // 3. عند الوصول إلى نهاية التسبيح (99 مرة)
    if (count === 99) {
      clearInterval(timer); // إيقاف العداد
      textPage.innerHTML =" له الا اله ٧لله واه وحده لا شريك له، له الملك وله اله وهو ٹلى كل شيء قدير";
        textPage.style.color="green";
      // إعادة تفعيل الزر وإرجاع شكله الطبيعي
      btn.disabled = false;
      btn.style.color = "";
      btn.style.backgroundColor = "";
      btn.style.cursor = "pointer";
    }
  }, 1000);
}