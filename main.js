document.addEventListener("DOMContentLoaded", () => {
    let password = document.querySelector("#password").value;
    let confirmPassword = document.querySelector("#confirm_pass").value;
    let error = document.querySelector(".error")
    if (password == "" && confirmPassword =="") {
        error.innerHTML = "*passwords do not match";
    } else if (password == confirmPassword) {
        error.innerHTML= ""
    }
});