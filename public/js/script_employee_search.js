var input_id = document.getElementById('id');
var input_name = document.getElementById('name');
var input_designation = document.getElementById('designation');
var input_email = document.getElementById('email');
var input_phone = document.getElementById('phone');  
var input_age = document.getElementById('age');

var text_msg = document.getElementById('msg');

var img_avatar = document.getElementById('avatar');

employee_search = () => { 
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
    xhr.open('POST', '/api/employee/show')
    
    // Set Content Type
    xhr.setRequestHeader("Content-Type", "application/json");

    // Add Authentication to header
    xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);

    // Send request with json data
    xhr.send(JSON.stringify(formData));

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var data = xhr.response;
            data = JSON.parse(data).response;
            
            console.log(data);
            
            input_id.value = data._id;
            input_name.value = data.name;
            input_designation.value = data.designation;
            input_email.value = data.email;
            input_phone.value = data.phone;
            input_age.value = data.age;
            img_avatar.src = data.avatar;
            
        }
    }

    //Fail the onsubmit to avoid page refresh.
    return false; 
}