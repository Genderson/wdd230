const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const feedback = document.querySelector('#feedback');

confirmPassword.addEventListener('focusout', comparePassword);

function comparePassword(){
    if (password.value === confirmPassword.value){
        feedback.textContent = "";
    }
    else{
        password.value = "";
        confirmPassword.value = "";
        password.focus();
        feedback.textContent = "Values do not match. Please try again.";
    }
}

const rangeInput = document.querySelector('#page-rating');
const valueDisplay = document.querySelector('#pageratingvalue');

rangeInput.addEventListener('input', function() {
    valueDisplay.textContent = this.value;
});

const emailInput = document.querySelector('#user-email');
const emailPattern = /^[a-zA-Z0-9._%+-]+@byui\.edu$/;

emailInput.addEventListener('input', () => {
    const email = emailInput.value;

    if (!emailPattern.test(emailInput.value)) {
        emailInput.setCustomValidity('Enter a valid email address ending with @byui.edu');
      } else {
        emailInput.setCustomValidity('');
      }
});