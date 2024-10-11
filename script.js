// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Check current display status and toggle
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }
}

// Sign-up function
function signup() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const pglogs = document.getElementById('logs');

    // Clear previous logs
    pglogs.textContent = '';

    // Validate input
    if (!username || !email || !password) {
        pglogs.textContent = 'Please fill in all fields (username, email, and password).';
        return;
    }

    // Simulating a successful signup
    pglogs.textContent = 'Signup successful!'; // Show success message for testing
}

// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const pglogs = document.getElementById('logs');

    // Clear previous logs
    pglogs.textContent = '';

    // Validate input
    if (!username || !password) {
        pglogs.textContent = 'Please fill in both username and password.';
        return;
    }

    // Simulating a successful login
    pglogs.textContent = 'Login successful!'; // Show success message for testing
}
