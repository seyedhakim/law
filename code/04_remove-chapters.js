// لیست کلماتی که اگر خط با آن‌ها شروع شود، باید حذف شود
const forbiddenTitles = ["باب", "فصل", "کلیات", "سایر"];

// استفاده از متد filter برای حذف آیتم‌های ناخواسته
const filteredItems = $input.all().filter(item => {
  const text = item.json.p ? item.json.p.trim() : "";

  // بررسی می‌کنیم آیا متن با هیچ‌کدام از کلمات ممنوعه شروع می‌شود یا خیر
  // اگر شروع شود، نتیجه true می‌شود و علامت ! آن را به false تبدیل می‌کند تا حذف شود
  const isForbidden = forbiddenTitles.some(title => text.startsWith(title));

  return !isForbidden;
});

// بازگرداندن لیست پاکسازی شده
return filteredItems;
