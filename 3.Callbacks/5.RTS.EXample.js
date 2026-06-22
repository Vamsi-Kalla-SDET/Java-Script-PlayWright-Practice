function payment(callback) {
    console.log("Payment Successful");

    callback();
}

function sendEmail() {
    console.log("Email Sent");
}

payment(sendEmail);

