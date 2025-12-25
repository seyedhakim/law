// دریافت تمام آیتم‌ها
const allItems = $input.all();
const finalActs = [];
let currentAct = "";

for (const item of allItems) {
    let text = item.json.p ? item.json.p : "";

    // این ریجکس (Regex) کاراکترهای مخفی و نیم‌فاصله در ابتدای متن را نادیده می‌گیرد
    const isMadda = /^[\s\u200c]*ماده/.test(text);
    const isTabasareh = /^[\s\u200c]*تبصره/.test(text);

    if (isMadda) {
        // اگر ماده جدید پیدا شد، قبلی را ذخیره کن
        if (currentAct !== "") {
            finalActs.push({ act: currentAct });
        }
        currentAct = text.trim();
    } 
    else if (isTabasareh && currentAct !== "") {
        // اگر تبصره بود، به ماده فعلی اضافه‌اش کن
        currentAct += "\n" + text.trim();
    }
}

// اضافه کردن آخرین مورد
if (currentAct !== "") {
    finalActs.push({ act: currentAct });
}

// برگرداندن خروجی نهایی
return finalActs.map(item => ({ json: item }));
