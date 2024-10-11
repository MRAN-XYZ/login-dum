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
    fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/signup', { // Change this URL if necessary
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                // Handle errors from the server
                pglogs.textContent = data.message || 'Sign up failed. Please try again.'; // Show server error
                throw new Error(data.message); // This allows the catch block to handle it too
            }
            return data; // Return data if response is ok
        });
    })
    .then(data => {
        pglogs.textContent = data.message; // Show success message
        // Optionally redirect to login or another page
        // window.location.href = 'login.html';
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
    if (!username && !password) {
        pglogs.textContent = 'Please fill in both username and password.'; // Show error message
        return; // Stop the function if validation fails
    }

    if (!username) {
        pglogs.textContent = 'Please provide your username.'; // Show error message
        return; // Stop the function if validation fails
    }

    if (!password) {
        pglogs.textContent = 'Please provide your password.'; // Show error message
        return; // Stop the function if validation fails
    }

    // Send the login data to the external server
    fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/login', { // Change this URL if necessary
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        return response.json().then(data => {
            if (!response.ok) {
                // Handle errors from the server
                pglogs.textContent = data.message || 'Login failed. Please try again.'; // Show server errors
                throw new Error(data.message); // This allows the catch block to handle it too
            }
            return data; // Return data if response is ok
        });
    })
    .then(data => {
        pglogs.textContent = data.message; // Show success message
        window.location.href = 'logout/logout.html'; // Redirect after success
    })
    .catch(error => {
        console.error('Error during login:', error);
        pglogs.textContent = error.message || 'An error occurred. Please try again.'; // Show general error
    });
}
