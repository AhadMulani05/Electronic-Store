let users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('signUpForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    const userExists = users.some(user => user.username === newUsername);

    if (userExists) {
        document.querySelector('.message').textContent = 'Username already taken.';
    } else {
        users.push({ username: newUsername, password: newPassword });
        localStorage.setItem('users', JSON.stringify(users));
        document.querySelector('.message').textContent = 'Sign up successful! You can now log in.';
        document.querySelector('.message').style.color = 'green';
    }
});

document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        document.querySelector('.message').textContent = 'Login successful!';
        document.querySelector('.message').style.color = 'green';
    } else {
        document.querySelector('.message').textContent = 'Invalid username or password.';
        document.querySelector('.message').style.color = 'red';
    }
});
