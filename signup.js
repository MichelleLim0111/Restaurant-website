function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    if (name === "" || email === "" || password === "" || confirm_password === "") {
        alert("Please fill in all the required fields.");
        return false;
    }

    if (password !== confirm_password) {
        alert("Password and Confirm Password do not match.");
        return false;
    }

    return true;
}