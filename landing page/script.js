// Get elements
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const modalBackground = document.getElementById("modalBackground");
const signUpForm = document.getElementById("signUpForm");
const loginForm = document.getElementById("loginForm");
const closeSignUpForm = document.getElementById("closeSignUpForm");
const closeLoginFormBtn = document.getElementById("closeLoginFormBtn");
const switchToLoginBtn = document.getElementById("switchToLoginBtn");
const switchToSignUpBtn = document.getElementById("switchToSignUpBtn");
const signUpFormElement = document.getElementById("signUpFormElement");
const loginFormElement = document.getElementById("loginFormElement");
const welcomeMessage = document.getElementById("welcomeMessage");


// Show Sign Up form
signUpBtn?.addEventListener("click", () => {
  modalBackground.style.display = "flex";
  signUpForm.style.display = "block";
  loginForm.style.display = "none";
});

// Show Login form
loginBtn.addEventListener("click", () => {
  modalBackground.style.display = "flex";
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

// Close forms
closeSignUpForm.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

closeLoginFormBtn.addEventListener("click", () => {
  modalBackground.style.display = "none";
});

// Switch to login
switchToLoginBtn.addEventListener("click", () => {
  signUpForm.style.display = "none";
  loginForm.style.display = "block";
});

// Switch to sign up
switchToSignUpBtn.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "block";
});

// Handle sign up
signUpFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  modalBackground.style.display = "none";
  loginBtn.style.display = "none";
  signUpBtn.style.display = "none";
  welcomeMessage.style.display = "block";
  alert("Sign up successful!");
});

// Handle login
loginFormElement.addEventListener("submit", (e) => {
  e.preventDefault();
  modalBackground.style.display = "none";
  loginBtn.style.display = "none";
  signUpBtn.style.display = "none";
  welcomeMessage.style.display = "block";
  alert("Login successful!");
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;
  const arrow = element.querySelector(".angle-bracket");
  if (answer.style.display === "none") {
    answer.style.display = "block";
    arrow.innerHTML = "&#10095;"; // rotated arrow
    arrow.style.transform = "rotate(90deg)"; // rotate clockwise
  } else {
    answer.style.display = "none";
    arrow.innerHTML = "&#10097;"; // original arrow
    arrow.style.transform = "rotate(0deg)"; // reset rotation
  }
}



