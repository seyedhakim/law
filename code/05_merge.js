const items = $input.all();
const results = [];
let currentArticle = null;

for (const item of items) {
  // ۱. ابتدا پاک‌سازی‌های مراحل قبل را انجام می‌دهیم
  let pValue = String(item.json.p || "");
  
  // حذف کاراکترهای مخفی از ابتدا
  pValue = pValue.replace(/^[\s\u200B-\u200D\uFEFF]+/u, '');
  // حذف محتویات داخل []
  pValue = pValue.replace(/\[.*?\]/g, '');
  // حذف فاصله‌های اضافه از سر و ته
  pValue = pValue.trim();

  // اگر فیلد p بعد از پاک‌سازی خالی بود، از آن رد می‌شویم
  if (!pValue) continue;

  // ۲. بررسی می‌کنیم که آیا با کلمه "ماده" شروع می‌شود؟
  if (pValue.startsWith("ماده")) {
    // اگر از قبل ماده‌ای در حال تکمیل داشتیم، آن را به لیست نهایی اضافه کن
    if (currentArticle !== null) {
      results.push({ json: { p: currentArticle } });
    }
    // شروع یک ماده جدید
    currentArticle = pValue;
  } else {
    // اگر با ماده شروع نشد و در حال حاضر یک ماده باز داریم، این متن را به آن اضافه کن
    if (currentArticle !== null) {
      // اینجا با یک "فاصله" متن جدید را به قبلی می‌چسبانیم
      currentArticle += " " + pValue;
    }
  }
}

// اضافه کردن آخرین ماده باقی‌مانده به لیست نهایی
if (currentArticle !== null) {
  results.push({ json: { p: currentArticle } });
}

return results;
