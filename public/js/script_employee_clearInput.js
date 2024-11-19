clearInput = () => {
    var input_file = document.getElementById('myFile');
    
    var input_name = document.getElementById('name');
    var input_designation = document.getElementById('designation');
    var input_email = document.getElementById('email');
    var input_phone = document.getElementById('phone');  
    var input_age = document.getElementById('age');

    var img_avatar = document.getElementById('avatar');

    input_file.value = "";
    input_name.value = "";
    input_designation.value = "";
    input_email.value = "";
    input_phone.value = "";
    input_age.value = "";

    img_avatar.src = "./assets/image -  b_roll - avatar placeholder 1.png";
}