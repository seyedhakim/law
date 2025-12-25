// پیمایش روی تمام آیتم‌های ورودی n8n
for (const item of $input.all()) {
  
  // پیدا کردن تمام کلیدها (Keys) مثل p, strong, a و غیره
  const keys = Object.keys(item.json);

  for (const key of keys) {
    let value = item.json[key];

    // فقط اگر مقدار فیلد "متن" بود، عملیات پاکسازی را انجام بده
    if (typeof value === 'string') {
      item.json[key] = value
        .trim() // حذف اسپیس‌های اول و آخر
        .replace(/[\u200c\u200b\u200d\ufeff]/g, '') // حذف نیم‌فاصله و سایر کاراکترهای مخفی
        .replace(/\s+/g, ' '); // تبدیل چندین اسپیس متوالی به یک اسپیس (اختیاری)
    }
  }
}

// بازگرداندن تمام آیتم‌های اصلاح شده به مرحله بعد
return $input.all();
