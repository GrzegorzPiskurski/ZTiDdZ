const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "" && password === "") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
    	alert("Logowanie nie udane."); //dodano alert informujacy o nieudanym logowaniu.
    }
})
