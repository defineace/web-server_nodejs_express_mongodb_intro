



var input_username = document.getElementById('username');
var input_password = document.getElementById('password');

var text_msg = document.getElementById('msg');


login = () => { 







    // JSON Form Data
    var formData = {
        "username": input_username.value,
        "password": input_password.value
    }

    // XMLH Request
    var xhr = new XMLHttpRequest();

    // Set Request Type and URL Target
    xhr.open('POST', '/api/login')
    
    // Set Content Type
    xhr.setRequestHeader("Content-Type", "application/json");

    // Send request with json data
    xhr.send(JSON.stringify(formData));



    





    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var data = xhr.response;
            data = JSON.parse(data);
            text_msg.innerHTML = "[Server] " + data.message;

            if(data.status == true){
                // Create Cookie for Token
                window.localStorage.setItem('userToken', data.token);

                // Change URL Page
                window.location.href = "/home";  

            }
        }
    }

    //Fail the onsubmit to avoid page refresh.
    return false; 
}

