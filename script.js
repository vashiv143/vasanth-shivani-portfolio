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
  document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;

      const subject = encodeURIComponent("Website Message");
      const body = encodeURIComponent(
        "Name: " + name + "\nMessage: " + message
      );

      window.location.href =
        "mailto:vasanthnaveen2008?subject=" + subject + "&body=" + body;
    });
  }
});

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
      "mailto:vasanthnaveen2008@gmail.com?subject=" + subject + "&body=" + body,
      "_self"
    );
  });
});