const form = document.getElementById('registration-form');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('password-error');
const confirmPasswordInput = document.getElementById('confirm-password');
const confirmPasswordError = document.getElementById('confirm-password-error');

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{8,}$/;
  return regex.test(password);
}

function validateConfirmPassword(password, confirmPassword) {
  return password === confirmPassword;
}

function showError(input, errorElement, message) {
  input.classList.add('error');
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove('error');
  errorElement.textContent = '';
}

emailInput.addEventListener('input', () => {
  if (!validateEmail(emailInput.value)) {
    showError(emailInput, emailError, 'Некорректный email');
  } else {
    clearError(emailInput, emailError);
  }
});

passwordInput.addEventListener('input', () => {
  if (!validatePassword(passwordInput.value)) {
    showError(passwordInput, passwordError, 'Пароль должен содержать не менее 8 символов, цифры и латинские символы');
  } else {
    clearError(passwordInput, passwordError);
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (!validateConfirmPassword(passwordInput.value, confirmPasswordInput.value)) {
    showError(confirmPasswordInput, confirmPasswordError);}});
