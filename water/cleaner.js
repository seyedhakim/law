const fs = require('fs');

// 1. خواندن فایل
const data = fs.readFileSync('main.md', 'utf8');
let lines = data.split('\n');

let finalLines = [];
let seenChapters = new Set(); // برای اینکه بفهمیم کدوم فصل‌ها رو قبلاً دیدیم

lines.forEach(line => {
    let trimmedLine = line.trim();

    // الف) حذف عنوان تکراری قانون
    if (trimmedLine.includes("# قانون: قانون توزیع عادلانه آب")) {
        return; 
    }

    // ب) تبدیل ## ماده به ### ماده
    if (trimmedLine.startsWith("## ماده")) {
        finalLines.push(line.replace("##", "###"));
        return;
    }

    // ج) مدیریت فصل‌ها (تبدیل به ## و حذف تکراری‌ها)
    if (trimmedLine.includes("**فصل/مبحث:**")) {
        // استخراج نام فصل (پاک کردن عبارت اضافی)
        let chapterName = trimmedLine.replace("**فصل/مبحث:**", "").trim();
        
        if (!seenChapters.has(chapterName)) {
            seenChapters.add(chapterName);
            finalLines.push("## " + chapterName); // فقط اولین بار اضافه کن
        }
        return; // اگر تکراری بود، این خط را کلاً رد کن
    }

    // د) بقیه خط‌ها را بدون تغییر اضافه کن
    finalLines.push(line);
});

// 2. ذخیره تغییرات روی خودِ فایل اصلی
fs.writeFileSync('main.md', finalLines.join('\n'));

console.log("✨ ایول! تغییرات با موفقیت روی فایل اعمال و ذخیره شد.");