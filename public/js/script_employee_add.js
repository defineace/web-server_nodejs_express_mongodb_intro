var input_name = document.getElementById('name');
var input_designation = document.getElementById('designation');
var input_email = document.getElementById('email');
var input_phone = document.getElementById('phone');  
var input_age = document.getElementById('age');

var text_msg = document.getElementById('msg');

var img_avatar = document.getElementById('avatar');
var input_file = document.getElementById('myFile');

post_employee = () => { 
    // Token from login
    const TOKEN = window.localStorage.getItem("userToken");
    console.log(TOKEN);
    console.log('------------------------');

    // JSON Form Data
    const formData = new FormData();

    formData.append("name", input_name.value);
    formData.append("designation", input_designation.value);
    formData.append("email", input_email.value);
    formData.append("phone", input_phone.value);
    formData.append("age", input_age.value);
    formData.append("avatar", input_file.files[0]);
    
    // XMLH Request
    var xhr = new XMLHttpRequest();
    
    // Set Request Type and URL Target
    xhr.open('POST', '/api/employee/store', true);

    // Add Authentication to header
    xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);

    // Send request with json data
    xhr.send(formData);
    

   
    ///////////////////////////////////////////////////////////////////

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            
            var data = xhr.response;
            data = JSON.parse(data);
            text_msg.innerHTML = "[Server] " + data.message;

            //Reset Input
            input_name.value = "";
            input_designation.value = "";
            input_email.value = "";
            input_phone.value = "";
            input_age.value = "";
            input_file.value = "";
        }
    }

    //Fail the onsubmit to avoid page refresh.
    return false; 
}

employee_add = () => {
    if(
        input_name.value == "" ||
        input_designation.value == "" ||
        input_email.value == "" ||
        input_phone.value == "" ||
        input_age.value == "" ||
        input_file.value == ""
    ){
        alert( "At least one field is missing" );
    }else{
        post_employee();
    }
}