// تعریف ریجکس برای شناسایی شروع با ماده یا تبصره (با احتساب نیم‌فاصله و فضای خالی)
const pattern = /^[\s\u200c]*(ماده|تبصره)/;

// فیلتر کردن آیتم‌ها
const filteredItems = items.filter(item => {
  const spanValue = item.json.span || "";
  return pattern.test(spanValue);
});

// پردازش آیتم‌های باقی‌مانده
for (let item of filteredItems) {
  let span = item.json.span || "";
  let p = item.json.p || "";

  // حذف کاراکترهای مخفی و فضاهای خالی از ابتدا و انتها برای مقایسه دقیق‌تر
  const cleanSpan = span.trim().replace(/^[\u200c]+|[\u200c]+$/g, '');
  const cleanP = p.trim().replace(/^[\u200c]+|[\u200c]+$/g, '');

  // بررسی اینکه آیا p با span شروع می‌شود یا خیر
  if (!cleanP.startsWith(cleanSpan)) {
    // اگر شروع نمی‌شد، مقدار span را به اول p اضافه کن و در همان فیلد p ذخیره کن
    item.json.p = `${span} ${p}`.trim();
  }
}

return filteredItems;
