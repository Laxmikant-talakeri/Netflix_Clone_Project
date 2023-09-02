const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    const email = document.querySelector('#mail').value;
    const emailInput = document.querySelector('#mail'); // Get the email input element

    if (email === "") {
        alert("Please enter your email address.");
    } else {
        alert("Thank you for providing your email address.");
        emailInput.value = ""; // Clear the email input
    }
});
