var passwordInput = document.getElementById("create-password");
var confirmPasswordInput = document.getElementById("confirm-password");
var pwLength = document.getElementById("pw-length");
var upper = document.getElementById("pw-upper");
var lower = document.getElementById("pw-lower");
var number = document.getElementById("pw-number");
var pwMatch = document.getElementById("pw-match");

function menuItemClicked(name) {
    if (name === "register") {
        document.getElementById("login-menu-item").classList.remove("active");
        document.getElementById("register-menu-item").classList.add("active");
        document.getElementById("login-page").style.display = "none";
        document.getElementById("register-page").style.display = "block";
    }
    else if (name==="login") {
        document.getElementById("register-menu-item").classList.remove("active");
        document.getElementById("login-menu-item").classList.add("active");
        document.getElementById("register-page").style.display = "none";
        document.getElementById("login-page").style.display = "block";
    }
}

passwordInput.onkeyup = function() {
    // Validate lowercase letters
    if(passwordInput.value.match(/[a-z]/g)) {
        lower.classList.remove("invalid");
        lower.classList.add("valid");
    } else {
        lower.classList.remove("valid");
        lower.classList.add("invalid");
    }

    // Validate capital letters
    if(passwordInput.value.match(/[A-Z]/g)) {
        upper.classList.remove("invalid");
        upper.classList.add("valid");
    } else {
        upper.classList.remove("valid");
        upper.classList.add("invalid");
    }

    // Validate numbers
    if(passwordInput.value.match(/[0-9]/g)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        number.classList.remove("valid");
        number.classList.add("invalid");
    }

    // Validate length
    if(passwordInput.value.length >= 8) {
        pwLength.classList.remove("invalid");
        pwLength.classList.add("valid");
    } else {
        pwLength.classList.remove("valid");
        pwLength.classList.add("invalid");
    }

    // Validate match
    if(passwordInput.value === confirmPasswordInput.value) {
        pwMatch.classList.remove("invalid");
        pwMatch.classList.add("valid");
    } else {
        pwMatch.classList.remove("valid");
        pwMatch.classList.add("invalid");
    }
}

confirmPasswordInput.onkeyup = function() {
    // Validate match
    if(passwordInput.value === confirmPasswordInput.value) {
        pwMatch.classList.remove("invalid");
        pwMatch.classList.add("valid");
    } else {
        pwMatch.classList.remove("valid");
        pwMatch.classList.add("invalid");
    }
}

var rulesElement = document.getElementById("validation-rules");
validateForm = function(){
    var rules = rulesElement.children;
    for (let rule of rules) {
        if (rule.classList.contains("invalid")) {
            alert("Your password does not meet the minimum requirements");
            return false;
        }
    }
    return true;
};