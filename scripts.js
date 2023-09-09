const form = document.querySelector('form');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password_confirm');
const passwordErrorDisplay = document.querySelector('#password + p.error-message');

form.addEventListener('submit', 
  (event) => checkPasswordsMatch(event, password.value, passwordConfirm.value));

function checkPasswordsMatch(event, passwordValue, passwordValueConfirm) {
  if (passwordValue === passwordValueConfirm) {
    return true;
  } else {
    event.preventDefault();
    password.classList.add('error');
    passwordConfirm.classList.add('error');
    passwordErrorDisplay.textContent = '* Passwords do not match';
    return false;
  }
}