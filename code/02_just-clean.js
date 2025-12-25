// تمام آیتم‌های ورودی را می‌گیریم
const items = $input.all();

// روی هر آیتم پردازش انجام می‌دهیم
const processedItems = items.map(item => {
  let value = item.json.p || ""; // گرفتن مقدار p (اگر خالی بود، رشته خالی)

  // تبدیل به رشته (اگر عدد بود) و حذف کاراکترهای مخفی از ابتدا
  const cleanedValue = String(value).replace(/^[\s\u200B-\u200D\uFEFF]+/, '');

  // برگرداندن فقط فیلد p اصلاح شده
  return {
    json: {
      p: cleanedValue
    }
  };
});

return processedItems;
