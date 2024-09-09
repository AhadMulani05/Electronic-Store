document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Retrieve stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate credentials
    if (username === storedUsername && password === storedPassword) {
        // Redirect to hello.html if login is successful
            alert('Login successful!');
            window.location.href = 'new.html'; // Redirect to hello.html
    } else {
        // Show an error message if credentials are incorrect
        alert('Invalid username or password.');
    }
});
