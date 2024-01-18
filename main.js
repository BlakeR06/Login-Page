document.addEventListener('DOMContentLoaded', function () {
    const signUpButton = document.getElementById('signUp');
    const loginButton = document.getElementById('login-button');
    const loginContainer = document.getElementById('one');
    const signUpContainer = document.getElementById('two');

    //localStorage.clear();

    function addUser(username, password) {
        // Retrieve existing user data from LocalStorage
        const savedUserData = JSON.parse(localStorage.getItem('userSignupData')) || [];

        // Check if the username already exists
        if (savedUserData.some(user => user.username === username)) {
            displayAlert('Username already exists. Please choose a different one.'); 
            clearInputFields()
            throw new Error("Stopping execution");
        }

        // Add the new user
        savedUserData.push({ username, password });

        // Save the updated user data back to LocalStorage
        localStorage.setItem('userSignupData', JSON.stringify(savedUserData));
    }

    function clearInputFields() {
        document.getElementById('new-username').value = '';
        document.getElementById('new-password').value = '';
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
    }

    function switchToLogin() {
        loginContainer.style.display = 'flex';
        signUpContainer.style.display = 'none';
        loginButton.style.backgroundColor = 'white';
    }

    function displayAlert(message) {
        alert(message);
    }

    signUpButton.addEventListener('click', function () {
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;

        if (newUsername && newPassword) {
            addUser(newUsername, newPassword);
            displayAlert('Signed up successfully. Click "OK" to continue to login.');
            clearInputFields();
            switchToLogin();
        } else {
            displayAlert('Please fill in all fields.');
        }
    });

    loginButton.addEventListener('click', function () {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve user data from LocalStorage
        const savedUserData = JSON.parse(localStorage.getItem('userSignupData')) || [];

        const user = savedUserData.find((user) => user.username === username && user.password === password);

        if (user) {
            window.location.href = 'home.html';
            clearInputFields();
        } else {
            displayAlert('Incorrect username or password.');
            clearInputFields();
        }
    });
});

