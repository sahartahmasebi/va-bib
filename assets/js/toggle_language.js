document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("language-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleLanguage(localStorage.getItem("language"));
        console.log(localStorage.getItem("language"))
    });
});

