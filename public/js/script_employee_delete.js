var input_id = document.getElementById('id');
var input_name = document.getElementById('name');
var input_designation = document.getElementById('designation');
var input_email = document.getElementById('email');
var input_phone = document.getElementById('phone');  
var input_age = document.getElementById('age');

var img_avatar = document.getElementById('avatar');

employee_delete = () => { 
    // Token from login
    const TOKEN = window.localStorage.getItem("userToken");
    console.log(TOKEN);
    console.log('------------------------');

    // JSON Form Data
    var formData = {
        "employeeID": input_id.value,
    }

    // XMLH Request
    var xhr = new XMLHttpRequest();

    // Set Request Type and URL Target
    xhr.open('POST', '/api/employee/delete')
    
    // Set Content Type
    xhr.setRequestHeader("Content-Type", "application/json");

    // Add Authentication to header
    xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);

    // Send request with json data
    xhr.send(JSON.stringify(formData));

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var data = xhr.response;
            data = JSON.parse(data);
            text_msg.innerHTML = "[Server] " + data.message;

            
            input_id.value = data._id;
            input_name.value = data.name;
            input_designation.value = data.designation;
            input_email.value = data.email;
            input_phone.value = data.phone;
            input_age.value = data.age;

            //Reset Input
            input_id.value = "";
            input_name.value = "";
            input_designation.value = "";
            input_email.value = "";
            input_phone.value = "";
            input_age.value = "";

            img_avatar.src = "./assets/image -  b_roll - avatar placeholder 1.png";
            
        }
    }

    //Fail the onsubmit to avoid page refresh.
    return false; 
}