$(document).ready(function() {
    $('#signup').on('click', function(event) {
        event.preventDefault();


        const username = $('#username').val();
        const email = $('#email').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirm-password').val();
        if(username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill out all fields.');
            return;
        }
        const signUpData = {
            name: username,
            email: email,
            password: password
        };

        $.ajax({
            url: 'http://localhost:8085/api/v1/auth/register',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(signUpData),
            success: function(result) {
                localStorage.setItem("token",result.data.token);
                alert('Sign up successful!');
                window.location.href = 'signin.html';
            },
            error: function(error) {
                console.error('Sign up failed:', error);
                alert('Sign up failed. Please try again.');
            }
        });
    });


    $('#signin').on('click', function(event) {
        event.preventDefault();

        const email = $('#email').val();
        const password = $('#password').val();
        if (email === '' || password === '') {
            alert('Please fill out both fields.');
            return;
        }

        const signInData = {
            email: email,
            password: password
        };
        $.ajax({
            url: 'http://localhost:8085/api/v1/auth/authenticate',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(signInData),
            success: function(response) {
                localStorage.setItem("token",response.data.token);
                alert('Sign in successful!');
                window.location.href = 'dashboard.html';
            },
            error: function(error) {
                console.error('Sign in failed:', error);
                alert('Sign in failed. Please check your credentials and try again.');
            }
        });
    });
});
