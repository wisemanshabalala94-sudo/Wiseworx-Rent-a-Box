// main.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Wiseworx Digital Website Loaded");

  // Smooth Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Header Scroll Effect
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 50) {
      header.style.background = "rgba(10, 14, 23, 0.95)";
      header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
    } else {
      header.style.background = "rgba(10, 14, 23, 0.9)";
      header.style.boxShadow = "none";
    }
  });

  // Login Form Handling (Frontend Only)
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.email.value;
      const password = this.password.value;

      if (email && password) {
        alert("Login successful! Redirecting to your dashboard...");
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
      } else {
        alert("Please enter both email and password.");
      }
    });
  }

  // Check Login Status
  if (window.location.pathname.includes("dashboard.html")) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please log in first.");
      window.location.href = "login.html";
    } else {
      const userEmail = localStorage.getItem("userEmail");
      const emailEl = document.getElementById("user-email");
      if (emailEl) emailEl.textContent = userEmail;
    }
  }

  // Referral Code Generator
  if (document.getElementById("referral-btn")) {
    document.getElementById("referral-btn").addEventListener("click", () => {
      const code = "WISEx" + Math.random().toString(36).substr(2, 6).toUpperCase();
      alert(`Your referral code: ${code}\nShare it with a friend to get R20 off!`);
    });
  }
});
