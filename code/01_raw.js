// ۱. کل محتوای فایل رو داخل این کروشه پیست کن
const rawData = [];

// ۲. این بخش داده‌ها رو برای نودهای بعدی n8n آماده می‌کنه
return rawData.map(item => {
  return {
    json: item
  };
});
