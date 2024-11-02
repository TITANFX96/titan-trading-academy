// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        // Prevent the default click behavior
        event.preventDefault();
        
        // Get the section the link is pointing to
        const sectionID = this.getAttribute('href');
        const section = document.querySelector(sectionID);
        
        // Scroll to the section smoothly
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation for the contact form
function validateForm(event) {
    // Prevent the form from submitting if validation fails
    event.preventDefault();

    // Get form input elements by their 'name' attribute
    const name = document.querySelector('input[name="name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    // Basic validation: Check that all fields have a value
    if (!name.value || !email.value || !message.value) {
        alert('Please fill out all fields.');
        return false;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // If all checks pass, allow form submission
    alert('Form submitted successfully!');
    return true;
}

// Attach validation function to the form's submit event
document.querySelector('#contact form').addEventListener('submit', validateForm);
