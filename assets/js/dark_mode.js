document.addEventListener('DOMContentLoaded', function() {
    const mode_toggle = document.getElementById("darkmode-toggle");

    mode_toggle.addEventListener("click", function() {
        toggleTheme(localStorage.getItem("theme"));
    });
});

