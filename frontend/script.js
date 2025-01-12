// Function to toggle between login and register forms
function toggleForm(formType) {
    if (formType === 'register') {
        // Show Register Form
        document.getElementById('register-section').style.display = 'block';
        document.getElementById('login-section').style.display = 'none';
    } else {
        // Show Login Form
        document.getElementById('register-section').style.display = 'none';
        document.getElementById('login-section').style.display = 'block';
    }
}
