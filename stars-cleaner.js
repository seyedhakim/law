// دریافت تمام داده‌های ورودی
const items = $input.all();

// پیمایش آیتم‌ها
for (let item of items) {
  for (let key in item.json) {
    // بررسی می‌کنیم که آیا مقدار، متن (string) هست یا خیر
    if (typeof item.json[key] === 'string') {
      
      // جایگزینی ** با *
      // از / \ \ * \ \ * /g استفاده می‌کنیم چون ستاره کاراکتر رزرو شده است
      item.json[key] = item.json[key].replace(/\*\*/g, '*');
      
    }
  }
}

// فرستادن نتیجه به نود بعدی
return items;
