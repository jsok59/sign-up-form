



document.querySelector(".submit-btn").addEventListener("click", (event) => {

    checkPassword(event);
    checkPhone(event);
});

function checkPassword(event) {
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm_pass').value;
    let error = document.querySelector(".error_pass");
    if (password !== confirmPassword) {
        error.innerHTML = "* password does not match";
        
        event.preventDefault();
    } else {
        error.innerHTML = "";
        
    }
}

function checkPhone(event) {
    let phone_number = document.querySelector("#phone_number").value;
    let phone_format = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    let error = document.querySelector(".error_phone");
    if (phone_number.match(phone_format)) {
        console.log(phone_number.match(phone_format))
        error.innerHTML = "";
    } else {
        error.innerHTML = "* phone number must have 10 digits"
        event.preventDefault();
    }

}