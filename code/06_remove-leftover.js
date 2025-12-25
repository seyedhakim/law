// ۱. دریافت تمام آیتم‌های ورودی از نود قبلی
const items = $input.all();

// ۲. فیلتر کردن آیتم‌ها بر اساس طول فیلد p
const filteredItems = items.filter(item => {
  // گرفتن مقدار p از داخل json
  const pValue = item.json.p;

  // بررسی شرط: 
  // اول مطمئن می‌شیم p وجود داره و رشته هست (undefined نیست)
  // بعد چک می‌کنیم که طولش ۱۰ یا بیشتر باشه
  return pValue && typeof pValue === 'string' && pValue.length >= 10;
});

// ۳. بازگرداندن آیتم‌های تایید شده
return filteredItems;
