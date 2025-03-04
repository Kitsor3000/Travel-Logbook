document.addEventListener("DOMContentLoaded", function () {
    const loadingBar = document.getElementById("loading-bar");

    
    loadingBar.style.width = "100%";

    
    window.addEventListener("load", function () {
        setTimeout(function () {
            loadingBar.style.width = "0%"; 
        }, 500); 
    });

    
    window.addEventListener("beforeunload", function () {
        loadingBar.style.width = "100%"; 
    });
});
