const Name = $("#Name");
const email = $("#email");
const phone = $("#phone");
const form = $("#gform");
const Name_error = $("#Name_error");
const email_error = $("#email_error");
const phone_error = $("#phone_error");
const submitButton = $("#submit_button");

form.submit(function (e) {
    e.preventDefault();

    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    Name_error.html("");
    email_error.html("");
    phone_error.html("");

    let hasErrors = false;

    if (Name.val() === '' || Name.val() === null) {
        Name_error.html("Name is required");
        hasErrors = true;
    }
    if (!email.val().match(email_check)) {
        email_error.html("Valid Email is required");
        hasErrors = true;
    }
    if (phone.val().length !== 10) {
        phone_error.html("Required 10 digits");
        hasErrors = true;
    }

    if (!hasErrors) {
        // If no errors, proceed with AJAX form submission
        $.ajax({
            url: "https://script.google.com/macros/s/AKfycbx7CzO0H1qaxGhypgP6g9-4WR0T6pPw6L7dvpj-WGOWY-99xomc57-LCs-bFVZB2gWn/exec",
            data: form.serialize(),
            method: "post",
            success: function (response) {
                alert("Form submitted successfully");
                window.location.reload();
            },
            error: function (err) {
                alert("Something went wrong");
            }
        });
    }
});

  
  
  
  
  
  
  