function showMessage() {
    alert("Welcome to Vasanth & Shivani's World! ❤️");
}
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});