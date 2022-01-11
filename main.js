let changeOfTheme = document.getElementById("page");
let button = document.getElementById("switchTheme");

button.addEventListener("click", function() {
    changeOfTheme.classList.toggle("dark");
    localStorage.theme = document.body.className || "light";
});

if (!localStorage.theme) localStorage.theme = "light";
document.body.className = localStorage.theme;