document.addEventListener('DOMContentLoaded', function() {
    // Toggle between Login and Register
    const toggleFormLink = document.getElementById('toggleForm');
    const formTitle = document.getElementById('formTitle');
    const authButton = document.getElementById('authButton');
    const loginRegisterSection = document.getElementById('login-register');
    const visaFormSection = document.getElementById('visa-form');

    toggleFormLink.addEventListener('click', function(event) {
        event.preventDefault();
        if (formTitle.innerText === "Login") {
            formTitle.innerText = "Register";
            authButton.innerText = "Register";
            toggleFormLink.innerText = "Already have an account? Login";
        } else {
            formTitle.innerText = "Login";
            authButton.innerText = "Login";
            toggleFormLink.innerText = "Don't have an account? Register";
        }
    });

    // Handle Login/Register
    document.getElementById('authForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        // Store user details
        localStorage.setItem('userFullName', fullName);
        localStorage.setItem('userEmail', email);

        // Redirect to application form
        loginRegisterSection.style.display = "none";
        visaFormSection.style.display = "block";
    });

    // Populate application form with user details
    if (localStorage.getItem('userFullName')) {
        document.getElementById('fullName').value = localStorage.getItem('userFullName');
        document.getElementById('email').value = localStorage.getItem('userEmail');
    }

    // Handle Visa Application Submission
    document.getElementById('application-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(this);
        const formDataObj = {};
        formData.forEach((value, key) => {
            formDataObj[key] = value;
        });

        localStorage.setItem('visaApplication', JSON.stringify(formDataObj));

        alert("Your visa application has been saved!");
        this.reset();
    });
});



