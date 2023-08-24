const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  loginError.textContent = "";

  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username.trim() === "" || password.trim() === "") {
    loginError.textContent = "Username and password are required";
    return;
  }

  // Simulating server-side password hashing
  const hashedPassword = await hashPassword(password);

  // In a real scenario, you would send the username and hashed password to the server for authentication

  // For demonstration purposes, let's assume correct credentials
  if (username === "user" && hashedPassword === "hashed_password") {
    window.location.href = "welcome.html"; // Redirect to a welcome page
  } else {
    loginError.textContent = "Invalid username or password";
  }
});

async function hashPassword(password) {
  // Simulating password hashing using a simple delay
  // In reality, use a strong password hashing library like bcrypt
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "hashed_password"; // Replace with actual hashed password
}
