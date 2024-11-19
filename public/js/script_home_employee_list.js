var table = document.getElementById('myTable');
var text_msg = document.getElementById('msg');

// Row Template
table_add_row = ( id, name, designation, email, phone, age) => {
    const row = document.createElement('tr');
    const col_id = document.createElement('td');
    const col_name = document.createElement('td');
    const col_designation = document.createElement('td');
    const col_email = document.createElement('td');
    const col_phone = document.createElement('td');
    const col_age = document.createElement('td');

    col_id.innerHTML = id;
    col_name.innerHTML = name;
    col_designation.innerHTML = designation;
    col_email.innerHTML = email;
    col_phone.innerHTML = phone;
    col_age.innerHTML = age;

    row.appendChild(col_id);
    row.appendChild(col_name);
    row.appendChild(col_designation);
    row.appendChild(col_email);
    row.appendChild(col_phone);
    row.appendChild(col_age);
    table.appendChild(row);
}

// Clear Table
table_refresh = () => {
    table.innerHTML = "";

    const row = document.createElement('tr');
    const col_id = document.createElement('th');
    const col_name = document.createElement('th');
    const col_designation = document.createElement('th');
    const col_email = document.createElement('th');
    const col_phone = document.createElement('th');
    const col_age = document.createElement('th');

    col_id.innerHTML = "Employee ID";
    col_name.innerHTML = "Employee Name";
    col_designation.innerHTML = "Employee Designation";
    col_email.innerHTML = "Employee Email";
    col_phone.innerHTML = "Employee Phone";
    col_age.innerHTML = "Employee Age";

    row.appendChild(col_id);
    row.appendChild(col_name);
    row.appendChild(col_designation);
    row.appendChild(col_email);
    row.appendChild(col_phone);
    row.appendChild(col_age);
    table.appendChild(row);
}

// Main Table Function
table_populate = () => {
    // Token from login
    const TOKEN = window.localStorage.getItem("userToken");
    console.log(TOKEN);
    console.log('------------------------');


    // Clear Table
    table_refresh();

    // XMLH Request
    var xhr = new XMLHttpRequest();
    
    // Set Request Type and URL Target
    xhr.open('GET', '/api/employee')

    // Set Content Type
    xhr.setRequestHeader("Content-type", "application/json");

    // Add Authentication to header
    xhr.setRequestHeader('Authorization', 'Bearer ' + TOKEN);

    // Send Request
    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var data = xhr.response;
            data = JSON.parse(data);
            
            console.log(data.message);

            text_msg.innerHTML = "[Server] " + data.message;

            if(data.status == true){
                data = data.response;

                for(var i=0; i<data.length; i++){
                    table_add_row(
                        data[i]._id,
                        data[i].name,
                        data[i].designation,
                        data[i].email,
                        data[i].phone,
                        data[i].age
                    )
                }
            }
        }
    }
}

// Main Function

table_populate();

setInterval(() => {
    table_populate();
}, 60000);