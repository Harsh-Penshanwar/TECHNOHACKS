const registrationForm = document.getElementById("registration-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");

registrationForm.addEventListener("submit", (event) => {
  let isValid = true;
  usernameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  }

  if (emailInput.value.trim() === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Invalid email format";
    isValid = false;
  }

  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
});

function isValidEmail(email) {
  // Simple email validation using a regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
