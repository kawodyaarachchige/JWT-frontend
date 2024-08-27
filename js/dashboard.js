$(document).ready(function(){
let token = localStorage.getItem("token");
     if(!token){
         window.location.href = 'signin.html';
     }else {
        $.ajax({
            url: 'http://localhost:8085/api/v1/blog/newMethod',
            type: 'GET',
            headers: {
                "Authorization": "Bearer " +token
            },
            success: function(result) {

                console.log(result);
                $("#text").text(result);
            },
            error: function(error) {
                console.error('Sign up failed:', error);
                alert('Sign up failed. Please try again.');
            }
        }

        );

     }


})