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
async function signup() {
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

    try {
        // Send request to signup
        const response = await fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const result = await response.json();

        // Handle response
        if (response.ok) {
            pglogs.textContent = result.message; // Show success message
        } else {
            pglogs.textContent = result.message; // Show error message
        }
    } catch (error) {
        console.error('Error during signup:', error);
        pglogs.textContent = 'An error occurred during signup.';
    }
}

// Login function
async function login() {
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

    try {
        // Send request to login
        const response = await fetch('https://dramatic-charissa-mran-f1d80e9a.koyeb.app/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const result = await response.json();

        // Handle response
        if (response.ok) {
            pglogs.textContent = result.message; // Show success message
            // Redirect to logout/logout.html after a short delay
            setTimeout(() => {
                window.location.href = 'logout/logout.html'; // Use relative path to the logout directory
            }, 1000); // Redirect after 1 second for the user to see the success message
        } else {
            pglogs.textContent = result.message; // Show error message
        }
    } catch (error) {
        console.error('Error during login:', error);
        pglogs.textContent = 'An error occurred during login.';
    }
}
