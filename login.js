function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both the required fields.");
        return false;
    }

    // Additional validation logic if needed...

    return true;
}