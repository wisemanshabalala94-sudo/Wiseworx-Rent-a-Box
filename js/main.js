document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.email.value;
      const password = this.password.value;

      if (email && password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
      } else {
        alert("Please enter both fields.");
      }
    });
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userEmail = localStorage.getItem("userEmail");

  if (window.location.pathname.includes("dashboard.html")) {
    if (!isLoggedIn) {
      alert("Please log in first.");
      window.location.href = "login.html";
    } else {
      const emailEl = document.getElementById("user-email");
      if (emailEl) emailEl.textContent = userEmail;
    }
  }
});
