document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can expand this)
    if (name && email && message) {
        // Show success alert
        const alertDiv = document.getElementById('alert');
        alertDiv.className = 'alert alert-success';
        alertDiv.innerHTML = 'Message sent successfully!';
        alertDiv.style.display = 'block';

        // Clear form fields
        document.getElementById('contactForm').reset();
    } else {
        // Show error alert
        const alertDiv = document.getElementById('alert');
        alertDiv.className = 'alert alert-danger';
        alertDiv.innerHTML = 'Please fill in all fields.';
        alertDiv.style.display = 'block';
    }
});