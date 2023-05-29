// Generate a random captcha text
function generateCaptcha() {
    var captchaText = "";
    var possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 6; i++) {
        captchaText += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return captchaText;
}

// Update the captcha text in the form
function updateCaptcha() {
    var captchaText = generateCaptcha();
    document.getElementById("captchaText").textContent = captchaText;
}

// Validate the captcha
function validateCaptcha() {
    var captchaInput = document.getElementById("captchaInput").value.trim();
    var captchaText = document.getElementById("captchaText").textContent.trim();
    return captchaInput === captchaText;
}

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    if (validateCaptcha()) {
        // Captcha validation successful, you can proceed with form submission
        alert("Form submitted successfully!");
        // Clear the form
        document.getElementById("contactForm").reset();
        // Update captcha
        updateCaptcha();
    } else {
        // Captcha validation failed
        alert("Invalid CAPTCHA! Please try again.");
    }
});

// Initialize captcha on page load
updateCaptcha();
