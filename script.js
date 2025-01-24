const ThemeSwitchButton = document.getElementById("theme-switch-button");
ThemeSwitchButton.innerHTML = document.documentElement.getAttribute("data-theme") === "light" ? "🌙" : "☀️";
const ThemeLocalStorageVariable = "WebsiteTheme.khaleelmuhammad1998";

function setTheme(value) {
    document.documentElement.setAttribute("data-theme", value);
    localStorage.setItem(ThemeLocalStorageVariable, value);
    ThemeSwitchButton.innerHTML = value === "light" ? "🌙" : "☀️";
}

ThemeSwitchButton.addEventListener("click", () => {
    const CurrentTheme = document.documentElement.getAttribute("data-theme");
    const NewTheme = CurrentTheme === "light" ? "dark" : "light";
    setTheme(NewTheme);
});

document.addEventListener("DOMContentLoaded", () => {
    const SavedTheme = localStorage.getItem(ThemeLocalStorageVariable) || "light"; setTheme(SavedTheme);
});