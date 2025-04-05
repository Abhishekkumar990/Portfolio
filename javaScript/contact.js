document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const status = document.getElementById("form-status");
    status.innerText = "Sending...";

    // Simulate success message
    setTimeout(() => {
        status.innerText = "Message sent successfully!";
        this.reset();
    }, 1500);
});