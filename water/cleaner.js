const fs = require('fs');

try {
    // ۱. خوندن فایل اصلی
    let content = fs.readFileSync('main.md', 'utf8');

    // ۲. پیدا کردن "### ماده X" و تبدیل آن به لینک "### [ماده X](X.md)"
    // این Regex عدد ماده رو برمی‌داره و توی لینک جاگذاری می‌کنه
    const linkedContent = content.replace(/### ماده\s+(\d+)/g, '### [ماده $1]($1.md)');

    // ۳. ذخیره تغییرات در همان فایل main.md
    fs.writeFileSync('main.md', linkedContent, 'utf8');

    console.log("🔗 ایول! تمام ماده‌ها در main.md به فایل‌های تکی لینک شدند.");
    console.log("📂 حالا توی main.md روی عنوان ماده‌ها کلیک کن تا جابجا بشی.");

} catch (err) {
    console.error("❌ اوپس! مشکلی در لینک‌گذاری پیش اومد:", err);
}