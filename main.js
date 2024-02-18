const email = document.querySelector(".emailId");
const password = document.querySelector(".pswd");

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regular expression - email
    return emailRegex.test(email);
}

function validatePassword(password) {
    
    return password.length >= 8;
}

function validateForm() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (!validatePassword(passwordValue)) {
        alert("Password must be at least 8 characters long.");
        return false;
    }

    return true;
}

document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault(); 
    }
});
