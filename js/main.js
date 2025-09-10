document.addEventListener("DOMContentLoaded", function () {
  console.log("Wiseworx Website Loaded");

  // Check if user is logged in (example)
  const isLoggedIn = localStorage.getItem("subscriber") === "active";
  const watchBtn = document.querySelector('a[href="login.html"]');
  
  if (isLoggedIn && watchBtn) {
    watchBtn.textContent = "Go to Dashboard";
    watchBtn.href = "dashboard.html";
  }
});