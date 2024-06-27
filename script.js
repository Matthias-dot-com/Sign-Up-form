const password = document.querySelector("#Pwd");
const confirmPassword = document.querySelector("#cPwd");

function validatePasswords(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        password.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        // alert("Password Does not Match.")
        return false;
    } else {
        password.style.borderColor = "";
        confirmPassword.style.borderColor = "";

        return true;
    }
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const isFormValid = validatePasswords(password, confirmPassword);
    
    if (isFormValid) {
        
        alert('Form submitted successfully!');
    }else{
        alert("Password Does not Match.")
    }
});

document.querySelectorAll('input').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.id === 'Pwd' || input.id === 'cPwd') {
            validatePasswords(password, confirmPassword);
        }
    });
});
