// Toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

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
    pglogs.textContent = ''; // Clear previous messages

    // Validate input
    if (!username || !email || !password) {
        pglogs.textContent = 'Please fill in all fields (username, email, and password).'; // Show error message
        return; // Stop the function if validation fails
    }

    // Send the signup data to the external server
    fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json().then(data => {
        if (!response.ok) {
            pglogs.textContent = data.message || 'Sign up failed. Please try again.'; // Show server error
            throw new Error(data.message);
        }
        return data; // Return data if response is ok
    }))
    .then(data => {
        pglogs.textContent = data.message; // Show success message
    })
    .catch(error => {
        console.error('Error during signup:', error);
        pglogs.textContent = error.message || 'An error occurred. Please try again.'; // Show general error
    });
}

// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const pglogs = document.getElementById('logs');

    // Clear previous logs
    pglogs.textContent = ''; // Clear previous messages

    // Validate input
    if (!username || !password) {
        pglogs.textContent = 'Please fill in both username and password.'; // Show error message
        return; // Stop the function if validation fails
    }

    // Send the login data to the external server
    fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json().then(data => {
        if (!response.ok) {
            pglogs.textContent = data.message || 'Login failed. Please try again.'; // Show server errors
            throw new Error(data.message);
        }
        return data; // Return data if response is ok
    }))
    .then(data => {
        pglogs.textContent = data.message; // Show success message
        window.location.href = 'logout/logout.html'; // Redirect after success
    })
    .catch(error => {
        console.error('Error during login:', error);
        pglogs.textContent = error.message || 'An error occurred. Please try again.'; // Show general error
    });
}
