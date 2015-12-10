/*In order to avoid invalid form information submissions, this JavaScript is used for verifying user's input in the ‘Ask Me’ page. If all compulsory fields are filled out, a confirmation message will be displayed in blue and clear all input data, otherwise, an alert message will be displayed in red with incomplete fields highlighted with red background. Then, the user can identify the incomplete fields and fill in the form quickly. Moreover, the changeColor() function will automatically reset background colour back to white when the user clicks the input field.*/

function formValidation() {             /*Verify each compulsory input fields and display messages */
    "use strict";
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var prefix = document.getElementById("prefix");
    var email = document.getElementById("email");
    var inquiry_type = document.getElementById("inquiry_type");
    var question_area = document.getElementById("question_area");
    var feedback = document.getElementById("feedback");
    var check = true;
    
    if (fname.value == "") {
        fname.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }    
    
    if (lname.value == "") {
        lname.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (prefix.value == 0) {
        prefix.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (email.value == "") {
        email.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (inquiry_type.value == 0) {
        inquiry_type.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (question_area.value == "") {
        question_area.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
        check = false;
    }
    
    if (check == false) {
        feedback.style.color = "#ffffff";
        feedback.style.color = "#ff0000";
        feedback.innerHTML = "Please, PLEASE fill in all fields that in red.";
        return false;
    } else {
        feedback.style.color = "#0094cc";
        feedback.innerHTML = "Your question has been sent successfully.";
        fname.value = "";
        lname.value = "";
        prefix.value = 0;
        email.value = "";
        inquiry_type.value = 0;
        question_area.value = "";
        return true;
    }
}

function changeColor(input) {                 /*reset input background colour and alert message when click on input fields*/
    "use strict";
    input.style.backgroundColor = "#FFFFFF";
    feedback.innerHTML = "&nbsp;";
}

