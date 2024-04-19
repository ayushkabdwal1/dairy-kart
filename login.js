let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
});

// JavaScript function to handle form submission
document.getElementById("login-box").addEventListener("clkbtn", function(event) {
    event.preventDefault(); // Prevent default form submission
    var email = document.getElementById("email ele").value;
    var password = document.getElementById("password ele").value;
    
    // Check if username and password are valid
    if (email === "admin" && password === "password") {
        // If valid, redirect to the next page (replace 'nextpage.html' with the URL of your next page)
        window.location.href = "project.html";
    } else {
        // If invalid, display error message
        document.getElementById("errorMessage").textContent = "Invalid username or password. Please try again.";
    }
});
