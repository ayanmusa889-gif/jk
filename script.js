document.querySelector('form').addEventListener('submit', function (e) {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check for valid credentials
    if (username === "admin" && password === "123a") {
        alert('Login successful!');
        // Redirect or perform further actions here
    } else {
        e.preventDefault(); // Prevent form submission
        alert('Invalid username or password. Please try again.');
    }
});