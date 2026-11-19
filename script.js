function showMessage() {
    alert("Welcome to Vasanth & Shivani's World! ❤️");
}
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
});
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    const subject = encodeURIComponent("Website Message");
    const body = encodeURIComponent(
      "Name: " + name + "\nMessage: " + message
    );

    window.open(
      "mailto:vasanth200808@gmail.com?subject=" + subject + "&body=" + body,
      "_self"
    );
  });
});