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


document.querySelector('#email').addEventListener('input', () => {
    const email = this.value;
    if (!email.endsWith('@byui.edu')) {
        this.setCustomValidity('Please enter an email address from the byui.edu domain');
    } else {
        this.setCustomValidity('');
    }
});