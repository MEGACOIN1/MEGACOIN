// ملف JavaScript الرئيسي لموقع MegaCoin

// مثال على كود للتفاعل مع الأزرار
document.addEventListener("DOMContentLoaded", function () {
    const telegramButton = document.querySelector(".btn-primary");

    if (telegramButton) {
        telegramButton.addEventListener("click", function () {
            alert("سيتم توجيهك إلى قناة التليغرام!");
        });
    }
});