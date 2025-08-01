const form = document.getElementById("user-form");
const inputs = document.querySelectorAll("input");
const select = document.querySelectorAll("select");
const passwordInput = document.getElementById("password-input");
const confPasswordInput = document.getElementById("confirm-password-input");
const showHide = document.getElementById("show/hide");
const confShowHide = document.getElementById("conf-show/hide");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    //Call our main function which validates all the values;
    validator();
})

function validator(){

    // Validation function for our inputs which loops through every one of them;
    inputs.forEach(input => {

        // Store our necessary data inside variables;
        const value = input.value.trim();
        const parent = input.parentElement;
        const errorClass = parent.querySelector("small");
        const email = document.getElementById("email-address-input").value;
        const password = passwordInput.value;
        const hasLetter = /[A-Za-z]/.test(password);
        const hasNumber = /[0-9]/.test(password)
        const hasSpecialChar = /[@$!%*?&]/.test(password);
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const passwordError = document.getElementById("password-error");

        let isValid = true;
        let message = "";

        switch (input.name){
            case ("first-name"):
                if (value.length < 2){
                    isValid = false;
                    message = "First name must be at least 2 characters long.";
                }
            break;
            case ("last-name"):
                if (value.length < 2){
                    isValid = false;
                    message = "Last name must be at least 2 characters long.";
                }
            break;
            case ("email-address"):
                if (!isValidEmail){
                    isValid = false;
                    message = "Please enter a valid email address.";
                }
            break;
            case ("phone-number"):
                if (!value.startsWith("+251")){
                    isValid = false;
                    message = "Please enter a valid Ethiopian phone number starting with +251 followed by 9 digits (7 or 9 as first digit).";
                }
                if (value.length < 13){
                    isValid = false;
                    message = "Phone number must include country code (+251) and be at least 13 characters.";
                }
            break;
            case ("street-address"):
                if (value.length < 5){
                    isValid = false;
                    message = "Address must be at least 5 characters long.";
                }
            break;
            case ("city"):
                if (value.length < 2){
                    isValid = false;
                    message = "City must be at least 2 characters long.";
                }
            break;
            case ("state/province"):
                if (value.length < 2){
                    isValid = false;
                    message = "State must be at least 2 characters long.";
                }
            break;
            case ("zip/postal-code"):
                if (value.length < 3){
                    isValid = false;
                    message = "Zip code must be at least 3 characters long.";
                }
            break;
            case ("username-field"):
                if (value.length < 3){
                    isValid = false;
                    message = "Username must be at least 3 characters long.";
                    console.log("username error")
                }
            break;
            case ("password"):
                let errors = [];
                if (value.length < 8){
                    errors.push("Be at least 8 characters long");
                    }
                if (!hasLetter){
                    errors.push("Contain at least one letter.");
                }
                if (!hasNumber){
                    errors.push("Contain at least one number.");
                }
                if (!hasSpecialChar){
                    errors.push("Contain at least one special character.");
                }

                if (value.length < 8 || !hasLetter || !hasNumber || !hasSpecialChar){
                    isValid = false
                    console.log("There is at least one error");
                }

                passwordError.innerHTML = "";

                errors.forEach(error => {
                    var li = document.createElement("li")
                    li.innerText = error;
                    passwordError.appendChild(li);
                    console.log(error);
                })
            break;
            case ("confirm-password"):
                if (value === ""){
                    isValid = false;
                    message = "Please confirm your password";
                }
                if (value != password){
                    isValid = false;
                    message = "passwords does not match";
                }
            break;
        }

        if (!isValid){
            parent.classList.add("error");
           if (errorClass) errorClass.textContent = message;
        }
        else{
            parent.classList.remove("error");
            if (errorClass) errorClass.textContent = "";
        }
    })
    // Validation function for our select types which loops through each of them (i.e: gender and country);
    select.forEach(select => {
        const parent = select.parentElement;
        const value = select.value;
        const errorClass = parent.querySelector("small");

        let isValid = true;
        let message = "";

        switch(select.name){
            case("gender"):
                if (value === ''){
                    isValid = false;
                    message = "Please select a gender";
                }
            break;
            case("country"):
                if (value === ''){
                    isValid = false;
                    message = "Please select a country";
                }
            break;
        }

        if (!isValid){
            parent.classList.add("error");
            errorClass.textContent = message;
        }
        else {
            parent.classList.remove("error");
            errorClass.textContent = "";
        }
    })
}

showHide.addEventListener("click", () => {
        console.log("click")
        const type = passwordInput.type === "password" ? "text" : "password";
        passwordInput.type = type;

        showHide.classList.toggle("fa-eye");
        showHide.classList.toggle("fa-eye-slash");
    })

confShowHide.addEventListener("click", () => {
    console.log("click");
    const type = confPasswordInput.type === "password" ? "text" : "password";
    confPasswordInput.type = type;

    confShowHide.classList.toggle("fa-eye");
    confShowHide.classList.toggle("fa-eye-slash");
})

