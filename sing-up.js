document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Store credentials in localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Notify user and redirect to login page
    setTimeout(function() {
        alert('Signup successful! Redirecting to login page...');
        window.location.href = 'sing-in.html'; // Redirect to login page
    }, 1000); // Simulate a delay
});
