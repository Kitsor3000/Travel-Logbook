document.addEventListener("DOMContentLoaded", function () {
    const loadingBar = document.getElementById("loading-bar");

    // Починаємо анімацію полоски при завантаженні сторінки
    loadingBar.style.width = "100%";

    // Після того, як сторінка завантажиться, закриваємо полоску
    window.addEventListener("load", function () {
        setTimeout(function () {
            loadingBar.style.width = "0%"; // Зменшуємо полоску
        }, 500); // Затримка перед приховуванням
    });

    // Використовуємо beforeunload, щоб показати полоску при переході на іншу сторінку
    window.addEventListener("beforeunload", function () {
        loadingBar.style.width = "100%"; // Коли перехід починається
    });
});
