// Hardcoded users (username:password)
const USERS = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" }
];

// DOM Elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMsg = document.getElementById("error-message");
const loginContainer = document.getElementById("login-container");
const dashboardContainer = document.getElementById("dashboard-container");
const userDisplay = document.getElementById("user-display");
const logoutBtn = document.getElementById("logout-btn");

// Login event
loginForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const username = usernameInput.value.trim();
  const password = passwordInput.value;

  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (user) {
    // Success
    errorMsg.textContent = "";
    showDashboard(username);
    // Optionally, you could save login state to localStorage/sessionStorage
  } else {
    // Failure
    errorMsg.textContent = "Invalid username or password.";
  }
});

// Show dashboard and hide login
function showDashboard(username) {
  loginContainer.style.display = "none";
  dashboardContainer.style.display = "block";
  userDisplay.textContent = username;
}

// Logout event
logoutBtn.addEventListener("click", function() {
  dashboardContainer.style.display = "none";
  loginContainer.style.display = "block";
  loginForm.reset();
  errorMsg.textContent = "";
});