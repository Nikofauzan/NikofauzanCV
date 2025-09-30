// Toggle tema gelap & terang
const themeToggleBtn = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("theme-toggle-sun");
const moonIcon = document.getElementById("theme-toggle-moon");

function updateThemeIcons() {
    if (document.documentElement.classList.contains("dark")) {
        sunIcon.classList.remove("hidden");
        moonIcon.classList.add("hidden");
    } else {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
}

themeToggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    updateThemeIcons();
});

updateThemeIcons();

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
