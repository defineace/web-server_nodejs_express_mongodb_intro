var input_username = document.getElementById('username');
var input_email = document.getElementById('email');
var input_name = document.getElementById('name');
var input_password = document.getElementById('password');

var text_msg = document.getElementById('msg');

const post_registration = () => {




    


    // JSON Form Data
    const formData = {
        "username": input_username.value,
        "email": input_email.value,
        "name": input_name.value,
        "password": input_password.value
    }

    // XMLH Request
    var xhr = new XMLHttpRequest();
    
    // Set Request Type and URL Target
    xhr.open('POST', '/api/register', true);

    // Set Content Type
    xhr.setRequestHeader("Content-type", "application/json");

    // Send request with json data
    xhr.send(JSON.stringify(formData)); 










    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            var data = xhr.response;
            data = JSON.parse(data);

            text_msg.innerHTML = "[Server] " + data.message;

            //Reset Input
            input_username.value = "";
            input_email.value = "";
            input_name.value = "";
            input_password.value = "" ;
        }
    }

    //Fail the onsubmit to avoid page refresh.
    return false; 
}

register_add = () => {
    if(
        input_username.value == "" ||
        input_email.value == "" ||
        input_name.value == "" ||
        input_password.value == "" 
    ){
        alert( "At least one field is missing" );
    }else{
        post_registration();
    }

}