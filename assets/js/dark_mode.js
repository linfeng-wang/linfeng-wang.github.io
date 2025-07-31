// document.addEventListener('DOMContentLoaded', function() {
//     const mode_toggle = document.getElementById("light-toggle");

//     mode_toggle.addEventListener("click", function() {
//         toggleTheme(localStorage.getItem("theme"));
//     });
// });

// darkmode.js
document.addEventListener('DOMContentLoaded', function() {
    // Disable dark mode toggle
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
});