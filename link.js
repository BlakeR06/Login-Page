document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const signUpButton = document.getElementById('signUpButton');
    const loginContainer = document.getElementById('one');
    const signUpContainer = document.getElementById('two');
    const signUpLink = document.getElementById('signUpLink')



    signUpButton.addEventListener('click', function () {
        loginContainer.style.display = 'none';
        signUpContainer.style.display = 'flex';
        loginButton.style.backgroundColor = 'rgb(120, 33, 202)';
        signUpButton.style.backgroundColor = 'white';
    });

    signUpLink.addEventListener('click', function () {
        loginContainer.style.display = 'none';
        signUpContainer.style.display = 'flex';
        loginButton.style.backgroundColor = 'rgb(120, 33, 202)';
        signUpButton.style.backgroundColor = 'white';
    });

    loginButton.addEventListener('click', function () {
        loginContainer.style.display = 'flex';
        signUpContainer.style.display = 'none';
        loginButton.style.backgroundColor = 'white';
        signUpButton.style.backgroundColor = 'rgb(120, 33, 202)';
    });

});